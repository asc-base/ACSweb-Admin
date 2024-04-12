import DESIGN_TOKEN from '@/styles/token'
import { createTheme } from '@mui/material'
import { Noto_Sans_Thai, Sarabun } from 'next/font/google'

const notoSansThai = Noto_Sans_Thai({ weight: '400', subsets: ['thai', 'latin'] })
const sarabun = Sarabun({ weight: '400', subsets: ['thai', 'latin'] })

const theme = createTheme({
  palette: {
    primary: {
      main: DESIGN_TOKEN.color.primary[3],
    },
    secondary: {
      main: DESIGN_TOKEN.color.secondary[2],
    },
    text: {
      primary: DESIGN_TOKEN.color.primary[1],
    },
  },
  typography: {
    fontFamily: `${notoSansThai.style.fontFamily}, "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontSize: '32px',
    },
    h2: {
      fontSize: '24px',
    },
    h3: {
      fontSize: '20px',
    },
    h4: {
      fontSize: '16px',
    },
    h5: {
      fontSize: '14px',
    },
    h6: {
      fontSize: '12px',
    },
    body1: {
      fontSize: '18px',
      fontFamily: `${sarabun.style.fontFamily}, "Roboto", "Helvetica", "Arial", sans-serif`,
    },
    body2: {
      fontSize: '16px',
      fontFamily: `${sarabun.style.fontFamily}, "Roboto", "Helvetica", "Arial", sans-serif`,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: 'text.primary',
        variant: 'h5',
      },
    },
  },
})

export default theme
