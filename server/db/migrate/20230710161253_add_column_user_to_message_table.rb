class AddColumnUserToMessageTable < ActiveRecord::Migration[7.0]
  def change
    add_column :messages, :user_type, :string
  end
end
