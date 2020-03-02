require 'pry'
require 'rest-client'
require 'json'

def request_user_subreddit
    puts "Please enter a subreddit name or exit to exit"
    gets.chomp
end

def get_subreddit_data(subreddit)
    response = RestClient.get("https://www.reddit.com/r/#{subreddit}.json")

    JSON.parse(response.body)
end

def get_post_titles(posts)
    posts.map do |post|
        post["data"]["title"]
    end
end

def pretty_print_post_titles(titles)
    titles.each_with_index do |title, index|
        p "#{index + 1}: #{title}"
    end
end

def choose_post_number
    p "Please enter the number of the post for which you would like to see the details"
    gets.chomp.to_i - 1
end

def pretty_print_post_details(post)
    p "#{post["data"]["title"]}"
    p "#{post["data"]["subreddit"]}"
    p "^#{post["data"]["ups"]}"
end

def option_to_see_more_posts
    puts "Would you like to see more posts from this post's subreddit? y/n"
    answer = gets.chomp
    answer == "y"
end

def run(subreddit = nil)
    if subreddit 
        user_input = subreddit
    else
        user_input = request_user_subreddit
        if user_input == "exit"
            return
        end
    end
    subreddit_data = get_subreddit_data(user_input)
    posts = subreddit_data["data"]["children"]
    if posts.length == 0
        puts "No posts found! Please try another subreddit"
    end
    post_titles = get_post_titles(posts)
    pretty_print_post_titles(post_titles)
    chosen_post_number = choose_post_number
    pretty_print_post_details(posts[chosen_post_number])
    more = option_to_see_more_posts
    if more
        run(posts[chosen_post_number]["data"]["subreddit"])
    else
        run
    end
end

run