/**
 * Banner Management Hooks
 * 
 * Custom React hooks for banner management operations
 * Uses React Query for data fetching, caching, and state management
 */

import { useQuery, UseQueryResult } from 'react-query';
import { bannerService } from './banner.service';
import type {
  IGetBannersParams,
  IGetBannersResponse,
  IGetBannerByIdResponse,
  IBanner,
  IPaginationMeta,
} from './banner.types';

/**
 * Hook return type for better type safety
 */
export interface IUseBannersReturn {
  banners: IBanner[];
  pagination: IPaginationMeta | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
  isFetching: boolean;
}

/**
 * Custom hook to fetch banners with filters
 * 
 * @param params - Query parameters for filtering and pagination
 * @param options - Additional React Query options
 * @returns Banners data, loading state, error state, and refetch function
 * 
 * @example
 * ```tsx
 * const { banners, pagination, isLoading, isError, error, refetch } = useBanners({
 *   page: 1,
 *   limit: 20,
 *   status: 'active'
 * });
 * ```
 */
export const useBanners = (
  params: IGetBannersParams = {},
  options?: {
    enabled?: boolean;
    keepPreviousData?: boolean;
    refetchOnWindowFocus?: boolean;
  }
): IUseBannersReturn => {
  const {
    page = 1,
    limit = 20,
    status = '',
    search = '',
  } = params;

  // Build params object, excluding empty strings
  const queryParams: IGetBannersParams = {
    page,
    limit,
  };

  if (status && status.trim() !== '') {
    queryParams.status = status;
  }
  if (search && search.trim() !== '') {
    queryParams.search = search;
  }

  const queryResult: UseQueryResult<IGetBannersResponse, Error> = useQuery(
    ['banners', page, limit, status, search],
    () => bannerService.getBanners(queryParams),
    {
      enabled: options?.enabled !== false,
      keepPreviousData: options?.keepPreviousData ?? true,
      refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
      staleTime: 30000, // Consider data fresh for 30 seconds
      cacheTime: 300000, // Cache data for 5 minutes
    }
  );

  // Normalize pagination to include hasNextPage and hasPreviousPage
  const rawPagination = queryResult.data?.data?.pagination;
  const normalizedPagination: IPaginationMeta | null = rawPagination
    ? {
        ...rawPagination,
        hasNextPage: rawPagination.page < rawPagination.totalPages,
        hasPreviousPage: rawPagination.page > 1,
      }
    : null;

  return {
    banners: queryResult.data?.data?.banners || [],
    pagination: normalizedPagination,
    isLoading: queryResult.isLoading,
    isError: queryResult.isError,
    error: queryResult.error || null,
    refetch: queryResult.refetch,
    isFetching: queryResult.isFetching,
  };
};

/**
 * Hook return type for single banner fetch
 */
export interface IUseBannerByIdReturn {
  banner: IBanner | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * Custom hook to fetch a single banner by ID
 * 
 * @param bannerId - ID of the banner to fetch
 * @param options - Additional React Query options
 * @returns Banner data, loading state, error state, and refetch function
 * 
 * @example
 * ```tsx
 * const { banner, isLoading, isError, error, refetch } = useBannerById('banner-id-123', {
 *   enabled: true
 * });
 * ```
 */
export const useBannerById = (
  bannerId: string | null,
  options?: {
    enabled?: boolean;
  }
): IUseBannerByIdReturn => {
  const queryResult: UseQueryResult<IGetBannerByIdResponse, Error> = useQuery(
    ['banner', bannerId],
    () => bannerService.getBannerById(bannerId!),
    {
      enabled: options?.enabled !== false && bannerId !== null && bannerId !== undefined,
      staleTime: 30000, // Consider data fresh for 30 seconds
      cacheTime: 300000, // Cache data for 5 minutes
    }
  );

  return {
    banner: queryResult.data?.data?.banner || null,
    isLoading: queryResult.isLoading,
    isError: queryResult.isError,
    error: queryResult.error || null,
    refetch: queryResult.refetch,
  };
};
