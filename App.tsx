import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddStudent from './componentes/AddStudent'
import DeleteStudent from './componentes/DeleteStudent'
import SearchStudent from './componentes/SearchStudent'
import DisplayAll from './componentes/DisplayAll'


export default function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
<Route path="/" element={<DisplayAll />} />
<Route path="/add" element={<AddStudent />}/>
<Route path="/del" element={<DeleteStudent />}/>
<Route path="/search" element={<SearchStudent />}/>









</Routes>



</BrowserRouter>







    </div>
  )
}
