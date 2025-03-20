import type {Faq} from "@/types/Faq";

export type PaymentMethod = {
  id: number
  name: string
  description: string
  displayName: string
  Faq: Faq
}

