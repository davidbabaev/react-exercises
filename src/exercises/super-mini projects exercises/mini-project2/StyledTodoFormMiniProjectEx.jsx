import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'

export default function StyledTodoFormMiniProjectEx({ addTodo }) {
  // local state for input text
  const [inputData, setInputData] = useState('')

  const handleInput = (e) => {
    setInputData(e.target.value)
  }

  // runs when user clicks the button or presses Enter
  const handleAdd = () => {
    // 1. validation - ignore empty text
    if (inputData.trim() === '') {
      return
    }
    // 2. tell the parent to add a new todo
    addTodo(inputData)

    // 3. clear the input
    setInputData('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAdd()
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
      }}
    >
      <TextField
        fullWidth
        label="Add a new task"
        variant="outlined"
        value={inputData}
        onChange={handleInput}
        size="small"
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ whiteSpace: 'nowrap', px: 3 }}
      >
        Add
      </Button>
    </Box>
  )
}
