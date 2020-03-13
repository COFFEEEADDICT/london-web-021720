class CustomersController < ApplicationController

  def index
    @customers = Customer.all
  end

  def new
    @customer = Customer.new(name: "sam")
  end

  def create
    customer = Customer.create(name: params["customer"]["name"], age: params["customer"]["age"])

    # redirect_to "/customers/" + customer.id
    # redirect_to customer_path(customer)
    redirect_to customer
    # redirect_to customers_path
  end

  def show
  end
end
