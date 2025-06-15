import { Modal, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { black, darkGrey, grey, offWhite, pinkHover, white } from '../../constants/colors';

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

export const StyledInputBox = styled('input')`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  outline: none;
  border:none;
  padding: 0 3rem;
  border-radius: 1.5rem;
  background-color: ${pinkHover};
  `;


export const StyledModal = styled(Modal)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90vw',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))