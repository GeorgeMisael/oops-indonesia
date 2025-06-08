import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ArticleArchive from "./pages/ArticleArchive"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import DetailProductPage from "./components/ProductPage/DetailProductPage"
import DetailArticlePage from "./pages/DetailArticlePage" // Import DetailArticlePage

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<DetailProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/articles" element={<ArticleArchive />} />
          <Route path="/article/:id" element={<DetailArticlePage />} />
          <Route path="/" element={<DetailArticlePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App