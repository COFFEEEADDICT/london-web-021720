class User < ApplicationRecord
  has_secure_password
  has_many :user_doctor_follows
  has_many :doctors, through: :user_doctor_follows
  validates :username, uniqueness: true
  # that enabled writing to user_instance.password
  # and storing the result under user_instance.password_digest
  # it also adds the user_instance.authenticate method
end
