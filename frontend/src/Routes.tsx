import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/products" element={<Catalog/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;