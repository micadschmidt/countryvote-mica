class RestCountriesService
  BASE_URL = "https://restcountries.com/v3.1"

  def self.by_codes(codes)
    return [] if codes.empty?

    # codes: ["ARG", "ITA"]
    joined = codes.join(",")
    url = "#{BASE_URL}/alpha?codes=#{joined}&fields=name,capital,region,subregion,cca3"

    response = Faraday.get(url)
    return [] unless response.success?

    JSON.parse(response.body)
  end

  def self.all_for_dropdown
    url = "#{BASE_URL}/all?fields=name,cca3"
    response = Faraday.get(url)
    return [] unless response.success?

    JSON.parse(response.body).map do |c|
      {
        code: c["cca3"],
        name: c.dig("name", "common")
      }
    end.sort_by { |c| c[:name] }
  end
end
