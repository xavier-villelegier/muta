class Message < ApplicationRecord
  validates :user_type, inclusion: { in: %w[device mobile] }
end
