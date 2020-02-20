class Ticket
  @@all = []

  attr_accessor :passenger, :price, :flight

  def initialize(passenger, flight, price)
    @passenger = passenger
    @price = price
    @flight = flight
    @@all << self
  end

  def self.all
    @@all
  end
end