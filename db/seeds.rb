# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Appointment.find_or_initialize_by_description("It hurts!").tap do |appt|
  appt.status = 'incomplete'
  appt.save!
end

Appointment.find_or_initialize_by_description("Regular checkup").tap do |appt|
  appt.status = 'complete'
  appt.save!
end

Appointment.find_or_initialize_by_description("Tax specialist").tap do |appt|
  appt.status = 'incomplete'
  appt.save!
end

Appointment.find_or_initialize_by_description("Kitty is sick").tap do |appt|
  appt.status = 'complete'
  appt.save!
end