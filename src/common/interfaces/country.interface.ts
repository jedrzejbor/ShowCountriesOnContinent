export interface Country {
  name: string;
  code: string;
  emoji: string;
  languages: [LanguagesData]
}

export interface CountryData {
  countries: Country[];
}

export interface LanguagesData {
    name: string;
}

export interface CountryVariable {
  code: string;
}

export interface IdTypes {
  id: string;
}