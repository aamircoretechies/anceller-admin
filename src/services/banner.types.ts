/**
 * Banner Management Types
 * 
 * Type definitions for banner management API responses and data structures
 */

/**
 * Banner entity interface
 */
export interface IBanner {
  banner_id: string;
  title: string;
  image_url: string;
  is_active: boolean;
}

/**
 * Query parameters for fetching banners
 */
export interface IGetBannersParams {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
}

/**
 * Pagination metadata
 */
export interface IPaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

/**
 * API response structure for get banners endpoint
 */
export interface IGetBannersResponse {
  status: number;
  message: string;
  data: {
    banners: IBanner[];
    pagination: IPaginationMeta;
  };
}

/**
 * Request payload for creating a new banner
 */
export interface ICreateBannerRequest {
  title: string;
  image: File;
  is_active: boolean;
}

/**
 * Request payload for updating a banner
 */
export interface IUpdateBannerRequest {
  banner_id?: string;
  title?: string;
  image?: File;
  is_active?: boolean;
}

/**
 * API response structure for create/update banner endpoint
 */
export interface ICreateBannerResponse {
  status: number;
  message: string;
  data: {
    banner: IBanner;
  };
}

/**
 * API response structure for get banner by ID endpoint
 */
export interface IGetBannerByIdResponse {
  status: number;
  message: string;
  data: {
    banner: IBanner;
  };
}

/**
 * API response structure for delete banner endpoint
 */
export interface IDeleteBannerResponse {
  status: number;
  message: string;
  data?: {
    banner_id: string;
  };
}

/**
 * Error response structure
 */
export interface IApiError {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}
