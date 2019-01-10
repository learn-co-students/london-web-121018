class Dog < ActiveRecord::Base
  has_many :toys
  has_many :marks
  has_many :trees, through: :marks
end
