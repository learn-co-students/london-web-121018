class ToysController < ApplicationController

  # edit
  get "/toys/:id/edit" do
    @toy = Toy.find(params[:id])
    @dogs = Dog.all
    erb :"toys/edit"
  end

  # update
  patch "/toys/:id" do
    toy = Toy.find(params[:id])
    toy.update(params[:toy])
    redirect "/toys/#{toy.id}/edit"
  end

end
