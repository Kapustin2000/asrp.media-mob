import type {Price} from "~/types/price";

export type Tariff = {
  id: number
  name: string
  priceDifference: number
  Prices: [Price]
}

