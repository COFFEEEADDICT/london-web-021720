class ApplicationController < ActionController::Base
  before_action :update_session_data

  # helper methods are accessible in erb templates
  helper_method :logged_in?, :current_user, :admin?

  def current_user
    if session[:user_id]
      @user = User.find_by(id: session[:user_id])
    else
    end
  end

  def logged_in?
    !!current_user
  end

  def admin?
    if current_user
      current_user.admin
    else
    end
  end

  def authorized
    redirect_to login_path unless logged_in?
  end

  def authorized_to_edit
    unless admin?
      flash[:errors] ||= []
      flash[:errors] << "You are not authorized to perform this action. Go away."
      redirect_to root_path
    end
  end

  def update_session_data
    session[:current_time] = Time.now
    session[:view_count] ||= 0
    session[:view_count] += 1
    session[:viewed_doctors] ||= []
  end
end
