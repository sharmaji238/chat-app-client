import { styled } from '@mui/material'
import React from 'react'

export const VishuallyHiddenInput = styled('input')(({ theme }) => ({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: '0',
  backgroundColor: theme.palette.background.default || 'transparent',
  color: theme.palette.text.primary || 'inherit',
}))
