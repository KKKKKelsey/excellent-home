// src/types/media.ts
export interface MediaItem {
  id: string;
  url: string;
  title: string;
  order: number;
  type: 'image' | 'video';
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}