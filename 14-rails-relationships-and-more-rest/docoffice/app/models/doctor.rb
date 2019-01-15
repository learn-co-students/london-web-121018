class Doctor < ApplicationRecord
  has_many :pills, dependent: :destroy
end
