class Book < ApplicationRecord
    has_many :likes
    has_many :users, through: :likes
    
    def big_title
        title.upcase
    end
end
