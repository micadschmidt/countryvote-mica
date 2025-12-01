class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true,
                    uniqueness: true,
                    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :country_code, presence: true, length: { is: 3 }
end
