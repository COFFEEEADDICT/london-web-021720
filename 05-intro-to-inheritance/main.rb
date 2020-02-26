require_relative './vehicle'
require_relative './car'
require_relative './bicycle'

# price, colour, model, make,
b1 = Bicycle.new(100, 'salmon', 'A3z', 'salomon', 0.8)
# price, colour, model, make, n_wheels, four_on_four, mileage, engine
c1 = Car.new(9300, 'pink', 'impreza', 'subaru', 4, true, 135893, 'petrol')
c2 = Car.new(39300, 'pink', '3', 'tesla', 4, false, 0, 'electric')


require 'pry'; binding.pry