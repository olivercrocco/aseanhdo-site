// The 11 ASEAN member states (Timor-Leste joined as the 11th member in 2025).
// Used for the regional band, country chips, and the future AHDI index page.

export type Country = {
  iso3: string;
  name: string;
  capital: string;
  flag: string; // emoji
  subregion: "Mainland" | "Maritime";
};

export const ASEAN_COUNTRIES: Country[] = [
  { iso3: "BRN", name: "Brunei Darussalam", capital: "Bandar Seri Begawan", flag: "🇧🇳", subregion: "Maritime" },
  { iso3: "KHM", name: "Cambodia", capital: "Phnom Penh", flag: "🇰🇭", subregion: "Mainland" },
  { iso3: "IDN", name: "Indonesia", capital: "Jakarta", flag: "🇮🇩", subregion: "Maritime" },
  { iso3: "LAO", name: "Lao PDR", capital: "Vientiane", flag: "🇱🇦", subregion: "Mainland" },
  { iso3: "MYS", name: "Malaysia", capital: "Kuala Lumpur", flag: "🇲🇾", subregion: "Maritime" },
  { iso3: "MMR", name: "Myanmar", capital: "Naypyidaw", flag: "🇲🇲", subregion: "Mainland" },
  { iso3: "PHL", name: "Philippines", capital: "Manila", flag: "🇵🇭", subregion: "Maritime" },
  { iso3: "SGP", name: "Singapore", capital: "Singapore", flag: "🇸🇬", subregion: "Maritime" },
  { iso3: "THA", name: "Thailand", capital: "Bangkok", flag: "🇹🇭", subregion: "Mainland" },
  { iso3: "TLS", name: "Timor-Leste", capital: "Dili", flag: "🇹🇱", subregion: "Maritime" },
  { iso3: "VNM", name: "Vietnam", capital: "Hanoi", flag: "🇻🇳", subregion: "Mainland" },
];
