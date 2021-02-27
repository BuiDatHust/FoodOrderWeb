import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Feature from './Feature'
import Footer from './Footer'
import { GlobalStyle } from './globalStyleElement'
import Hero from './Hero'
import Products from './Products'
import { productData, productDataTwo } from './Products/data'
// import Feature from './Feature'

const App = () => {
    return (
        <div>
            <Router>
            <GlobalStyle />
            <Hero />
            <Products heading="Choose your Favourite" data={productData} />
            <Feature />
            <Products heading="Sweet Treats for You" data={productDataTwo} />
            <Footer />
            </Router>
            
        </div>
    )
}

export default App
