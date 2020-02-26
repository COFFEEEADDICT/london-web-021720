class A
  def hi
    'HI FROM A'
  end
end

class B < A
end

class C < B
  def hi
    super
  end
end

c = C.new
puts c.hi