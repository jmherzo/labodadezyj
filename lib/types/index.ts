export type Gift = {
  id: number;
  description: string;
  price: number;
  amount: number;
  imageSrc: string;
};

export type giftId =
  | "spa"
  | "safari"
  | "buceo"
  | "catamaran"
  | "cena"
  | "picnic";
