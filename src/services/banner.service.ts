/**
 * Banner Service
 * 
 * Enterprise-level service layer for banner management API operations
 * Handles all HTTP requests related to banner management
 */

import axios from 'axios';
import { API_URL } from '@/config/api.config';
import type {
  IGetBannersParams,
  IGetBannersResponse,
  IGetBannerByIdResponse,
  ICreateBannerResponse,
  IApiError,
} from './banner.types';

/**
 * Base URL for banner management endpoints
 */
const BANNER_BASE_URL = `${API_URL}/admin/banners`;

/**
 * Get all banners with filters
 * 
 * @param params - Query parameters for filtering and pagination
 * @returns Promise resolving to banners data with pagination
 * @throws Error if API request fails
 */
export const getBanners = async (
  params: IGetBannersParams = {}
): Promise<IGetBannersResponse> => {
  try {
    // Build query parameters, excluding undefined values
    const queryParams: Record<string, string | number> = {};

    if (params.page !== undefined) {
      queryParams.page = params.page;
    }
    if (params.limit !== undefined) {
      queryParams.limit = params.limit;
    }
    if (params.status && params.status.trim() !== '') {
      queryParams.status = params.status;
    }
    if (params.search && params.search.trim() !== '') {
      queryParams.search = params.search;
    }

    const response = await axios.get<IGetBannersResponse>(BANNER_BASE_URL, {
      params: queryParams,
    });

    return response.data;
  } catch (error) {
    // Handle axios errors
    if (axios.isAxiosError(error)) {
      const apiError: IApiError = error.response?.data || {
        success: false,
        message: error.message || 'An error occurred while fetching banners',
      };
      throw new Error(apiError.message);
    }

    // Handle unexpected errors
    throw new Error('An unexpected error occurred while fetching banners');
  }
};

/**
 * Get banner by ID
 * 
 * @param bannerId - ID of the banner to fetch
 * @returns Promise resolving to banner data
 * @throws Error if API request fails
 */
export const getBannerById = async (
  bannerId: string
): Promise<IGetBannerByIdResponse> => {
  try {
    const response = await axios.get<IGetBannerByIdResponse>(
      `${BANNER_BASE_URL}/${bannerId}`
    );

    return response.data;
  } catch (error) {
    // Handle axios errors
    if (axios.isAxiosError(error)) {
      const apiError: IApiError = error.response?.data || {
        success: false,
        message: error.message || 'An error occurred while fetching banner',
      };
      throw new Error(apiError.message);
    }

    // Handle unexpected errors
    throw new Error('An unexpected error occurred while fetching banner');
  }
};

/**
 * Create a new banner
 * 
 * @param bannerData - Banner data including title, image file, and is_active status
 * @returns Promise resolving to created banner data
 * @throws Error if API request fails
 */
export const createBanner = async (
  bannerData: {
    title?: string;
    image: File;
    is_active: boolean;
  }
): Promise<ICreateBannerResponse> => {
  try {
    // Create FormData for multipart/form-data upload
    const formData = new FormData();
    
    if (bannerData.title) {
      formData.append('title', bannerData.title);
    }
    
    formData.append('image', bannerData.image);
    formData.append('is_active', bannerData.is_active.toString());

    const response = await axios.post<ICreateBannerResponse>(
      BANNER_BASE_URL,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  } catch (error) {
    // Handle axios errors
    if (axios.isAxiosError(error)) {
      // Handle 413 Request Entity Too Large
      if (error.response?.status === 413) {
        throw new Error('File size is too large. Please use an image smaller than 5MB or contact your administrator to increase the server upload limit.');
      }

      const apiError: IApiError = error.response?.data || {
        success: false,
        message: error.message || 'An error occurred while creating banner',
      };
      // Extract error message from response
      const errorMessage = apiError.message || 
                          (error.response?.data as any)?.message ||
                          error.response?.statusText ||
                          'Failed to create banner. Please try again.';
      throw new Error(errorMessage);
    }

    // Handle unexpected errors
    throw new Error('An unexpected error occurred while creating banner');
  }
};

/**
 * Delete banner by ID
 * 
 * @param bannerId - ID of the banner to delete
 * @returns Promise resolving to delete response
 * @throws Error if API request fails
 */
export const deleteBanner = async (
  bannerId: string
): Promise<import('./banner.types').IDeleteBannerResponse> => {
  try {
    const response = await axios.delete<import('./banner.types').IDeleteBannerResponse>(
      `${BANNER_BASE_URL}/${bannerId}`
    );

    return response.data;
  } catch (error) {
    // Handle axios errors
    if (axios.isAxiosError(error)) {
      const apiError: IApiError = error.response?.data || {
        success: false,
        message: error.message || 'An error occurred while deleting banner',
      };
      throw new Error(apiError.message);
    }

    // Handle unexpected errors
    throw new Error('An unexpected error occurred while deleting banner');
  }
};

/**
 * Banner Service Object
 * 
 * Centralized service object for all banner-related operations
 * This pattern allows for easy extension and testing
 */
export const bannerService = {
  getBanners,
  getBannerById,
  createBanner,
  deleteBanner,
  // Future methods can be added here:
  // updateBanner,
};
