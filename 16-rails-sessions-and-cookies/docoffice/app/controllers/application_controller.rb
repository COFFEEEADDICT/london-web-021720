class ApplicationController < ActionController::Base
  before_action :update_session_data

  def update_session_data
    session[:current_time] = Time.now
    session[:view_count] ||= 0
    session[:view_count] += 1
    session[:viewed_doctors] ||= []
  end 
end
