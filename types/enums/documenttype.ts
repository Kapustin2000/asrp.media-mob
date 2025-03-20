export enum DocumentType {
  'DOCUMENT_TYPE_ARTICLE' = 'articles',
  'DOCUMENT_TYPE_COURSE' = 'courses',
  'DOCUMENT_TYPE_EXTERNAL_VIDEO' = 'video',
  'DOCUMENT_TYPE_FILE' = 'files',
  'DOCUMENT_TYPE_INTERVIEW' = 'interviews',
  'DOCUMENT_TYPE_LESSON' = 'lessons',
  'DOCUMENT_TYPE_LIVE' = 'live',
  'DOCUMENT_TYPE_MENTION' = 'mentions',
  'DOCUMENT_TYPE_NEWS' = 'news',
  'DOCUMENT_TYPE_RESEARCH' = 'researches',
  'DOCUMENT_TYPE_WEBINAR' = 'webinars',
}
export type DocumentTypeKeys = keyof typeof DocumentType;

export const getArticleLink = (
  type: DocumentType | DocumentTypeKeys | null,
  slug: string,
  id: string
): string => {
  if (type === null) {
    return `/editor?id=${id}`;
  }

  const reverseMapping: Record<string, DocumentTypeKeys> = Object.entries(
    DocumentType
  ).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [value]: key as DocumentTypeKeys,
    }),
    {}
  );

  if (typeof type === 'string' && type in DocumentType) {
    return `/${DocumentType[type as DocumentTypeKeys]}/${slug}`;
  }

  return `/articles/${slug}`;
};

export const isValidDocumentType = (
  value: string
): value is DocumentTypeKeys => {
  return value in DocumentType;
};
