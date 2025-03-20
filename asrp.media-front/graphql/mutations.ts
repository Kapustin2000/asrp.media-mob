import { gql } from '@apollo/client';

const FAVORITE_DOCUMENT_CREATE = gql`
  mutation FavoriteDocumentCreate($documentId: String!) {
    favoriteDocumentCreate(documentId: $documentId)
  }
`;

const FAVORITE_DOCUMENT_DELETE = gql`
  mutation FavoriteDocumentDelete($documentId: String!) {
    favoriteDocumentDelete(documentId: $documentId)
  }
`;

const WANT_TO_READ_DOCUMENT_CREATE = gql`
  mutation WantReadDocumentCreate($documentId: String!) {
    wantReadDocumentCreate(documentId: $documentId)
  }
`;

const WANT_TO_READ_DOCUMENT_DELETE = gql`
  mutation WantReadDocumentDelete($documentId: String!) {
    wantReadDocumentDelete(documentId: $documentId)
  }
`;

const SAVED_DOCUMENT_CREATE = gql`
  mutation SavedDocumentCreate($documentId: String!) {
    savedDocumentCreate(documentId: $documentId)
  }
`;

const SAVED_DOCUMENT_DELETE = gql`
  mutation SavedDocumentDelete($documentId: String!) {
    savedDocumentDelete(documentId: $documentId)
  }
`;

const COMMENT_CREATE = gql`
  mutation CommentCreate($record: CommentCreateInput!) {
    commentCreate(record: $record) {
      id
      content
      createdAt
      Author {
        userName
        id
        firstName
        lastName
        description
        avatar {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        bgImage {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        regalia
        landingUrl
        index
        createdAt
        Role {
          id
          name
          displayName
        }
      }
      repliesCount
      Replies {
        id
        content
        repliesCount
      }
    }
  }
`;

const EMAIL_SUBSCRIPTION_CREATE = gql`
  mutation EmailSubscriptionCreate($record: EmailSubscriptionCreateInput!) {
    emailSubscriptionCreate(record: $record)
  }
`;

const DRAFT_CREATE = gql`
  mutation DraftCreate($record: DraftCreateInput!) {
    draftCreate(record: $record) {
      id
      title
      content
      seoTitle
      keywords
      seoDescription
      status
      submitted
      chatCreated
      Language {
        id
        name
        nativeName
        code
        index
      }
    }
  }
`;

const DRAFT_UPDATE = gql`
  mutation DraftUpdate($record: DraftUpdateInput!) {
    draftUpdate(record: $record) {
      id
      title
      content
      seoTitle
      keywords
      seoDescription
      status
      submitted
      chatCreated
      Language {
        id
        name
        nativeName
        code
        index
      }
    }
  }
`;

const MUTATION_DOCUMENT_CREATE = gql`
  mutation DocumentCreate($record: DocumentCreateInput!) {
    documentCreate(record: $record) {
      id
      title
      description
      slug
      status
      imageWeb {
        path
        fileName
        width
        height
        size
        isOriginal
      }
      imageMob {
        path
        fileName
        width
        height
        size
        isOriginal
      }
      DocumentDraftContents {
        id
        Language {
          id
          name
          nativeName
          code
          index
        }
        content
        Author {
          id
          description
          avatar {
            path
            fileName
            width
            height
            size
            isOriginal
          }
          regalia
          landingUrl
          index
          bgImage {
            path
            fileName
            width
            height
            size
            isOriginal
          }
          userName
          lastName
          firstName
        }
        createdAt
      }
      Authors {
        id
        description
        avatar {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        regalia
        landingUrl
        index
        firstName
        lastName
        bgImage {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        userName
      }
      seoTitle
      seoDescription
    }
  }
`;

const MUTATION_DOCUMENT_UPDATE = gql`
  mutation DocumentUpdate($record: DocumentUpdateInput!) {
    documentUpdate(record: $record) {
      id
      title
      description
      slug
      status
      imageWeb {
        path
        fileName
        width
        height
        size
        isOriginal
      }
      imageMob {
        path
        fileName
        width
        height
        size
        isOriginal
      }
      DocumentDraftContents {
        id
        Language {
          id
          name
          nativeName
          code
          index
        }
        content
        Author {
          id
          description
          avatar {
            path
            fileName
            width
            height
            size
            isOriginal
          }
          regalia
          landingUrl
          index
          bgImage {
            path
            fileName
            width
            height
            size
            isOriginal
          }
          userName
          lastName
          firstName
        }
        createdAt
      }
      Authors {
        id
        description
        avatar {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        regalia
        landingUrl
        index
        firstName
        lastName
        bgImage {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        userName
      }
      seoTitle
      seoDescription
    }
  }
`;

// const MUTATION_DOCUMENT_CONTENT_CREATE = gql`
//   mutation DocumentContentCreate($record: DocumentContentCreateInput!) {
//     documentContentCreate(record: $record) {
//       id
//       Language {
//         id
//         name
//         nativeName
//         code
//         index
//       }
//       content
//     }
//   }
// `;
const MUTATION_DOCUMENT_SUBMIT = gql`
  mutation DocumentSubmit($documentId: String!) {
    documentSubmit(documentId: $documentId)
  }
`;
const MUTATION_DOCUMENT_CONTENT_CREATE = gql`
  mutation documentDraftContentCreate($record: DocumentContentCreateInput!) {
    documentDraftContentCreate(record: $record) {
      id
      Language {
        id
        name
        nativeName
        code
        index
      }
      content
    }
  }
`;
const MUTATION_LIKE_DOCUMENT = gql`
  mutation LikeDocumentCreate($documentId: String!) {
    likeDocumentCreate(documentId: $documentId)
  }
`;

const MUTATION_DOCUMENT_CONTENT_UPDATE = gql`
  mutation DocumentContentUpdate($record: ContentUpdateInput!) {
    documentContentUpdate(record: $record) {
      id
      Language {
        id
        name
        nativeName
        code
        index
      }
      content
    }
  }
`;

const MUTATION_FOLLOW_AUTHOR = gql`
  mutation Follow($authorId: String!) {
    follow(authorId: $authorId)
  }
`;

const MUTATION_UNFOLLOW_AUTHOR = gql`
  mutation Unfollow($authorId: String!) {
    unfollow(authorId: $authorId)
  }
`;
const MUTATION_UPDATE_AUTHOR = gql`
  mutation Mutation($record: ProfileUpdateInput!) {
    authorProfileUpdate(record: $record) {
      id
      firstName
      lastName
    }
  }
`;

export {
  MUTATION_FOLLOW_AUTHOR,
  MUTATION_UNFOLLOW_AUTHOR,
  FAVORITE_DOCUMENT_CREATE,
  FAVORITE_DOCUMENT_DELETE,
  WANT_TO_READ_DOCUMENT_CREATE,
  WANT_TO_READ_DOCUMENT_DELETE,
  SAVED_DOCUMENT_CREATE,
  SAVED_DOCUMENT_DELETE,
  MUTATION_LIKE_DOCUMENT,
  COMMENT_CREATE,
  DRAFT_CREATE,
  EMAIL_SUBSCRIPTION_CREATE,
  DRAFT_UPDATE,
  MUTATION_DOCUMENT_CREATE,
  MUTATION_DOCUMENT_SUBMIT,
  MUTATION_DOCUMENT_CONTENT_UPDATE,
  MUTATION_DOCUMENT_CONTENT_CREATE,
  MUTATION_DOCUMENT_UPDATE,
  MUTATION_UPDATE_AUTHOR,
};
