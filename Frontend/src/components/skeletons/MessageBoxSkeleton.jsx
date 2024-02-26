import { Skeleton } from '@mui/material'
import React from 'react'

const MessageBoxSkeleton = () => {
  return (
      <div style={{display:"flex", flexDirection:"column"}}>
          <Skeleton variant="text" sx={{ fontSize: '2rem', alignSelf:"flex-end", width:"45%"  }} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', alignSelf:"flex-start", width:"45%"  }} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', alignSelf:"flex-start", width:"45%"  }} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', alignSelf:"flex-end", width:"45%"  }} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', alignSelf:"flex-end", width:"45%"  }} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', alignSelf:"flex-start", width:"45%"  }} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', alignSelf:"flex-start", width:"45%"  }} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', alignSelf:"flex-end", width:"45%"  }} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', alignSelf:"flex-end", width:"45%"  }} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', alignSelf:"flex-start", width:"45%"  }} />

    </div>
  )
}

export default MessageBoxSkeleton