class CreateFollowers < ActiveRecord::Migration[5.1]
  def change
    create_table :followers do |t|
      t.string :name
      t.integer :age

      t.timestamps
    end
  end
end
