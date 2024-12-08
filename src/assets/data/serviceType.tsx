export interface Suburb {
  name: string;
  routeName: string;
}

export interface distArea {
  id: number;
  name: string;
  slug: string;
  img?: string;
  suburbs?: Suburb[];
  suburb?: string | any;
}

export interface ServiceArea {
  mainAreaName: string;
  slug: string;
  districtAreas: distArea[]
}
