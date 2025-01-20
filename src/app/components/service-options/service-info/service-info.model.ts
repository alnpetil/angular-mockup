export interface Service {
  icon: string;
  description: string;
  color: string;
  iconBackground: string;
  price?: Price;
}

export interface Price {
  amount: string;
  style?: string | null;
}