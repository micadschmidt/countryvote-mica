Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :votes, only: [:create]
      get "countries/top", to: "countries#top"
      get "countries", to: "countries#index"
    end
  end
end
