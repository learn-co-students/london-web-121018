Rails.application.routes.draw do
  # resources :doctors, only: [:index, :show, :new, :create, :edit, :update, :delete]
  resources :doctors
  resources :pills, only: [:new, :show, :create]

  get '/clean', to: 'doctors#clean'
  
end
