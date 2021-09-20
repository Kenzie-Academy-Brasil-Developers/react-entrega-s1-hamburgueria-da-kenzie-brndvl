import './App.css';
import {useState} from "react"
import {MenuContainer} from "./components/MenuContainer"
import {Products} from "./components/Products"

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]); 

  const [filteredProduct, setFilteredProduct] = useState("");

  const [currentSale, setCurrentSale] = useState([])

  const [cartTotal, setCartTotal] = useState(0)

//functions

  const showProducts = products.filter((item) => item.name.toLowerCase().includes(filteredProduct.toLowerCase()))
    

  const total = () => {
    if (currentSale.length !== 0) {
      setCartTotal(currentSale.reduce((acc, p) => acc + p.price, 0))
    }
  }

  const handleClick = (productId) => { 
    const newArr = products.filter((item) => item.id === productId) 
    setCurrentSale([...currentSale, (newArr[0])])
    total()
  }


  return (
    <div className="App">
      <h1>Hamburgueria da Kenzie</h1>


      <div className="App-header">

        

      <MenuContainer products={products} 
      handleClick={handleClick} 
      showProducts={showProducts} 
      setFilteredProduct={setFilteredProduct} 
      filteredProduct={filteredProduct}
      currentSale={currentSale}
      cartTotal={cartTotal}
      />

      

      </div>
    

    </div>
  );
}

export default App;
