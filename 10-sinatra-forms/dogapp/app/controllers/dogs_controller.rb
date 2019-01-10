class DogsController < ApplicationController

  # index
  get "/dogs" do
    @dogs = Dog.all
    erb :"dogs/index"
  end

  # new
  get "/dogs/new" do
    @toys = Toy.all
    erb :"dogs/new"
  end

  # show
  get "/dogs/:id" do
    @dog = Dog.find(params[:id])
    erb :"dogs/show"
  end

  # create
  post "/dogs" do
    dog = Dog.create(params[:dog])
    redirect "/dogs/#{dog.id}"
  end

  # edit
  get "/dogs/:id/edit" do
    @dog = Dog.find(params[:id])
    @toys = Toy.all
    @trees = Tree.all
    erb :"dogs/edit"
  end

  # update
  patch "/dogs/:id" do
    dog = Dog.find(params[:id])

    # if the toy_ids array does not exist, make it so it is a empty one
    if !params[:dog][:toy_ids]
      params[:dog][:toy_ids] = []
    end

    if !params[:dog][:tree_ids]
      params[:dog][:tree_ids] = []
    end

    dog.update(params[:dog])
    redirect "/dogs/#{dog.id}"
  end

  # delete
  delete "/dogs/:id" do
    dog = Dog.find(params[:id])
    dog.destroy
    redirect "/dogs"
  end

end
