class Person

  # @@vars are class vars
  @@all = []

  # replaces the getter
  # attr_reader :name, :age
  # replaces the setter
  # attr_writer :name, :age

  # getter+setter in one
  attr_accessor :name, :age

  # initialize is called when we call Person.new
  def initialize(name, age)
    # @vars are instance vars
    @name = name
    @age = age
    # if self is mentioned in a instance method,
    # it refrences _the instance itself_
    @@all << self
  end

  def say_hi
    "Hello, my name is #{@name}!"
  end

  # a class method
  # starts with self. 
  def self.all
    @@all
  end

  def self.find(name)
    self.all.find { |person| person.name.downcase == name.downcase }
  end

  def self.older_than(age)
    self.all.select { |person| person.age > age }
  end

  def self.younger_than(age)
    self.all.select { |person| person.age < age }
  end

  def self.avg_age
    ages = self.all.map { |person| person.age }
    (ages.sum / ages.size.to_f).round(3)
  end


end