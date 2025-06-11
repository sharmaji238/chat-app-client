import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import { NotFound } from './pages/NotFound';
import { LoadingBackDrop } from './components/shared/LoadingBackDrop';

const  Home = lazy( ()=> import ('./pages/Home'));
const  Login = lazy( ()=> import ('./pages/Login'));
const  Chat = lazy( ()=> import ('./pages/Chat'));
const  Groups = lazy( ()=> import ('./pages/Groups'));

let user = true;
// This is a placeholder for user authentication status.
 const App = () => {

  
  return (
  <Suspense fallback={<LoadingBackDrop/>}>
  <Routes>    
    <Route element={<ProtectedRoute user={user}/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/chat/:chatId" element={<Chat/>}/>
    <Route path="/groups" element={<Groups/>}/>
    </Route>
    <Route path="/login" element={<ProtectedRoute user={!user} redirect='/'><Login/></ProtectedRoute>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
  </Suspense>
  )
}

export default App;