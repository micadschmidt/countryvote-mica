require "rails_helper"

RSpec.describe "GET /api/v1/countries/top", type: :request do
  before do
    create(:user, country_code: "ARG")

    stub_request(:get, /restcountries/)
      .to_return(
        status: 200,
        body: [
          {
            "cca3" => "ARG",
            "name" => { "common" => "Argentina", "official" => "Argentine Republic" },
            "capital" => ["Buenos Aires"],
            "region" => "Americas",
            "subregion" => "South America"
          }
        ].to_json
      )
  end

  it "returns a list of top countries" do
    get "/api/v1/countries/top"

    expect(response).to have_http_status(:ok)
    json = JSON.parse(response.body)

    expect(json.length).to eq(1)
    expect(json.first["country_code"]).to eq("ARG")
  end
end
