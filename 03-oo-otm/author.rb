class Author
  @@all = []

  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
    @@all << self
  end

  def books
    Book.all.select { |book| book.author == self }
  end

  def titles
    books.map { |book| book.title }
  end

  def total_page_count
    books.map { |book| book.page_count }.sum
  end

  def avg_book_length
    (total_page_count.to_f / books.size).round(2)
  end

  def self.all
    @@all
  end
end