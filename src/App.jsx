import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ArticleArchive from "./pages/ArticleArchive"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage" // Import CartPage
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import DetailProductPage from "./components/ProductPage/DetailProductPage"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<DetailProductPage />} />
          <Route path="/cart" element={<CartPage />} /> {/* Add CartPage route */}
          <Route path="/articles" element={<ArticleArchive />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App