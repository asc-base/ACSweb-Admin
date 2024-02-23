import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const PreviewContainer: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Components Preview
      </Typography>
      <Divider />
      <Stack spacing={3} mt={3}>
        <Stack direction="row" spacing={3}>
          <Button variant="contained" color="primary">
            Contained Button
          </Button>
          <Button variant="outlined" color="primary">
            Outlined Button
          </Button>
          <Button variant="text" color="primary">
            Text Button
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default PreviewContainer
