import DESIGN_TOKEN from '@/styles/token'
import { createTheme } from '@mui/material'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

const theme = createTheme({
  palette: {
    primary: {
      main: DESIGN_TOKEN.color.primary,
    },
  },
  typography: {
    fontFamily: `${inter.style.fontFamily}, "Roboto", "Helvetica", "Arial", sans-serif`,
  },
})

export default theme
