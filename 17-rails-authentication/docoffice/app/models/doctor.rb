class Doctor < ApplicationRecord
  # https://edgeguides.rubyonrails.org/active_record_validations.html
  
  validates :name, presence: true, length: { minimum: 2 }, uniqueness: true
  validates :specialty, presence: true

  has_many :pills, dependent: :destroy
  has_many :appointments
  has_many :patients, through: :appointments
end
