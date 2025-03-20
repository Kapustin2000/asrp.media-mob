export enum DocumentStatus {
  'DRAFT' = 'DOCUMENT_STATUS_DRAFT',
  'MODERATION' = 'DOCUMENT_STATUS_MODERATION',
  'PUBLISHED' = 'DOCUMENT_STATUS_PUBLISHED',
}
export type DocumentStatusKeys = keyof typeof DocumentStatus;
