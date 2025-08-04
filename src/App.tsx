import React, { Suspense} from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import {  useSelector } from 'react-redux';
import Layout from './layout/Layout';

const Home = React.lazy(()=>import('./modules/Home/Home'));
const Contact = React.lazy(()=>import('./modules/Contact/Contact'));
const About = React.lazy(()=>import('./modules/About/About'));



function App() {
  const themeName = useSelector((state: any) => {
          return state.app.theme;
      });
  
  return (
    <>
    <div className={themeName}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout/>}>
                <Route index path='/' element={<Home/>} ></Route>
                <Route path='/about' element={<About/>} ></Route>
                <Route path='/contact' element={<Contact/>} ></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
    </div>
    </>
  )
}

export default App
