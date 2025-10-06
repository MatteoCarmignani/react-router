import './App.css'

// libreria routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import DefaultLayout from './layout/DefaultLayout';


// varie pagine 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/product" element={<ProductPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
