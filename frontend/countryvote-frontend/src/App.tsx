import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { VoteBar } from "./components/VoteBar";
import { SuccessBanner } from "./components/SuccessBanner";
import { CountryTable } from "./components/CountryTable";
import { getAllCountries, getTopCountries, createVote } from "./countryVoteApi";
import type { CountryOption, TopCountry, VotePayload } from "./types";

type ApiError = { status: number; body: unknown };

function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    typeof (error as any).status === "number"
  );
}

function App() {
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [topCountries, setTopCountries] = useState<TopCountry[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingTop, setLoadingTop] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoadingCountries(true);
    getAllCountries()
      .then(setCountries)
      .catch(() => setErrorMessage("Failed to load country list."))
      .finally(() => setLoadingCountries(false));

    refreshTop();
  }, []);

  function refreshTop() {
    setLoadingTop(true);
    getTopCountries()
      .then(setTopCountries)
      .catch(() => setErrorMessage("Failed to load top countries."))
      .finally(() => setLoadingTop(false));
  }

  async function handleVoteSubmit(payload: VotePayload) {
    setErrorMessage("");
    setSuccessMessage("");
    setSubmitting(true);

    try {
      await createVote(payload);
      setSuccessMessage("Your vote was successfully submitted.");
      refreshTop();
    } catch (error) {
      if (isApiError(error) && error.status === 422) {
        setErrorMessage("This email has already voted.");
      } else {
        setErrorMessage("Something went wrong submitting your vote.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  const filteredTop = topCountries.filter((c) => {
    const term = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(term) ||
      (c.capital || "").toLowerCase().includes(term) ||
      (c.region || "").toLowerCase().includes(term) ||
      (c.subregion || "").toLowerCase().includes(term)
    );
  });

  return (
    <div className="app">
      <Header />

      <main className="main">
        <div className="container">
          {successMessage && <SuccessBanner message={successMessage} />}

          {errorMessage && (
            <div className="error-banner">
              <span>{errorMessage}</span>
            </div>
          )}

          <VoteBar
            countries={countries}
            loadingCountries={loadingCountries}
            submitting={submitting}
            onSubmit={handleVoteSubmit}
          />

          <CountryTable
            countries={filteredTop}
            loading={loadingTop}
            search={search}
            onSearchChange={setSearch}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
