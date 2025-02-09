// src/hooks/useMediaStore.ts
import { useState, useEffect } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { db } from '../config/firebase';

export interface MediaItem {
  id: string;
  url: string;
  title: string;
  order: number;
  type: 'image' | 'video';
}

export function useMediaStore() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);

  useEffect(() => {
    const mediaRef = ref(db, 'media');
    
    // Subscribe to real-time updates
    const unsubscribe = onValue(mediaRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMediaItems(Object.values(data));
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  // Update function that will be used in admin
  const updateMedia = async (newItems: MediaItem[]) => {
    try {
      await set(ref(db, 'media'), newItems.reduce((acc, item) => ({
        ...acc,
        [item.id]: item
      }), {}));
      return true;
    } catch (error) {
      console.error('Error updating media:', error);
      return false;
    }
  };

  return { mediaItems, updateMedia };
}