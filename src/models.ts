interface Location {
  city: string;
  country: string;
  geonameId: number;
  lat: number;
  lng: number;
  postalCode: string;
  region: string;
  timezone: string;
}

export interface Data {
  location: Location;
  ip: string;
  isp: string;
}
