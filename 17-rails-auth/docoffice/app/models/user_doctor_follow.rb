class UserDoctorFollow < ApplicationRecord
  belongs_to :doctor
  belongs_to :user

  validate :doctor_already_followed

  def doctor_already_followed
    # check if there is an instance of UDF
    # that has that doctors and users id
    udf = UserDoctorFollow.find { |udf| udf.doctor_id == doctor.id && udf.user_id == user.id }
    if udf
      errors.add(:follow_error, "you cannot follow the same doctor twice")
      return false
    else
      return true
    end
  end
end
