export interface Product {
  id: number;
  Name: string;
  Code: number;
  ReleaseDate: Date;
  Price: number;
  Image: string;
  Address: Address
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
}
