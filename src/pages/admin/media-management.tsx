// src/pages/admin/media-management.tsx
import { useState } from 'react';
import { Box, Tabs, Tab, Container, Typography, Paper } from '@mui/material';
import MediaEditor from '../../components/admin/MediaEditor';
import { useMediaStore } from '../../hooks/useMediaStore';

const MediaManagement = ({ defaultTab = 0 }) => {
  const [tabValue, setTabValue] = useState(defaultTab);
  const { mediaItems, updateMedia } = useMediaStore();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleUpdate = async (newItems: MediaItem[]) => {
    await updateMedia(newItems);
  };

  const filteredMedia = {
    images: mediaItems.filter(item => item.type === 'image'),
    videos: mediaItems.filter(item => item.type === 'video')
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4">媒体管理中心</Typography>
        
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="图片管理" />
          <Tab label="视频管理" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <MediaEditor 
            type="image"
            items={filteredMedia.images}
            onUpdate={handleUpdate}
          />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <MediaEditor
            type="video"
            items={filteredMedia.videos}
            onUpdate={handleUpdate}
          />
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default MediaManagement;