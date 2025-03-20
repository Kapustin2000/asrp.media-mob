import { gql } from '@apollo/client';

const QUERY_DOCUMENTS = gql`
  query Documents(
    $filter: DocumentsFilterInput
    $sort: DocumentsSortInput
    $limit: Int
    $offset: Int
  ) {
    documents(filter: $filter, sort: $sort, limit: $limit, offset: $offset) {
      Documents {
        id
        title
        description
        slug
        label
        index
        type
        startDate
        likesCount
        publishDate
        externalVideoUrl
        active
        visibleUntil
        visibleSince
        isFavorite
        imageWeb {
          fileName
          height
          isOriginal
          path
          size
          width
        }
        imageMob {
          fileName
          height
          isOriginal
          path
          size
          width
        }
        readsCount
        viewsCount
        free
        exclusive
        isAvailable
        premium
        productId
        tariffIds
        commentsCount
        url
        logo {
          path
          fileName
          width
          height
          size
          isOriginal
        }
      }
      Pagination {
        currentPage
        nextPageExists
        previousPageExists
        total
        totalPages
      }
    }
  }
`;

const QUERY_DOCUMENT = gql`
  query Document($record: StringIdOrSlug!) {
    document(record: $record) {
      id
      title
      description
      label
      index
      viewsCount
      readsCount
      commentsCount
      type
      startDate
      publishDate
      externalVideoUrl
      likesCount
      active
      visibleUntil
      visibleSince
      seoTitle
      seoDescription
      isFavorite
      free
      exclusive
      isAvailable
      premium
      productId
      Product {
        id
        title
        price
        oldPrice
        Tariffs {
          id
          name
          index
          priceDifference
          Prices {
            Currency {
              id
              code
              name
            }
            default
            sale
            withSale
          }
        }
      }
      tariffIds
      imageWeb {
        fileName
        height
        isOriginal
        path
        size
        width
      }
      imageMob {
        fileName
        height
        isOriginal
        path
        size
        width
      }
      isFavorite
      isSaved
      isWantRead
      url
      DocumentContents {
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
      DocumentFreeContents {
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
      RecommendedDocuments {
        id
        title
        description
        type
        slug
        free
        exclusive
        isAvailable
        premium
        imageWeb {
          fileName
          height
          isOriginal
          path
          size
          width
        }
        imageMob {
          fileName
          height
          isOriginal
          path
          size
          width
        }
        readsCount
        viewsCount
        commentsCount
      }
      Authors {
        id
        firstName
        lastName
        description
        userName
        avatar {
          fileName
          height
          isOriginal
          path
          size
          width
        }
        regalia
        landingUrl
        index
      }
      Categories {
        id
        name
        displayName
        type
        index
        isGeneral
      }
      Sales {
        id
        name
        title
        Banners {
          id
          title
          description
          url
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
        }
      }
    }
  }
`;

const QUERY_BANNERS = gql`
  query Banners($filter: BannersFilterInput) {
    banners(filter: $filter) {
      id
      title
      subtitle
      description
      url
      titleUrl
      price
      oldPrice
      priority
      isActive
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
      Sale {
        id
        name
        title
        type
        activeFrom
        activeTo
        active
        discount
        SaleContents {
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
    }
  }
`;

const QUERY_DOCUMENT_BY_ID = gql`
  query DocumentById($id: String!) {
    documentById(id: $id) {
      id
      title
      description
      label
      index
      viewsCount
      readsCount
      commentsCount
      type
      startDate
      publishDate
      externalVideoUrl
      active
      visibleUntil
      visibleSince
      seoTitle
      seoDescription
      isFavorite
      free
      exclusive
      isAvailable
      premium
      productId
      Product {
        id
        title
        price
        oldPrice
        Tariffs {
          id
          name
          index
          priceDifference
          Prices {
            Currency {
              id
              code
              name
            }
            default
            sale
            withSale
          }
        }
      }
      tariffIds
      imageWeb {
        fileName
        height
        isOriginal
        path
        size
        width
      }
      imageMob {
        fileName
        height
        isOriginal
        path
        size
        width
      }
      isFavorite
      isSaved
      isWantRead
      url
      DocumentContents {
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
      DocumentFreeContents {
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
      RecommendedDocuments {
        id
        title
        description
        type
        slug
        imageWeb {
          fileName
          height
          isOriginal
          path
          size
          width
        }
        imageMob {
          fileName
          height
          isOriginal
          path
          size
          width
        }
        readsCount
        viewsCount
        commentsCount
      }
      Authors {
        id
        fullName
        description
        avatar {
          fileName
          height
          isOriginal
          path
          size
          width
        }
        regalia
        landingUrl
        index
      }
      Categories {
        id
        name
        displayName
        type
        index
        isGeneral
      }
    }
  }
`;

