import React from 'react'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
export default function ToolsTip() {
  return (
    <div>
    <Tooltip title="Add"   placement="top-end">
      <Button>Arrow</Button>
    </Tooltip>
    </div>
  )
}
