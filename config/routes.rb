Appointments::Application.routes.draw do
  resources :appointments
  root to: 'home#index'
end