const QUERY_ARTICLE = gql`
  query Article($record: StringIdOrSlug!) {
    article(record: $record) {
      id
      title
      description
      slug
      imageMob
      imageWeb
      viewsCount
      createdAt
      PressMentions {
        id
        title
        description
        source
        sourceLogo
      }
      Researches {
        id
        title
        description
        platformLogo
      }
      Authors {
        avatar {
          fileName
          height
          isOriginal
          path
          size
          width
        }
        description
        fullName
        id
        index
        landingUrl
        regalia
      }
      ArticleContents {
        id
        Language {
          code
          id
          index
          name
          nativeName
        }
        content
      }
    }
  }
`;

const QUERY_PRESS_MENTIONS = gql`
  query PressMentions($limit: Int, $offset: Int) {
    pressMentions(limit: $limit, offset: $offset) {
      PressMentions {
        id
        title
        description
        source
        sourceLogo
        imageMob
        imageWeb
        slug
        viewsCount
        createdAt
        Authors {
          avatar {
            fileName
            height
            isOriginal
            path
            size
            width
          }
          description
          fullName
          id
          index
          landingUrl
          regalia
        }
        Researches {
          id
          title
          description
          platformLogo
        }
      }
    }
  }
`;

const QUERY_PRESS_MENTION = gql`
  query PressMention($record: StringIdOrSlug!) {
    pressMention(record: $record) {
      id
      title
      description
      imageMob
      imageWeb
      slug
      source
      sourceLogo
      createdAt
      viewsCount
      Articles {
        id
        title
        description
      }
      Authors {
        avatar {
          fileName
          height
          isOriginal
          path
          size
          width
        }
        description
        fullName
        id
        index
        landingUrl
        regalia
      }
      Researches {
        id
        title
        description
        platformLogo
      }
      PressMentionContents {
        id
        content
        Language {
          code
          id
          index
          name
          nativeName
        }
      }
    }
  }
`;

const QUERY_FAVORITE_DOCUMENTS = gql`
  query FavoriteDocuments(
    $filter: DocumentsFilterInput
    $sort: DocumentsSortInput
    $limit: Int
    $offset: Int
  ) {
    favoriteDocuments(
      filter: $filter
      sort: $sort
      limit: $limit
      offset: $offset
    ) {
      Documents {
        id
        title
        description
        label
        index
        type
        startDate
        publishDate
        externalVideoUrl
        active
        visibleUntil
        visibleSince
        seoTitle
        seoDescription
        isFavorite
        imageWeb
        isFavorite
        isSaved
        isWantRead
        imageMob
        readsCount
        viewsCount
        commentsCount
        url
        logo {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        DocumentContents {
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
        Authors {
          id
          fullName
          description
          avatar {
            fileName
            height
            isOriginal
            path
            size
            width
          }
          regalia
          landingUrl
          index
        }
        Categories {
          id
          name
          displayName
          type
          index
          isGeneral
        }
      }
    }
  }
`;

const QUERY_SAVED_DOCUMENTS = gql`
  query SavedDocuments(
    $filter: DocumentsFilterInput
    $sort: DocumentsSortInput
    $limit: Int
    $offset: Int
  ) {
    savedDocuments(
      filter: $filter
      sort: $sort
      limit: $limit
      offset: $offset
    ) {
      Documents {
        id
        title
        description
        label
        index
        viewsCount
        readsCount
        commentsCount
        type
        startDate
        publishDate
        externalVideoUrl
        active
        visibleUntil
        visibleSince
        seoTitle
        seoDescription
        isFavorite
        isSaved
        isWantRead
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
        logo {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        imageList {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        usersImages {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        url
        isAvailable
        productId
        free
        premium
        exclusive
        Authors {
          id
          fullName
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
        }
      }
    }
  }
`;

