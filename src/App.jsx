// import ParallaxHeroSlider from "./components/ParallaxHeroSlider"

// function App() {
//   return (
//     <div className="app">
//       <ParallaxHeroSlider />
//       <div className="content py-20 px-4 bg-white">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
//           <p className="text-center max-w-2xl mx-auto mb-12">
//             Explore our collection of not-quite-original brands with original attitude. Our sneakers combine style,
//             comfort, and a touch of humor.
//           </p>

//           {/* This is just placeholder content to show scrolling */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((item) => (
//               <div key={item} className="bg-gray-100 p-8 rounded-lg">
//                 <div className="h-40 bg-gray-200 mb-4 rounded"></div>
//                 <h3 className="text-xl font-bold mb-2">Product Title</h3>
//                 <p className="text-gray-600">Product description goes here. This is a placeholder.</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App




import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ArticleArchive from "./pages/ArticleArchive"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ParallaxHeroSlider from "./components/ParallaxHeroSlider"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ParallaxHeroSlider />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<ArticleArchive />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App