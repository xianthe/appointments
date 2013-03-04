class AppointmentsController < ApplicationController
  
  before_filter :load_appointment, only: %w(show update destroy)
  respond_to :json

  def index
    @appointments = Appointment.all

    respond_with @appointments
  end

  def show
    respond_with @appointment
  end

  def update
    @appointment.update_attributes params[:appointment]

    respond_with @appointment
  end

  def create
    @appointment = Appointment.create params[:appointment]

    respond_with @appointment
  end

  def destroy
    @appointment.destroy

    respond_with @appointment
  end

  private

  def load_todo
    @appointment = Appointment.find params[:id]
  end
end
