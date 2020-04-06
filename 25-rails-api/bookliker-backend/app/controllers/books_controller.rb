class BooksController < ApplicationController

    def index
        books = Book.all

        render json: books, except: [:created_at, :updated_at], include: [:users], methods: [:big_title]
    end

    def create
        book = Book.create(book_params)

        if book.valid?
            render json: book, include: [:users]
        else
            render json: { errors: book.errors.full_messages }, status: :not_acceptable
        end
    end

    private

    def book_params
        params.require(:book).permit(:title, :description, :img_url)
    end

end
