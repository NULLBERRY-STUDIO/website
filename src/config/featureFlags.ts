/**
 * Feature flags configuration
 * 
 * This file contains feature flags that can be used to enable/disable features
 * throughout the application.
 */

export interface FeatureFlags {
  showTestimonials: boolean;
  // Add more feature flags here as needed
}

// Default feature flags configuration
export const defaultFeatureFlags: FeatureFlags = {
  showTestimonials: true, // Set to false to disable the testimonials section
};

// Current feature flags (can be overridden at runtime if needed)
export const featureFlags: FeatureFlags = {
  ...defaultFeatureFlags,
};
