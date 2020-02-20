class Flight
  @@all = []

  attr_accessor :destination

  def initialize(destination)
    @destination = destination
    @@all << self
  end

  def tickets
    Ticket.all.select { |ticket| ticket.flight == self}
  end

  def passengers
    tickets.map { |ticket| ticket.passenger }
  end

  def self.all
    @@all
  end
end