require "test_helper"

class MessageTest < ActiveSupport::TestCase
  test "cannot put a user_type different than device or mobile" do
    assert Message.new(user_type: "device").valid?
    assert Message.new(user_type: "mobile").valid?
    assert_not Message.new(user_type: "invalid").valid?
  end
end
