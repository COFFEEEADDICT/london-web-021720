Rails.application.routes.draw do
  get 'customers/new', as: "new_customer"
  post 'customers', to: 'customers#create'
  get 'customers/:id', to: 'customers#show', as: "customer"

  get 'customers', to: 'customers#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
