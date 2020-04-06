Rails.application.routes.draw do
  resources :likes, except: [:destroy]
  delete "/likes/:book_id/:user_id", to: "likes#destroy"
  resources :users
  resources :books
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
