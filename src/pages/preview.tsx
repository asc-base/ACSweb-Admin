import React, { ReactElement } from 'react'
import {
  Typography,
  Divider,
  Button,
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material'
import { GetStaticPropsResult } from 'next'

const ComponentsPreviewPage = (): ReactElement => {
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
            Contained Button
          </Button>
          <Button variant="text" color="primary">
            Contained Button
          </Button>
        </Stack>

        <Stack direction="column" spacing={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <TextField label="Text Field" />
        </Stack>
      </Stack>
    </Box>
  )
}

export const getStaticProps = (): GetStaticPropsResult<unknown> => {
  if (process.env.NODE_ENV === 'production') {
    return { notFound: true }
  }
  return { props: {} }
}

export default ComponentsPreviewPage
