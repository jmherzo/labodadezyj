import { Gift, giftId } from "./types";

export const giftsList = new Map<giftId, Gift>([
  [
    "spa",
    {
      id: 0,
      description: "Spa a la orilla de la playa",
      price: 2000,
      amount: 1,
    },
  ],
  [
    "safari",
    {
      id: 1,
      description: "Safari en el desierto",
      price: 2800,
      amount: 1,
    },
  ],
  [
    "buceo",
    {
      id: 2,
      description: "Buceo en las Maldivas",
      price: 3500,
      amount: 1,
    },
  ],
  [
    "catamaran",
    {
      id: 3,
      description: "Paseo en catamaran",
      price: 1800,
      amount: 1,
    },
  ],
  [
    "cena",
    {
      id: 4,
      description: "Cena en el desierto",
      price: 2500,
      amount: 1,
    },
  ],
  [
    "picnic",
    {
      id: 5,
      description: "Picnic en una isla",
      price: 1600,
      amount: 1,
    },
  ],
]);
