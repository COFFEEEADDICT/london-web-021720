class BooksController < ApplicationController

  # index action - show all of something
  get '/books' do
    @books = Book.all
    erb :"books/index"
  end

  # form to create a new book
  # the 'create' action'
  get '/books/new' do 
    erb :"books/new"
    # receive a html form to create a new book
  end

  # create action has no view - it just does it's biz
  post '/books' do
    book = Book.create params
    redirect "/books/#{book.id}"
  end

  get '/books/:id' do
    @book = Book.find(params["id"])
    erb :"books/show"
  end
end
