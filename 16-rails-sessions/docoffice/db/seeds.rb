# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Doctor.destroy_all
Patient.destroy_all
Appointment.destroy_all

docs = [
  {name: 'who' , specialty: 'lawns'},
  {name: 'dan' , specialty: 'cars'}
]

Doctor.create(docs)

patients = [
  {name: 'dan dan'},
  {name: 'lucy lucy'}
]

Patient.create(patients)

Pill.create(name: 'aspirin', doctor_id: 1)

Appointment.create(
  [
    {doctor_id: 1, patient_id: 1},
    {doctor_id: 1, patient_id: 2}
  ]
)
