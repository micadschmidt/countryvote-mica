import { useState, FormEvent } from "react";
import type { CountryOption, VotePayload } from "../types";

type Props = {
  countries: CountryOption[];
  loadingCountries: boolean;
  submitting: boolean;
  onSubmit: (payload: VotePayload) => Promise<void> | void;
};

export function VoteBar({ countries, loadingCountries, submitting, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  function validate() {
    const next: { [k: string]: string } = {};

    if (!name.trim()) next.name = "Required";
    if (!email.trim()) next.email = "Required";
    if (!/\S+@\S+\.\S+/.test(email)) next.email = "Invalid email";
    if (!countryCode) next.countryCode = "Required";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    await onSubmit({
      name,
      email,
      country_code: countryCode, 
    });
  }

  return (
    <form className="vote-bar" onSubmit={handleSubmit}>
      <div className="vote-bar-header">Vote your Favourite Country</div>

      <div className="vote-bar-fields">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? "error" : ""}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "error" : ""}
        />

        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className={errors.countryCode ? "error" : ""}
        >
          <option value="">Country</option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>

        <button type="submit" disabled={loadingCountries || submitting}>
          Submit Vote
        </button>
      </div>
    </form>
  );
}
