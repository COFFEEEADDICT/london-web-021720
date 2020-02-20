require_relative './flight'
require_relative './passenger'
require_relative './ticket'

stephen_king = Passenger.new ('Stephen King')
jk_rowling = Passenger.new ('JK Rowling')

maine = Flight.new('Portland, Maine')
edinburgh = Flight.new('Edinburgh')
ankara = Flight.new('Ankara')
cape_cod = Flight.new('Cape Cod')

Ticket.new(stephen_king, maine, 200)
Ticket.new(jk_rowling, maine, 400)
Ticket.new(jk_rowling, edinburgh, 500)


require 'pry'; binding.pry