import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "@/features/ProductList";

const basename = import.meta.env.BASE_URL;

function App() {

  return (
    <BrowserRouter basename={basename}>
        <Routes>
            <Route path="/" element={<ProductList />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App