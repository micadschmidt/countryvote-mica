require "rails_helper"

RSpec.describe TopCountriesService do
  before do
    create(:user, country_code: "ARG")
    create(:user, country_code: "ARG")
    create(:user, country_code: "BRA")

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
          },
          {
            "cca3" => "BRA",
            "name" => { "common" => "Brazil", "official" => "Federative Republic of Brazil" },
            "capital" => ["Brasilia"],
            "region" => "Americas",
            "subregion" => "South America"
          }
        ].to_json
      )
  end

  it "returns countries sorted by votes" do
    result = TopCountriesService.call

    expect(result.first[:country_code]).to eq("ARG")
    expect(result.first[:votes]).to eq(2)
  end

  it "includes details from restcountries" do
    result = TopCountriesService.call
    arg = result.find { |r| r[:country_code] == "ARG" }

    expect(arg[:name]).to eq("Argentina")
    expect(arg[:official_name]).to eq("Argentine Republic")
  end
end
