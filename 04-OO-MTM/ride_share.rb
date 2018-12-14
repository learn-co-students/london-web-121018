require 'pry'

class Passenger
  @@all = []

  attr_accessor :name

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def rides
    Ride.all.select {|ride| ride.passenger == self }
  end

  def num_of_rides
    rides.length
  end

  def rides_ratings
    rides.map {|ride| ride.rating }
  end

  def avg_rating
    sum = 0
    rides_ratings.each {|rating| sum += rating}
    sum.to_f/rides.length
  end

  def complete_a_ride(driver, rating, review)
    Ride.new(self, driver, rating, review)
  end
end

class Ride
  @@all = []

  attr_reader :passenger, :rating, :driver, :review

  def initialize(passenger, driver, rating, review)
    @passenger = passenger
    @driver = driver
    # passengers can add reviews and ratings to rides
    # remember, it's the ride that's reviewed, not the driver
    @rating = rating
    # review is a string
    @review = review
    @@all << self
  end

  def self.all
    @@all
  end
end

class Driver
  @@all = []

  attr_accessor :name

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def passengers
    rides.map {|ride| ride.passenger}
  end

  def rides
    Ride.all.select {|ride| ride.driver == self }
  end

  def num_of_rides
    rides.length
  end

  def rides_ratings
    rides.map {|ride| ride.rating }
  end

  def avg_rating
    sum = 0
    rides_ratings.each {|rating| sum += rating}
    sum.to_f/rides.length
  end

  def complete_a_ride(passenger, rating, review)
    Ride.new(passenger, self, rating, review)
  end
end

# test data
dan = Passenger.new('Daniel')
gabe = Passenger.new('Gabriel')
sunny = Passenger.new('Sunny')

robert = Driver.new('Robert')
jonathan = Driver.new('Jonathan')
bobert = Driver.new('Bobert')

r1 = Ride.new(dan, robert, 5, 'FAST')
r2 = Ride.new(dan, jonathan, 2, 'He listened to very bad music')
r3 = Ride.new(gabe, bobert, 17, 'Jonathan is the best person I\'ve ever met')
r4 = Ride.new(sunny, bobert, 29, "Jonathan is the best person I've ever met")
r5 = Ride.new(dan, bobert, 5, 'bobert is superb')
r6 = Ride.new(dan, bobert, 1, 'bobert is not superb')

binding.pry
p 'eof'
