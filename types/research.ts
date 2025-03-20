import type {Article} from "@/types/article";
import type {PressMention} from "@/types/pressmention";
import type {Author} from "@/types/author";
import type {Category} from "@/types/category";
import type {EntityContent} from "~/types/EntityContent";
import type {Course} from "~/types/course";

export type Research = {
  id: string
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  description: string
  imageMob: string
  imageWeb: string
  doi: string
  source: string
  nftSource: string
  platformLogo: string
  viewsCount: number
  content: string
  externalId: string
  file: string
  status: string
  releaseDate: Date
  Authors: Author[]
  Categories: Category[]
  Articles: Article[]
  Mentions: PressMention[]
  ResearchContents: EntityContent[]
  Courses: Course[]
}

