require "rails_helper"

RSpec.describe User, type: :model do
  it "is valid with name, email and country_code" do
    user = build(:user)
    expect(user).to be_valid
  end

  it "requires a name" do
    user = build(:user, name: nil)
    expect(user).not_to be_valid
  end

  it "requires a valid email" do
    user = build(:user, email: "invalid")
    expect(user).not_to be_valid
  end

  it "requires a unique email" do
    create(:user, email: "a@test.com")
    user = build(:user, email: "a@test.com")
    expect(user).not_to be_valid
  end

  it "requires a 3-letter country_code" do
    user = build(:user, country_code: "AR")
    expect(user).not_to be_valid
  end
end

