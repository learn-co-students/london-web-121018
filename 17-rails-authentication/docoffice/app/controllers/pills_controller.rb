class PillsController < ApplicationController
  def show
    @pill = Pill.find(params[:id])
  end

  def create
    @pill = Pill.new(pill_params)
    if @pill.valid?
      @pill.save
      redirect_to @pill
    else
      render 'new'
    end
  end

  def new
    @pill = Pill.new
  end

  private

  def pill_params
    params.require(:pill).permit(:name, :doctor_id)
  end
end
