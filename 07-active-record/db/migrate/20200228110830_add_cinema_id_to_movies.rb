class AddCinemaIdToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column(:movies, :cinema_id, :integer)
  end
end
