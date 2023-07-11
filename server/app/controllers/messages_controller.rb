class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token # temporary until we implement the login

  def index
    messages = Message.all
    messages_list = messages.map do |message|
      {
        content: message.content['coordinates'],
        user_type: message.user_type,
        date: message.created_at
      }
    end

    render json: messages_list

  end

  def create
    user_type = params["is_mobile"].present? ? 'mobile' : 'device'
    coordinates = params["content"]["coordinates"]

    Message.create!(content: coordinates, user_type: user_type)
  rescue JSON::ParserError => e
    render json: { error: "Invalid JSON format" }, status: :unprocessable_entity
  end
end
