require 'pry'

class Person
  attr_accessor :name, :age, :nationality

  # @@ vars are CLASS properties
  @@all = []

  def initialize(name, age, nationality)
    # INSTANCE properties start with @ signs!
    @name = name
    @age = age
    @nationality = nationality
    @@all << self
  end

  # `self` within instance methods refers to the instance
  def introduce
    "Hi, my name is #{self.name} and I am #{@nationality}"
  end

  # self as a prefix to a method name creates a CLASS method
  def self.all
    @@all
  end

  def self.avg_age
    total_age = 0
    @@all.each {|person| total_age += person.age }
    total_age.to_f/@@all.length
  end
end


Person.new('dan', 27, 'polish')
Person.new('lucy', 29, 'british')
Person.new('gabe', 23, 'brazilian')

binding.pry
p 'eof'
