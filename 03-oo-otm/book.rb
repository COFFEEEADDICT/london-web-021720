class Book
  @@all = []

  attr_accessor :title, :author, :genre, :page_count

  def initialize(title, author, genre, page_count)
    @title= title
    @author = author
    @genre = genre
    @page_count = page_count
    @@all << self
  end

  def self.avg_book_length
    book_length_array = self.all.map { |book| book.page_count }
    total_page_count = book_length_array.sum
    average_length = total_page_count.to_f / self.all.size
    average_length.round(2)
  end

  def self.all
    @@all
  end
end