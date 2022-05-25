import { BrowserRouter as Router, Routes, Route,Switch } from 'react-router-dom';

// components
import Navbar from "./components/Navbar"
import Sidebar from "./components/Navbar"
import Footer  from "./components/Footer"

// pages
import  HomePage  from "./pages/HomePage"
import  AboutPage from "./pages/AboutPage"
import  CartPage  from "./pages/CartPage"
import  ErrorPage from "./pages/ErrorPage"
import  ProductsPage from "./pages/ProductsPage"
import  SingleProductPage from "./pages/SingleProductPage"


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/cart'>
          <CartPage />
        </Route>
        <Route exact path='/products'>
          <ProductsPage />
        </Route>
        <Route exact path='/products/:id'>
          <SingleProductPage />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
    )
}

export default App
