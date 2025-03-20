import type {Currency} from "~/types/currency";

export type Price = {
  default: boolean
  sale: number
  old: number
  withSale: number
  Currency: Currency
}

