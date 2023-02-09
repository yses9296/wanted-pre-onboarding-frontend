import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import Todo from './routes/Todo';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/todo' element={<Todo/>} />
      </Routes>
    </Container>
  );
}
const Container = styled.div`
  width: 60%;
  height: 100vh;
  margin: 0 auto;
`

export default App;