const QUERY_WANT_READ_DOCUMENTS = gql`
  query WantReadDocuments(
    $filter: DocumentsFilterInput
    $sort: DocumentsSortInput
    $limit: Int
    $offset: Int
  ) {
    wantReadDocuments(
      filter: $filter
      sort: $sort
      limit: $limit
      offset: $offset
    ) {
      Documents {
        id
        title
        description
        label
        index
        viewsCount
        readsCount
        commentsCount
        type
        startDate
        publishDate
        externalVideoUrl
        active
        visibleUntil
        visibleSince
        seoTitle
        seoDescription
        isFavorite
        isSaved
        isWantRead
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
        logo {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        imageList {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        usersImages {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        url
        isAvailable
        productId
        free
        premium
        exclusive
        Authors {
          id
          fullName
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
        }
      }
    }
  }
`;

const QUERY_COMMENTS = gql`
  query Comments(
    $filter: CommentsFilterInput
    $sort: CommentSortInput
    $limit: Int
    $offset: Int
  ) {
    comments(filter: $filter, sort: $sort, limit: $limit, offset: $offset) {
      Comments {
        id
        content
        createdAt
        Document {
          id
          title
          slug
        }
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
          regalia
          landingUrl
          index
          createdAt
        }
        Document {
          id
          title
        }
        repliesCount
      }
      Pagination {
        total
        totalPages
        currentPage
        nextPageExists
        previousPageExists
      }
    }
  }
`;

const QUERY_MY_COMMENTS = gql`
  query MyComments(
    $filter: CommentsFilterInput
    $sort: CommentSortInput
    $limit: Int
    $offset: Int
  ) {
    myComments(filter: $filter, sort: $sort, limit: $limit, offset: $offset) {
      Comments {
        id
        content
        Document {
          id
          title
          slug
        }
        repliesCount
        createdAt
        Author {
          id
          firstName
          lastName
          description
          userName
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
          isFollowed
          index
          createdAt
        }
      }
    }
  }
`;

const QUERY_FOLLOWING = gql`
  query Following(
    $authorId: String!
    $filter: AuthorsFilterInput
    $sort: CategoriesSortInput
  ) {
    following(authorId: $authorId, filter: $filter, sort: $sort) {
      Authors {
        id
        firstName
        lastName
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
        isFollowed
        index
        createdAt
        Role {
          id
          name
          displayName
        }
        userName
        description
      }
      Pagination {
        total
        totalPages
        currentPage
        nextPageExists
        previousPageExists
      }
    }
  }
`;

const QUERY_FOLLOWERS = gql`
  query Followers(
    $authorId: String!
    $filter: AuthorsFilterInput
    $sort: CategoriesSortInput
  ) {
    followers(authorId: $authorId, filter: $filter, sort: $sort) {
      Authors {
        id
        firstName
        lastName
        description
        userName
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
        isFollowed
        index
        createdAt
        Role {
          id
          name
          displayName
        }
      }
      Pagination {
        total
        totalPages
        currentPage
        nextPageExists
        previousPageExists
      }
    }
  }
`;

const QUERY_DIRECTORIES = gql`
  query Directories {
    directories {
      Languages {
        id
        code
        name
        nativeName
      }
    }
  }
`;

const QUERY_DOCUMENT_OF_WEEK = gql`
  query DocumentOfWeek {
    documentOfWeek {
      id
      title
      description
      label
      index
      slug
      type
      startDate
      publishDate
      externalVideoUrl
      active
      visibleUntil
      visibleSince
      seoTitle
      seoDescription
      isFavorite
      imageWeb {
        fileName
        height
        isOriginal
        path
        size
        width
      }
      imageMob {
        fileName
        height
        isOriginal
        path
        size
        width
      }
      readsCount
      viewsCount
      free
      exclusive
      isAvailable
      premium
      productId
      tariffIds
      commentsCount
      likesCount
    }
  }
`;

