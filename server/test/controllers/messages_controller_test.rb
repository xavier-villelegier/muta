require 'test_helper'

class MessagesControllerTest < ActionDispatch::IntegrationTest
  test '#index' do
    content = {
      "coordinates": [{x:10,y:10},{x:20,y:10},{x:10,y:20},{x:20,y:20}]
    }

    Message.create!(content: content)

    get messages_path
    response = JSON.parse(@response.body)
  end

  test '#create with mobile' do
    content = {
      "coordinates": [{x:10,y:10},{x:20,y:10},{x:10,y:20},{x:20,y:20}]
    }

    assert_difference -> { Message.count }, 1 do
      post messages_path, params: { content: content, is_mobile: true }
    end

    message = Message.last
    assert_equal [{"x"=>"10", "y"=>"10"}, {"x"=>"20", "y"=>"10"}, {"x"=>"10", "y"=>"20"}, {"x"=>"20", "y"=>"20"}], message.content
    assert_equal 'mobile', message.user
  end

   test '#create with device' do
    content = {
      "coordinates": [{x:10,y:10},{x:20,y:10},{x:10,y:20},{x:20,y:20}]
    }

    assert_difference -> { Message.count }, 1 do
      post messages_path, params: { content: content }
    end

    message = Message.last
    assert_equal [{"x"=>"10", "y"=>"10"}, {"x"=>"20", "y"=>"10"}, {"x"=>"10", "y"=>"20"}, {"x"=>"20", "y"=>"20"}], message.content
    assert_equal 'device', message.user
  end
end
