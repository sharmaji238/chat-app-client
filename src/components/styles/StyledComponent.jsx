import { styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { black, grey, offWhite, pinkHover, white } from '../../constants/colors';

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

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: black || theme.palette.primary.main || '#1976d2',
  backgroundColor: offWhite,
  '&:hover': {
    // textDecoration: 'underline',
    color: grey || theme.palette.primary.dark || '#115293',
    backgroundColor: pinkHover || theme.palette.action.hover || 'rgba(0, 0, 0, 0.04)',
  },
  // '&:visited': {
  //   color: theme.palette.primary.light || '#42a5f5',
  // },
}));
