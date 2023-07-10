class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.jsonb :content

      t.timestamps
    end
  end
end
