class DoctorsController < ApplicationController
  # github hack story https://gist.github.com/peternixey/1978249
  before_action :find_doctor, only: [:show, :edit, :update, :destroy]
  before_action :find_pills, only: [:new, :edit]

  def index
    @doctors = Doctor.all
  end

  def show
  end

  def create
    @doctor = Doctor.create(doctor_params)
    if @doctor.valid?
      redirect_to doctors_path
    else
      flash[:errors] = @doctor.errors.full_messages
      redirect_to new_doctor_path
    end
  end

  def new
    @doctor = Doctor.new
  end

  def edit
  end

  def update
    @doctor.update(doctor_params)
    if @doctor.valid?
      redirect_to @doctor
    else
      flash[:errors] = @doctor.errors.full_messages
      redirect_to edit_doctor_path(@doctor)
    end
  end

  def destroy
    @doctor.destroy
    redirect_to doctors_path
  end

  private

  def doctor_params
    params.require(:doctor).permit(:name, :specialty, pill_ids: [], patient_ids: [])
  end

  def find_doctor
    @doctor = Doctor.find(params[:id])
  end

  def find_pills
    @pills = Pill.all
  end
end
