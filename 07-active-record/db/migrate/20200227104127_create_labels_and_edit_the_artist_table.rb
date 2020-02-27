class CreateLabelsAndEditTheArtistTable < ActiveRecord::Migration[5.2]
  def change

    add_column :artists, :label_id, :integer

    create_table :labels do |t|
      t.string :name
    end

  end
end
