import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home/Home"
import Cases from "../pages/Cases/Cases"
import Contact from "../pages/Contact/Contact";
export function MainRoutes() {

    return (
        <Routes>
            <Route path='/'>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/casos' element={<Cases />} />

                <Route path='/contato' element={<Contact />} />
            </Route>
        </Routes>
    )
}