class Bicycle < Vehicle
  @@all = []

  attr_accessor :chain_wear

  def initialize(price, colour, model, make, chain_wear)
    super(price, colour, model, make)
    @chain_wear = chain_wear
    @@all << self
  end

  def sound
    'ding ding'
  end

  def self.all
    @@all
  end
end