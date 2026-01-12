import React, { useState } from 'react'
import StyledTodoListMiniProjectEx from './StyledTodoListMiniProjectEx'
import StyledTodoFormMiniProjectEx from './StyledTodoFormMiniProjectEx'

// MUI
import { Container, Paper, Typography, Box, Divider } from '@mui/material'

export default function StyledTodoAppMiniProjectEx() {
  // Parent - state and logic
  const [todoList, setTodoList] = useState([
    // task object:
    // {id: Date.now(), text: 'todoText', isComplete: false},
  ])

  const toggleIsComplete = (TaskId) => {
    const updatedToDoList = todoList.map((task) => {
      if (task.id === TaskId) {
        return { ...task, isComplete: !task.isComplete }
      } else {
        return task
      }
    })

    setTodoList(updatedToDoList)
  }

  const deleteTodo = (TaskId) => {
    const filteredToDoList = todoList.filter((task) => {
      return task.id !== TaskId
    })

    setTodoList(filteredToDoList)
  }

  // Parameter: Receives the text for the new todo
  // What it does: Creates new todo object and adds to array
  const addTodo = (todoText) => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      isComplete: false,
    }
    // add to the array
    setTodoList([...todoList, newTodo])
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper
        elevation={4}
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: 'background.paper',
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Todo App
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mb: 2 }}
        >
          Add tasks, mark them as complete, and remove them when you&apos;re done.
        </Typography>

        <Box sx={{ mt: 2, mb: 2 }}>
          <StyledTodoFormMiniProjectEx addTodo={addTodo} />
        </Box>

        <Divider sx={{ my: 2 }} />

        <StyledTodoListMiniProjectEx
          todoList={todoList}
          toggleIsComplete={toggleIsComplete}
          deleteTodo={deleteTodo}
        />
      </Paper>
    </Container>
  )
}
