class Patient < ApplicationRecord
  belongs_to :doctor
  validates :name, presence: true, length: { minimum: 2 }, uniqueness: true
  validates :doctor_id, presence: true
end
