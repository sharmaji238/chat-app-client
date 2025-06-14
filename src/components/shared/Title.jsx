import React from 'react'
import { Helmet } from 'react-helmet-async'

const Title = ({title="Chatty | Chat App", description="New generation Chat App"}) => {
  return (
   <Helmet>
   <title>{title}</title>
   <meta name="description" content={description} />
   </Helmet>
  )
}

export default Title;