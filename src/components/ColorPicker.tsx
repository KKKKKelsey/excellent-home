// src/components/ColorPicker.tsx
import { Box, Input } from '@mui/material';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({ value, onChange }: ColorPickerProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{ width: 100 }}
      />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="#000000"
      />
    </Box>
  );
}