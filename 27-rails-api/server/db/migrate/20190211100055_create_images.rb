class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :url
      t.integer :like_count
      t.string :name

      t.timestamps
    end
  end
end
