import { pages } from "@/utils/pages";
import { configure, preferences } from "mercadopago";
import {
  CreatePreferencePayload,
  PreferenceItem,
} from "mercadopago/models/preferences/create-payload.model";

function configureMercadoPago() {
  try {
    configure({
      access_token: process.env.NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN ?? "",
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
      items: items,
      back_urls: {
        success: backUrl,
        pending: baseUrl,
        failure: baseUrl,
      },
      auto_return: "approved",
      statement_descriptor: "Boda de Andrea y Jesus",
      additional_info: "Gracias por el regalo para la boda de Andrea y Jesus",
    };
    const response = await preferences.create(preference);
    return response;
  } catch (e) {
    console.error(e);
    throw new Error("Error in createMercadoPagoPreference");
  }
}
