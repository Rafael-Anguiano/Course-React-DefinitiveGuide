import { Component } from 'react';
import Products from './components/Products';

class App extends Component {
  state = {
    products: [
      { name:'Tomatoes', price:'1500', img:'/imgs/tomate.jpg'},
      { name:'Lettuce', price:'2500', img:'/imgs/lechuga.jpg'},
      { name:'Chickpeas', price:'3000', img:'/imgs/arvejas.jpg'},
    ]
  }
  
  render(){
    return(
      <div>
        <Products
          addCart = {()=> console.log('Doing Nothing')}
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App;
