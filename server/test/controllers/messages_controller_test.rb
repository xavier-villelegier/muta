require 'test_helper'

class MessagesControllerTest < ActionDispatch::IntegrationTest
  test '#create' do
    content = '{
      "coordinates": [[10,10],[20,10],[10,20],[20,20]]
    }'

    assert_difference -> { Message.count }, 1 do
      post messages_path, params: { content: content }
    end

    message = Message.last
    assert_equal '[[10, 10], [20, 10], [10, 20], [20, 20]]', message.content
  end
end
