class CreateToysTable < ActiveRecord::Migration
  def change
    create_table :toys do |t|
      t.string :name
      t.integer :dog_id
    end
  end
end
