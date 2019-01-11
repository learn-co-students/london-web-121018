Rails.application.routes.draw do

  # generate all 7 restful resources
  # resources :trains

  # generate only needed resources
  # resources :trains, only: [:index, :show]

  # declare direclty
  get "/trains", to: 'trains#index', as: 'trains'
  get '/trains/:id', to: 'trains#show', as: 'train'

end
