class Message < ApplicationRecord
  validates :user_type, inclusion: { in: %w[device mobile] }

   before_validation :set_default_user_type

  def set_default_user_type
    self.user_type ||= "device"
  end
end
