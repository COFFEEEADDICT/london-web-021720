students = [
  { name: 'Ali', age: rand(18...70), module: 1 },
  { name: 'Dinnoroni', age: rand(18...70), module: 1 },
  { name: 'Nicholas', age: rand(18...70), module: 1 },
  { name: 'Skye', age: rand(18...70), module: 1 },
  { name: 'Robert', age: rand(18...70), module: 2 },
  { name: 'Agnes', age: rand(18...70), module: 2 },
  { name: 'Luke', age: rand(18...70), module: 2 },
  { name: 'Jolanta', age: rand(18...70), module: 4 },
  { name: 'Alison', age: rand(18...70), module: 4 },
  { name: 'Julia', age: rand(18...70), module: 4 },
  { name: 'Ricky', age: rand(18...70), module: 4 },
  { name: 'Hiroshi', age: rand(18...70), module: 5 },
  { name: 'Augustin', age: rand(18...70), module: 5 },
  { name: 'Hugo', age: rand(18...70), module: 3 },
  { name: 'Gabriel', age: rand(18...70), module: 3 },
]

classrooms = {
  'turing': {
    'capacity': 24,
    'whiteboards': 2,
    'lectures': [
      {
        'time': '1100',
        'topic': 'How to pronounce 01010101 - an intro to binary.',
        'mod': 1,
        'teacher': 'Daniel',
        'duration': 60
      },
      {
        'time': '1200',
        'topic': 'Bits, Bytes, and Nibbles',
        'mod': 3,
        'teacher': 'Daniel',
        'duration': 90
      },
      {
        'time': '1400',
        'topic': 'Introduction to Polish',
        'mod': 6,
        'teacher': 'Daniel',
        'duration': 120
      }
    ]
  },
  'borg': {
    'capacity': 24,
    'whiteboards': 2,
    'lectures': [
      {
        'time': '1100',
        'topic': 'Intro to OO',
        'mod': 2,
        'teacher': 'Jo',
        'duration': 60
      },
      {
        'time': '1200',
        'topic': 'Hacking 101 - Break Into CIA',
        'mod': 1,
        'teacher': 'Sergio',
        'duration': 60
      },
      {
        'time': '1400',
        'topic': 'Monopoly Deal',
        'mod': 1,
        'teacher': 'Gabe',
        'duration': 15
      }
    ]
  }
}

# count students per mod
def count_students_per_mod(students_array)
  students_per_mod = Hash.new 0
  students_array.each do |student|
    students_per_mod[student[:module]] += 1
  end
  students_per_mod
end


# count lectures per mod
def lecures_per_mod(classrooms_hash)
  lectures_count = Hash.new 0
  classrooms_hash.each do |classroom_name, classroom_info| 
    classroom_info[:lectures].each do |lecture|
      lectures_count[lecture[:mod]] += 1
    end
  end
  lectures_count
end

# avg lecture time per classroom

def avg_time_per_classroom(main_classroom_name, classrooms_hash)
  time_sum = 0
  main_classroom_name = main_classroom_name.to_sym

  unless classrooms_hash[main_classroom_name]
    return "The classroom you asked for doesn't exist!"
  end

  classrooms_hash[main_classroom_name][:lectures].each do |lecture|
    time_sum += lecture[:duration]
  end

  time_sum / classrooms_hash[main_classroom_name][:lectures].size.to_f
end
