require 'test_helper'

class LastMessagesControllerTest < ActionDispatch::IntegrationTest
  test '#show with 0 message' do
    assert_equal 0, Message.count
    get last_messages_path
    response = JSON.parse(@response.body)
    assert_nil response['id']
    assert_nil response['content']
  end

  test '#show with 1 message' do
    Message.create!(content: '{
      "coordinates": [[10,10],[20,10],[10,20],[20,20]]
    }')

    assert_equal 1, Message.count
    get last_messages_path
    response = JSON.parse(@response.body)
    last_message = Message.last
    assert_equal last_message.id, response['id']
    assert_equal last_message.content, response['content']
  end
end
