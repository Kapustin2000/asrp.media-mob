import type {Media} from "~/types/media";
import type {Tariff} from "~/types/tarrif";

export type Product = {
  id: string
  title: string
  description: string
  price: number
  kapustaPrice: number,
  isPurchased: number
  imageWeb: Media
  imageMob: Media
  Tariffs: Tariff[]
}

