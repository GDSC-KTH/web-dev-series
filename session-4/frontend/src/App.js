import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <TodoList />
      </Container>
    </React.Fragment>
  );
}

export default App;
