import { useMediaStore } from '../../hooks/useMediaStore';
import { Button } from '@mui/material';

export default function TestConnection() {
  const { updateMedia } = useMediaStore();

  const testUpdate = async () => {
    const result = await updateMedia([{
      id: 'test1',
      url: '/test.jpg',
      title: 'Test Image',
      order: 1,
      type: 'image'
    }]);
    alert(result ? 'Connection successful!' : 'Connection failed!');
  };

  return (
    <Button onClick={testUpdate} variant="contained">
      Test Firebase Connection
    </Button>
  );
}
