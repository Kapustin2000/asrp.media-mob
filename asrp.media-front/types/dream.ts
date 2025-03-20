import type {Category} from "@/types/category";
import type {Interpretation} from "~/types/interpretation";
import type {Media} from "~/types/media";

export type Dream = {
  id: string
  title: string
  description: string
  image: Media
  createdAt: Date
  sleepDate: Date
  wakeUpTime: Date
  sleepTime: Date
  isLucid: boolean
  hearing: boolean
  touch: boolean
  isImpressive: boolean
  isEmotional: boolean
  isProphetic: boolean
  isNightmare: boolean
  isRepetitive: boolean
  odor: boolean
  taste: boolean
  Interpretations: Interpretation[]
  original: string
  notes: string
  refined: string
  categories: Category[]
  imageLoading: boolean
}

