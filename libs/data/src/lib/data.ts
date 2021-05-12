export function data(): string {
  console.log(`Interface data works!`);
  return 'data';
}
export interface WeatherData {
  cityName: string;
  temperature: number;
  pressure: string;
  weatherDescription: string;
}
export interface WeatherRequest {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lat: number; lon: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: { country: string; sunrise: number; sunset: number };
  timezone: number;
  visibility: number;
  weather: [{ description: string; icon: string; id: number; main: string }];
  wind: { deg: number; gust: number; speed: number };
}
export interface LocationRequest {
  documentation: string;
  licenses: [{ name: string; url: string }];
  rate: { limit: number; remaining: number; reset: number };
  results: [
    {
      annotations: {
        DMS: { lat: string; lng: string };
        MGRS: string;
        Maidenhead: string;
        Metacor: { x: number; y: number };
        OSM: { edit_url: string; note_url: string; url: string };
        UN_M49: {
          regions: {
            EASTERN_EUROPE: string;
            EUROPE: string;
            UA: string;
            WORLD: string;
          };
          statistical_groupings: [string];
        };
        callingcode: number;
        currency: {
          alternate_symbols: [];
          decimal_mark: string;
          format: string;
          html_entity: string;
          iso_code: string;
          iso_numeric: string;
          name: string;
          smallest_denomination: number;
          subunit: string;
          subunit_to_unit: number;
          symbol: string;
          symbol_first: number;
          thousands_separator: string;
        };
        flag: string;
        geohash: string;
        qibla: number;
        roadinfo: {
          drive_on: string;
          road: string;
          road_type: string;
          speed_in: string;
        };
        sun: {
          rise: {
            apparent: number;
            astronomical: number;
            civil: number;
            nautical: number;
          };
          set: {
            apparent: number;
            astronomical: number;
            civil: number;
            nautical: number;
          };
        };
        timezone: {
          name: string;
          now_in_dst: number;
          offset_sec: number;
          offset_string: string;
          short_name: string;
        };
        what3words: { words: string };
      };
      bounds: {
        northeast: { lat: number; lng: number };
        southwest: { lat: number; lng: number };
      };
      components: {
        ISO_31161_alpha2: string;
        ISO_31661_alpha3: string;
        city: string;
        continent: string;
        country: string;
        country_code: string;
        county: string;
        municipality: string;
        road: string;
        road_type: string;
        state: string;
        suburb: string;
        _category: string;
        _type: string;
      };
      confidence: number;
      formatted: string;
      geomerty: { lat: number; lng: number };
    }
  ];
  status: { code: number; message: string };
  stay_informed: { blog: string; twitter: string };
  thanks: string;
  timestamp: { created_http: string; created_unix: number };
  total_results: number;
}
