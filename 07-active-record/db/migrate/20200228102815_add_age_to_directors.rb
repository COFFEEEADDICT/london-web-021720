class AddAgeToDirectors < ActiveRecord::Migration[5.2]
  def change
    add_column(:directors, :age, :integer)
  end
end
