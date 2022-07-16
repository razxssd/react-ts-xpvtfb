// START People BE service
interface ICity {
  Name: string;
  CountryRegion: string;
  Region: string;
}

interface IAddressInfo {
  Address: string;
  City: ICity;
}

interface IHomeAddress {
  Address?: any;
  City?: any;
}

export interface IValue {
  UserName: string;
  FirstName: string;
  LastName: string;
  MiddleName?: any;
  Gender: string;
  Age?: any;
  Emails: string[];
  FavoriteFeature: string;
  Features: string[];
  AddressInfo: IAddressInfo[];
  HomeAddress: IHomeAddress;
  ['@odata.type']: string;
  Budget?: number;
  BossOffice?: any;
  Cost?: number;
}

export interface IPeopleService {
  ['@odata.context']: string;
  value: IValue[];
}
// END People BE service

// START People store
export interface IPerson {
  FirstName: string;
  LastName: string;
  Gender: string;
  Age?: number;
  Emails: string[];
  UserName: string;
}

export interface IPeopleState {
  list: IPerson[];
  filteredList: IPerson[];
  isGridVisible: boolean;
}
// END People store

// START Syncfusion custom grid interfaces
export interface IChildEmailGridElement {
  Email: string;
  UserName: string;
}
// END Syncfusion custom grid interfaces
