class CreateUserDoctorFollows < ActiveRecord::Migration[6.0]
  def change
    create_table :user_doctor_follows do |t|
      t.integer :user_id
      t.integer :doctor_id

      t.timestamps
    end
  end
end
