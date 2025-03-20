import type {Module} from "@/types/module";
import type {Thread} from "@/types/thread";
import type {Author} from "@/types/author";
import type {Feedback} from "@/types/Feedback";
import type {Faq} from "@/types/Faq";
import type {Research} from "@/types/research";
import type {EntityContent} from "~/types/EntityContent";

export type Course = {
  id: string
  title: string
  description: string
  seoTitle: string
  seoDescription: string
  status: string
  imageMob: string
  imageWeb: string
  content: string
  isPurchased: boolean,
  studentsCount: number
  lessonsCount: number
  totalAudios: number
  totalHomeworks: number
  totalModules: number
  totalTests: number
  totalVideos:  number
  Modules: Module[]
  DefaultThread: Thread
  OwnThread: Thread
  Authors: Author[]
  Threads: Thread[]
  CourseFeedbacks: Feedback[]
  Researches: Research[]
  Documents: Document[]
  CourseContents: EntityContent[]
  Faq: Faq
}