const QUERY_DRAFTS = gql`
  query Drafts($limit: Int, $offset: Int) {
    drafts(limit: $limit, offset: $offset) {
      Drafts {
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
      Pagination {
        total
        totalPages
        currentPage
        nextPageExists
        previousPageExists
      }
    }
  }
`;

const QUERY_DRAFT_BY_ID = gql`
  query DraftById($id: String!) {
    draftById(id: $id) {
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

const QUERY_MY_DOCUMENT = gql`
  query DocumentMy($documentMyId: String!) {
    documentMy(id: $documentMyId) {
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

const QUERY_MY_DOCUMENTS = gql`
  query Pagination(
    $filter: DocumentMyFilterInput
    $sort: DocumentsSortInput
    $limit: Int
    $offset: Int
  ) {
    documentsMy(filter: $filter, sort: $sort, limit: $limit, offset: $offset) {
      Documents {
        id
        title
        description
        seoTitle
        seoDescription
        slug
        status
        type
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
            firstName
            lastName
            description
            userName
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
          createdAt
        }
        Authors {
          id
          firstName
          lastName
          description
          userName
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
      }
      Pagination {
        total
        totalPages
        currentPage
        nextPageExists
        previousPageExists
      }
    }
  }
`;

const QUERY_ME = gql`
  query Me {
    me {
      id
      fullName
      firstName
      lastName
      userName
      balance
      phone
      email
      avatar {
        path
        fileName
        width
        height
        size
        isOriginal
      }
      birthDate
      Language {
        id
        name
        nativeName
        code
        index
      }
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
    }
  }
`;

const QUERY_NFTS = gql`
  query Nfts($limit: Int, $offset: Int) {
    nfts(limit: $limit, offset: $offset) {
      Nfts {
        id
        title
        description
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
        imageList {
          path
          fileName
          width
          height
          size
          isOriginal
        }
        url
      }
      Pagination {
        total
        totalPages
        currentPage
        nextPageExists
        previousPageExists
      }
    }
  }
`;

const QUERY_AUTHORS = gql`
  query Authors {
    authors {
      Authors {
        id
        firstName
        lastName
        description
        userName
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
      }
      Pagination {
        total
        totalPages
        currentPage
        nextPageExists
        previousPageExists
      }
    }
  }
`;

const QUERY_AUTHOR = gql`
  query Author($record: IdOrUserName!) {
    author(record: $record) {
      id
      firstName
      lastName
      description
      userName
      isFollowed
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
    }
  }
`;

const QUERY_FEDOCUMENTS = gql`
  query FEdocuments(
    $filter: DocumentsFilterInput
    $sort: DocumentsSortInput
    $limit: Int
    $offset: Int
  ) {
    FEdocuments(filter: $filter, sort: $sort, limit: $limit, offset: $offset) {
      Documents {
        id
        title
        description
        imageWeb {
          path
          fileName
          width
          height
          size
          isOriginal
        }
      }
      Pagination {
        total
        totalPages
        currentPage
        nextPageExists
        previousPageExists
      }
    }
  }
`;

export {
  QUERY_DOCUMENT_OF_WEEK,
  QUERY_DOCUMENTS,
  QUERY_DIRECTORIES,
  QUERY_COMMENTS,
  QUERY_MY_COMMENTS,
  QUERY_FAVORITE_DOCUMENTS,
  QUERY_SAVED_DOCUMENTS,
  QUERY_WANT_READ_DOCUMENTS,
  QUERY_ARTICLE,
  QUERY_PRESS_MENTIONS,
  QUERY_PRESS_MENTION,
  QUERY_DOCUMENT,
  QUERY_MY_DOCUMENT,
  QUERY_MY_DOCUMENTS,
  QUERY_DRAFT_BY_ID,
  QUERY_DRAFTS,
  QUERY_DOCUMENT_BY_ID,
  QUERY_NFTS,
  QUERY_AUTHORS,
  QUERY_AUTHOR,
  QUERY_BANNERS,
  QUERY_ME,
  QUERY_FOLLOWING,
  QUERY_FOLLOWERS,
  QUERY_FEDOCUMENTS,
};
