class Vehicle
  @@all = []

  attr_accessor :price, :colour, :model, :make

  def initialize(price, colour, model, make)
    @price = price
    @colour = colour
    @model = model
    @make = make
    @@all << self
  end

  def sound
    'vroom'
  end

  def self.all
    @@all
  end
end