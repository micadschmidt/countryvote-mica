import type { TopCountry } from "../types";

type Props = {
  countries: TopCountry[];
  loading: boolean;
  search: string;
  onSearchChange: (value: string) => void;
};

export function CountryTable({ countries, loading, search, onSearchChange }: Props) {
  return (
    <section className="top-section">
      <h2 className="top-title">Top 10 Most Voted Countries</h2>

      <div className="search-bar">
        <span>🔍</span>
        <input
          placeholder="Search Country, Capital City, Region or Subregion"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="table-card">
        {loading ? (
          <div>Loading...</div>
        ) : countries.length === 0 ? (
          <div>No votes yet</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>Capital City</th>
                <th>Region</th>
                <th>Sub Region</th>
                <th>Votes</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((c) => (
                <tr key={c.country_code}>
                  <td>{c.name}</td>
                  <td>{c.capital}</td>
                  <td>{c.region}</td>
                  <td>{c.subregion}</td>
                  <td>{c.votes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
