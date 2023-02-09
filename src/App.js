import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import Todo from './routes/Todo';

function App() {
  return (
    <Main>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/todo' element={<Todo/>} />
      </Routes>
    </Main>
  );
}

const Main = styled.div`
  width: 60%;
  min-height: 90vh;
  margin: 0 auto;
`

export default App;
