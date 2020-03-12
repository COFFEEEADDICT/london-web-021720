class BooksController < ApplicationController

  # index action - show all of something
  get '/books' do
    @books = Book.all
    erb :"books/index"
  end

  # form to create a new book
  # the 'create' action'
  get '/books/new' do 
    @authors = Author.all
    erb :"books/new"
    # receive a html form to create a new book
  end

  # create action has no view - it just does it's biz
  post '/books' do
    book = Book.create params["book"]
    redirect "/books/#{book.id}"
  end

  # show action - shows us ONE book
  get '/books/:id' do
    @book = Book.find(params["id"])
    @author = @book.author
    erb :"books/show"
  end
  
  # delete
  delete '/books/:id' do
    book = Book.find(params["id"])
    book.destroy

    referer = request.env["HTTP_REFERER"]
    if referer.include?('/authors/')
      redirect "/authors/" + referer.split('/authors/').last
    else
      redirect "/books"
    end
  end

  # edit action - shows us a form to edit the book
  get '/books/:id/edit' do
    @book = Book.find(params["id"])
    erb :"books/edit"
  end

  # update action - actually performs the update
  put '/books/:id' do
    book = Book.find(params["id"])
    params.delete('_method')
    book.update(params)
    redirect "/books/#{book.id}"
  end
end
