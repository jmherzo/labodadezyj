import { createMercadoPagoPreference } from "@/lib/mercadoPago";
import { Gift } from "@/lib/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const gift: Gift = req.body.gift;
    const response = await createMercadoPagoPreference(req.headers?.host, [
      {
        title: gift.description,
        unit_price: gift.price,
        quantity: gift.amount,
      },
    ]);
    res.status(200).json(response.body);
  } catch (error) {
    res.status(500).json({ error });
  }
}
