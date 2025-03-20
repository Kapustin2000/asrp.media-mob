import type {Author} from "@/types/author";
import type {EntityContent} from "@/types/EntityContent";
import type {Research} from "@/types/research";
import type {PressMention} from "@/types/pressmention";

export type Article = {
  id: string
  title: string
  description: string
  slug: string
  imageMob: string
  imageWeb: string
  content: string
  viewsCount: number
  Authors: Author[]
  Researches: Research[]
  PressMentions: PressMention[]
  ArticleContents: EntityContent[]
  createdAt: Date
}

