Rails.application.routes.draw do
  resources :doctors, only: [:index, :show, :new, :create, :edit]
end
