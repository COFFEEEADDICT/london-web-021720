# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "#{Time.now} Seed Started"
start = Time.now

Doctor.destroy_all
puts 'All instances of Doctor have been deleted.'


doctors = [
  {
    name: 'dan',
    speciality: 'rails',
    age: 28
  },
  {
    name: 'dre',
    speciality: 'beats',
    age: 50
  }
]

doctors.each do |doc|
  doctor = Doctor.create doc
  puts "#{doctor.id}: #{doctor.name} created"
end

300.times do 
  doc = Doctor.create name: Faker::Beer.brand, speciality: Faker::Beer.hop, age: (25..65).to_a.sample
  puts "#{doc.name} created"
end

doctor_ids = Doctor.all.map {|doctor| doctor.id}

Patient.destroy_all

1500.times do 
  patient = Patient.create name: Faker::Name.name, doctor_id: doctor_ids.sample
  puts "#{patient.name} created"
end

end_ = Time.now
puts "Seed over, took #{end_ - start} seconds"
