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
    @review = review
    @@all << self
  end

  def self.all
    @@all
  end
end


# test data

dan = Passenger.new('Daniel')
gabe = Passenger.new('Gabriel')
sunny = Passenger.new('Sunny')

r1 = Ride.new(dan, 'Robert', 5, 'FAST')
r2 = Ride.new(dan, 'Robert', 2, 'He listened to very bad music')
r3 = Ride.new(gabe, 'Jonathan', 17, 'Jonathan is the best person I\'ve ever met')
r4 = Ride.new(sunny, 'Jonathan', 29, "Jonathan is the best person I've ever met")

binding.pry
p 'eof'
