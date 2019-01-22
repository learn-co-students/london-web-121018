Rails.application.routes.draw do
  # resources :doctors, only: [:index, :show, :new, :create, :edit, :update, :delete]
  resources :doctors
  resources :pills, only: [:new, :show, :create]

    # user account management
    get '/signup', to: 'users#new', as: 'signup'
    post '/signup', to: 'users#create'
    get '/users/:id', to: 'users#show', as: 'user'
  
    # sessions management
    get '/login', to: 'sessions#new', as: 'login'
    post '/sessions', to: 'sessions#create', as: 'sessions'
    post '/logout', to: 'sessions#destroy', as: 'logout'
  
end
