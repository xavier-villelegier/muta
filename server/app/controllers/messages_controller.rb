class MessagesController < ApplicationController
  def create
    begin
      content = JSON.parse(message_params['content'])
      Message.create!(content: content['coordinates'].to_s)
    rescue JSON::ParserError => e
      render json: {error: "Invalid JSON format"}, status:  :unprocessable_entity
    end
  end

  private

  def message_params
    params.permit(:content)
  end
end