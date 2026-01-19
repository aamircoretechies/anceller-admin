/**
 * Services Barrel Export
 * 
 * Central export point for all service modules
 */

// User Services
export * from './user.service';
export * from './user.types';
export * from './user.hooks';

// Provider Services
export * from './provider.service';
// export * from './provider.types';
export * from './provider.hooks';

// Booking Services
export * from './booking.service';
// export * from './booking.types';
export * from './booking.hooks';

// Category Services
export * from './category.service';
// export * from './category.types';
export * from './category.hooks';

// Sub-Service Services
export * from './subservice.service';
// export * from './subservice.types';
export * from './subservice.hooks';

// Service Services
export * from './service.service';
// export * from './service.types';
export * from './service.hooks';

// Add-On Services
export * from './addon.service';
// export * from './addon.types';
export * from './addon.hooks';

// Coupon Services
export * from './coupon.service';
// export * from './coupon.types';
export * from './coupon.hooks';

// policy service 
export * from './policy.service';
// export * from './policy.types' ;
export * from './policy.hooks';

// template service 
export * from './template.service';
// export * from './template.types';
export * from './template.hooks';

// Banner Services
export * from './banner.service';
// Export banner-specific types explicitly to avoid conflicts with common types (IApiError, IPaginationMeta)
export type {
  IBanner,
  IGetBannersParams,
  IGetBannersResponse,
  ICreateBannerRequest,
  IUpdateBannerRequest,
  ICreateBannerResponse,
  IGetBannerByIdResponse,
  IDeleteBannerResponse,
} from './banner.types';
// Note: IPaginationMeta and IApiError are not exported here to avoid conflicts
// Import them directly from './banner.types' if needed
export * from './banner.hooks';