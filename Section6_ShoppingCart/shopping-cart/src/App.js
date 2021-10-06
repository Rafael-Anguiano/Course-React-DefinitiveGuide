import { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout'
import Title from './components/Title'
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    products: [
      { name:'Tomatoes', price:'1500', img:'/imgs/tomate.jpg'},
      { name:'Lettuce', price:'2500', img:'/imgs/lechuga.jpg'},
      { name:'Chickpeas', price:'3000', img:'/imgs/arvejas.jpg'},
    ],
    cart: [],
    isCartVisible: false,
  }

  addToCart = (product) => {
    const {cart} = this.state
    if(cart.find(x => x.name === product.name)){
      const newCart = cart.map( x => x.name === product.name
        ? ({
          ...x,
          quantity: x.quantity +1
        })
        : x)
        return this.setState({
          cart: newCart
        })
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product, 
        quantity: 1
      })
    })
  }

  setCartVisibility = () => {
    if(!this.state.cart.length){
      return
    }
    this.setState({isCartVisible: !this.state.isCartVisible})
  }

  
  render(){
    //console.log(this.state.cart)
    return(
      <div>
        <NavBar 
          cart={this.state.cart} 
          setCartVisibility={this.setCartVisibility} 
          isCartVisible={this.state.isCartVisible}
        />
        <Layout>
          <Title/>
          <Products
            addToCart = {this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
