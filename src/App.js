import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import  ModeEditOutline  from './pages/ModeEditOutline'
import  VisibilityRounded  from './pages/VisibilityRounded'
import Home from './pages/Home'

function App() {
    return(
        <>
         <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/edit' element={<ModeEditOutline/>} />
                <Route path='/view' element={<VisibilityRounded/>} />
            
         </Routes>
        </>
    );
}

export default App;


