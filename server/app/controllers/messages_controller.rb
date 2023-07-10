class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token # temporary until we implement the login

  def create
    Message.create!(content: params["content"]["coordinates"].to_s)
  rescue JSON::ParserError => e
    render json: { error: "Invalid JSON format" }, status: :unprocessable_entity
  end
end
