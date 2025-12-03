class TopCountriesService
  def self.call
    counts_hash = User.group(:country_code)
                      .order(Arel.sql('COUNT(*) DESC'))
                      .limit(10)
                      .count

    return [] if counts_hash.empty?

    country_codes = counts_hash.keys
    countries_data = RestCountriesService.by_codes(country_codes)

    indexed = countries_data.index_by { |c| c["cca3"] }

    counts_hash.map do |code, votes|
      country = indexed[code]
      next unless country

      {
        country_code: code,
        votes: votes,
        name: country.dig("name", "common"),
        official_name: country.dig("name", "official"),
        capital: country["capital"]&.first,
        region: country["region"],
        subregion: country["subregion"],
        flag_png: country.dig("flags", "png"),
        flag_svg: country.dig("flags", "svg")
      }
    end.compact
  end
end
