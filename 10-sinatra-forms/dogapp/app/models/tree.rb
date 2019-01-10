class Tree < ActiveRecord::Base
  has_many :marks
  has_many :dogs, through: :marks
end
