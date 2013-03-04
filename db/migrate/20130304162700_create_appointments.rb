class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.string :description
      t.string :status

      t.timestamps
    end
  end
end