import { pages } from "@/utils/pages";
import { configure, preferences } from "mercadopago";
import {
  CreatePreferencePayload,
  PreferenceItem,
} from "mercadopago/models/preferences/create-payload.model";

function configureMercadoPago() {
  try {
    configure({
      access_token: process.env.MERCADOPAGO_ACCESS_TOKEN ?? "",
    });
  } catch (e) {
    console.error(e);
    throw new Error("Error in configureMercadoPago");
  }
}

export async function createMercadoPagoPreference(
  host: string | undefined,
  items?: PreferenceItem[],
) {
  try {
    const baseUrl = host ?? "https://labodadezyj.com";
    const backUrl = `${baseUrl}/${pages.contactUs}`;
    configureMercadoPago();
    const preference: CreatePreferencePayload = {
      items: [
        {
          title: "Spa en las islas maldivas",
          unit_price: 2500,
          quantity: 1,
        },
      ],
      back_urls: {
        success: backUrl,
        pending: baseUrl,
        failure: baseUrl,
      },
      auto_return: "approved",
    };
    const response = await preferences.create(preference);
    return response;
  } catch (e) {
    console.log(e);
    throw new Error("Error in createMercadoPagoPreference");
  }
}
