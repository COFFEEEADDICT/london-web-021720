class Doctor < ApplicationRecord
  validates :name, :age, :speciality, presence: true
  has_many :user_doctor_follows
  has_many :users, through: :user_doctor_follows
  has_many :patients

  def is_followed_by(user_id)
    UserDoctorFollow.all.find { |udf| udf.doctor_id == self.id && udf.user_id == user_id }
  end
end
