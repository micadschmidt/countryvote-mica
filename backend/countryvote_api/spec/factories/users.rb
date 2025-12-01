FactoryBot.define do
  factory :user do
    name { "John Doe" }
    sequence(:email) { |n| "john#{n}@example.com" }
    country_code { "ARG" }
  end
end
