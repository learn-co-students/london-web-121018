class AddMarksAndTreesTable < ActiveRecord::Migration
  def change
    create_table :marks do |t|
      t.integer :dog_id
      t.integer :tree_id
    end

    create_table :trees do |t|
      t.string :name
    end
  end
end
