Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources "doctors"
  resources "patients"

  get "/my_doctors", to: "doctors#my_doctors", as: "my_doctors"
  post "/doctors/:id/follow", to: "doctors#follow", as: "follow_doctor"

  root "doctors#index"

  get "/login", to: "sessions#login"
  post "/login", to: "sessions#login_verify"
  post "/logout", to: "sessions#logout"

  get "/signup", to: "sessions#signup"
  post "/signup", to: "users#create"
end
