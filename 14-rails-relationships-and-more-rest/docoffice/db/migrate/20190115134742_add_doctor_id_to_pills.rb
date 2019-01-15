class AddDoctorIdToPills < ActiveRecord::Migration[5.2]
  def change
    add_column :pills, :doctor_id, :integer
  end
end
