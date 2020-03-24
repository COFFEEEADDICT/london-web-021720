class SessionsController < ApplicationController
  def login
  end

  def signup
  end

  def logout
    session[:user_id] = nil
    redirect_to login_path
  end

  def login_verify
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to root_path
    else
      redirect_to login_path
    end
  end
end
