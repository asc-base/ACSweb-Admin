import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    example: {
      exampleProp: string
    }
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    example?: {
      exampleProp?: string
    }
  }
}
