class LastMessagesController < ApplicationController
  skip_before_action :verify_authenticity_token # temporary until we implement the login

  def index
    last_message = Message.last
    render json: { id: last_message&.id, content: last_message&.content }
  end
end
