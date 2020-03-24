class DoctorsController < ApplicationController
  before_action :find_doctor, only: [:show, :edit, :update, :destroy]
  before_action :authorized
  before_action :authorized_to_edit, only: [:edit, :new]

  def index
    @doctors = Doctor.all
  end

  def my_doctors
    @doctors = Doctor.all.select { |doctor| doctor.is_followed_by(current_user.id) }
    if params[:sort]
      if params[:sort] == "az"
        @doctors = @doctors.sort_by { |d| d.name.downcase }
      elsif params[:sort] == "age"
        @doctors = @doctors.sort_by { |d| d.age }
      end
    end
    render :index
  end

  def show
    # unless == if not
    unless session[:viewed_doctors].include? @doctor.id
      session[:viewed_doctors] << @doctor.id
    end
  end

  def new
    @doctor = Doctor.new
  end

  def follow
    udf = UserDoctorFollow.new doctor_id: params[:id], user_id: current_user.id
    if udf.valid?
      udf.save
      redirect_to doctor_path(params[:id])
    else
      flash[:errors] ||= []
      flash[:errors] << "You already follow that doctor"
      redirect_to doctors_path
    end
  end

  def create
    @doctor = Doctor.new doctor_params
    if @doctor.valid?
      @doctor.save
      redirect_to @doctor
    else
      flash[:errors] = @doctor.errors.full_messages
      redirect_to new_doctor_path
    end
  end

  def edit
  end

  def update
    @doctor.update doctor_params
    redirect_to @doctor
  end

  def destroy
    @doctor.destroy
    redirect_to doctors_path
  end

  private

  def doctor_params
    params.require(:doctor).permit(:name, :speciality, :age)
  end

  def find_doctor
    @doctor = Doctor.find params[:id]
  end
end
