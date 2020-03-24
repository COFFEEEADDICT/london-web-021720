class PatientsController < ApplicationController
  before_action :find_patient, only: [:show, :edit, :update, :destroy]
  before_action :authorized
  before_action :authorized_to_edit, only: [:edit, :new]

  def index
    @patients = Patient.all
  end

  def show
  end

  def new
    @patient = Patient.new
  end

  def create
    if params[:doctor]
      @doctor = Doctor.create doctor_params
      @patient = Patient.new patient_params
      @patient.doctor_id = @doctor.id
    else
      @patient = Patient.new patient_params
    end

    if @patient.valid?
      @patient.save
      redirect_to @patient
    else
      flash[:errors] = @patient.errors.full_messages
      redirect_to new_patient_path
    end
  end

  def edit
  end

  def update
    @patient.update patient_params
    redirect_to @patient
  end

  def destroy
    @patient.destroy
    redirect_to patients_path
  end

  private

  def patient_params
    params.require(:patient).permit(:name, :doctor_id)
  end

  def find_patient
    @patient = Patient.find params[:id]
  end

  def doctor_params
    params.require(:doctor).permit(:name, :speciality, :age)
  end
end
