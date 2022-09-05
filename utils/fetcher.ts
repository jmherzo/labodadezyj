import axios from "axios";

export async function getFetcher(url: string) {
  const response = await axios.get(url);
  return response.data;
}

export async function postFetcher(url: string, data: any) {
  const response = await axios.post(url, data);
  return response.data;
}
