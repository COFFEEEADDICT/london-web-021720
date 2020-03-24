class Doctor < ApplicationRecord
  validates :name, :age, :speciality, presence: true
  has_many :patients

  validate :is_it_a_good_time

  def is_it_a_good_time
    time = Time.now
    if time.year == 2020
      errors.add(:year, 'it is not a good time')
    end
  end
end
