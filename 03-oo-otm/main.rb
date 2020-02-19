require 'pry'

require_relative './author'
require_relative './book'

stephen_king = Author.new('Stephen King', 65)
jk_rowling = Author.new('J.K. Rowling', 48)

Book.new('Cujo', stephen_king, 'Horror', 320)
Book.new('Pet Sematary', stephen_king, 'Horror', 110)
Book.new('The Shining', stephen_king, 'Horror', 500)
Book.new('Whatver it was called', stephen_king, 'Writing on Writing', 400)
 
Book.new('Harry Poter 1', jk_rowling, 'Fantasy', 276)
Book.new('Harry Poter 2', jk_rowling, 'Fantasy', 423)
Book.new('Harry Poter 3', jk_rowling, 'Fantasy', 450)
Book.new('Harry Poter 4', jk_rowling, 'Fantasy', 720)
Book.new('That one that is not Harry Potter', jk_rowling, 'Fiction', 350)

binding.pry