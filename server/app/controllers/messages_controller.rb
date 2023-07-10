class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token # temporary until we implement the login

  def create
    content = JSON.parse(message_params["content"])
    Message.create!(content: content["coordinates"].to_s)
  rescue JSON::ParserError => e
    render json: { error: "Invalid JSON format" }, status: :unprocessable_entity
  end

  private

  def message_params
    params.permit(:content)
  end
end
