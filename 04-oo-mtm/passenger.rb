class Passenger
  @@all = []

  attr_accessor :name

  def initialize(name)
    @name = name
    @@all << self
  end

  def buy_a_ticket(flight, price)
    Ticket.new(self, flight, price)
  end

  def tickets
    Ticket.all.select { |ticket| ticket.passenger == self}
  end

  def avg_flight_price
    tickets.map {|ticket| ticket.price}.sum / tickets.size.to_f
  end

  def flights
    tickets.map { |ticket| ticket.flight }
  end

  def self.all
    @@all
  end
end