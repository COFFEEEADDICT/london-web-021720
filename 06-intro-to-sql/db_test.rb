require 'sqlite3'
require 'pry'
db = SQLite3::Database.new('chinook.db')
# https://github.com/sparklemotion/sqlite3-ruby
binding.pry