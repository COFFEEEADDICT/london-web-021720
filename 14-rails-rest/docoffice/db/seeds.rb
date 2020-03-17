# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
