class AddBloggerToFollowers < ActiveRecord::Migration[5.1]
  def change
    add_reference :followers, :blogger, foreign_key: true
  end
end
