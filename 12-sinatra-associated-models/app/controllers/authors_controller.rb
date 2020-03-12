class AuthorsController < ApplicationController

  # index action - show all of something
  get '/authors' do
    @authors = Author.all
    erb :"authors/index"
  end

  # form to create a new author
  # the 'create' action'
  get '/authors/new' do 
    erb :"authors/new"
    # receive a html form to create a new author
  end

  # create action has no view - it just does it's biz
  post '/authors' do
    author = Author.create params
    redirect "/authors/#{author.id}"
  end

  # show action - shows us ONE author
  get '/authors/:id' do
    @author = Author.find(params["id"])
    erb :"authors/show"
  end
  
  # delete
  delete '/authors/:id' do
    author = Author.find(params["id"])
    author.destroy
    redirect "/authors"
  end

  # edit action - shows us a form to edit the author
  get '/authors/:id/edit' do
    @author = Author.find(params["id"])
    erb :"authors/edit"
  end

  # update action - actually performs the update
  put '/authors/:id' do
    author = Author.find(params["id"])
    params.delete('_method')
    author.update(params)
    redirect "/authors/#{author.id}"
  end
end
