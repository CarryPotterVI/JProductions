export interface PricingTier {
  name: string;
  priceRange: string;
  description: string;
  features: string[];
  popular?: boolean;
  timeEstimate: string;
}