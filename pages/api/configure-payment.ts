import { createMercadoPagoPreference } from "@/lib/mercadoPago";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await createMercadoPagoPreference(req.headers?.host);
    res.status(200).json(response.body);
  } catch (error) {
    res.status(500).json({ error });
  }
}
