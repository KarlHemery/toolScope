export interface SimpleTool {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isPremium?: boolean;
  featuredRank?: number;
  isTopTool?: boolean;
}

export type { SimpleTool as Tool };