import { featureFlags, FeatureFlags } from '@/config/featureFlags';

/**
 * Hook to access feature flags
 * 
 * @returns The current feature flags configuration
 */
export function useFeatureFlags(): FeatureFlags {
  return featureFlags;
}

/**
 * Helper function to check if a specific feature flag is enabled
 * 
 * @param flagName The name of the feature flag to check
 * @returns True if the feature flag is enabled, false otherwise
 */
export function isFeatureEnabled<K extends keyof FeatureFlags>(flagName: K): boolean {
  return featureFlags[flagName];
}
