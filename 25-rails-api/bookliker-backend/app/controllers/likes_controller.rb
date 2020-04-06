class LikesController < ApplicationController

    def create
        like = Like.create(like_params)

        if like.valid?
            render json: like.book, include: [:users]
        else
            render json: {errors: like.errors.full_messages}, status: :not_acceptable
        end
    end

    def destroy
        like = Like.find_by(user_id: params[:user_id], book_id: params[:book_id])
        like.destroy

        render json: like.book, include: [:users]
    end

    private

    def like_params
        params.require(:like).permit(:book_id, :user_id)
    end
end
