import type {Price} from "~/types/price";
import type { PriceListOption } from "./pricelistoption";

export type PriceListProperty = {
  id: number
  index: number
  type: string
  stringValue: string
  boolValue: boolean
  PriceListOption: PriceListOption
}

