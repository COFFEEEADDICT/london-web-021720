class Car < Vehicle
  @@all = []

  attr_accessor :n_wheels, :four_on_four, :mileage, :engine

  def initialize(price, colour, model, make, n_wheels, four_on_four, mileage, engine)
    super(price, colour, model, make)
    @n_wheels = n_wheels
    @four_on_four = four_on_four
    @mileage = mileage
    @engine = engine
    @@all << self
  end

  def sound
    if engine == 'electric'
      'bzzzzz'
    else
      super
    end
  end

  def self.all
    @@all
  end
end