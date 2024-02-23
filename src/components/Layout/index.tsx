import { Container } from '@mui/material'
import React, { PropsWithChildren } from 'react'

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>
}

export default MainLayout
