class Doctor < ApplicationRecord
  validates :name, :age, :speciality, presence: true
end
