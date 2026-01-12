import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Checkbox,
  Typography,
  Box,
  Chip,
  Stack,
  Paper,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

export default function StyledTodoListMiniProjectEx({
  todoList,
  toggleIsComplete,
  deleteTodo,
}) {
  // display todos with buttons
  if (todoList.length === 0) {
    return (
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          No tasks yet. Add your first todo above.
        </Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ mt: 1 }}>
      <List sx={{ width: '100%' }}>
        {todoList.map((task) => (
          <Paper
            key={task.id}
            elevation={1}
            sx={{
              mb: 1.5,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <ListItem
              secondaryAction={
                <Stack direction="row" spacing={1} alignItems="center">
                  <Chip
                    label={task.isComplete ? 'Completed' : 'Pending'}
                    size="small"
                    color={task.isComplete ? 'success' : 'default'}
                    variant={task.isComplete ? 'filled' : 'outlined'}
                  />
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteTodo(task.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              }
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Checkbox
                  edge="start"
                  checked={task.isComplete}
                  tabIndex={-1}
                  disableRipple
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  onChange={() => toggleIsComplete(task.id)}
                />
              </ListItemIcon>

              <ListItemText
                primary={task.text}
                primaryTypographyProps={{
                  sx: {
                    textDecoration: task.isComplete ? 'line-through' : 'none',
                    color: task.isComplete ? 'text.disabled' : 'text.primary',
                    pr: 10, // padding right
                  },
                }}
                secondary={
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ wordBreak: 'break-word' }}
                  >
                    ID: {task.id}
                  </Typography>
                }
              />
            </ListItem>
          </Paper>
        ))}
      </List>
    </Box>
  )
}
