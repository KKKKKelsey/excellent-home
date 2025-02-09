import { Box, Grid, Typography, Paper } from '@mui/material'
import { PieChart, BarChart } from '@mui/x-charts'

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>数据看板</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">媒体类型分布</Typography>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 35, label: '图片' },
                    { id: 1, value: 65, label: '视频' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">访问趋势</Typography>
            <BarChart
              xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar'] }]}
              series={[{ data: [4, 3, 5] }]}
              width={500}
              height={300}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
} 