require "rails_helper"

RSpec.describe "POST /api/v1/votes", type: :request do
  let(:valid_params) do
    {
      vote: {
        name: "John",
        email: "john@test.com",
        country_code: "ARG"
      }
    }
  end

  it "creates a vote (user)" do
    post "/api/v1/votes", params: valid_params

    expect(response).to have_http_status(:created)
    expect(User.count).to eq(1)
  end

  it "fails when email already voted" do
    create(:user, email: "john@test.com")

    post "/api/v1/votes", params: valid_params

    expect(response).to have_http_status(:unprocessable_entity)
  end

  it "fails with invalid data" do
    post "/api/v1/votes", params: { vote: { name: "", email: "", country_code: "" } }

    expect(response).to have_http_status(:unprocessable_entity)
  end
end
