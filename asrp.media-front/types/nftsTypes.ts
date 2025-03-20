type ImageType = {
    fileName: string;
    height: number | null;
    isOriginal: boolean;
    path: string;
    size: number | null;
    width: number | null;
  };
  
export type NftType = {
    id: string;
    title: string | null;
    description: string | null;
    imageWeb: ImageType[];
    imageMob: ImageType[];
    imageList: ImageType[];
    url: string;
  };
  
export type PaginationType = {
    currentPage: number;
    nextPageExists: boolean;
    previousPageExists: boolean;
    total: number;
    totalPages: number;
  };
  
export type NftsDataType = {
    Nfts: NftType[];
    Pagination: PaginationType;
  };
  
export  type RootType = {
    nfts: NftsDataType;
  };
  