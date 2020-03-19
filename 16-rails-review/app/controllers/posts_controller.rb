class PostsController < ApplicationController
  before_action :find_post, only: [:show, :edit, :like, :update]

  def show
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(iron_params)

    if @post.save
      redirect_to @post
    else
      flash[:errors] = @post.errors.full_messages
      render 'new'
    end
  end

  def update
    if @post.update(iron_params)
      redirect_to @post
    else
      flash[:errors] = @post.errors.full_messages
      render 'edit'
    end
  end

  def like
    @post.likes += 1
    @post.save
    redirect_to @post
  end

  private

  def iron_params
    params.require(:post).permit(:title, :content, :destination_id, :blogger_id)
  end

  def find_post
    @post = Post.find(params[:id])
  end
end
