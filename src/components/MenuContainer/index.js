import { Products } from "../Products"
import "./style.css"

export const MenuContainer = ({products, handleClick, filteredProduct, showProducts, setFilteredProduct, currentSale, cartTotal}) => {



    return(
        <div className="container">
        <input 
            type="text" 
            value={filteredProduct}
            onChange={(e) => setFilteredProduct(e.target.value)}/>
            
        <ul>
            
            {showProducts.map((item, index) => (
               <li>
                   <Products key={index} 
                   id={item.id} 
                   name={item.name} 
                   category={item.category} 
                   price={item.price} 
                   handleClick={handleClick}
                   buttonAppear={true}
                   />
               </li> 

            ))}
           
        </ul>
        
        <span className="subtotal">Sub-total: R${cartTotal.toFixed(2)}</span>

      {<ul>
            
            {currentSale.map((item, index) => (
               <li>
                   <Products key={index} id={item.id} name={item.name} category={item.category} price={item.price} buttonAppear={false}/>
               </li> 

            ))}
           
        </ul>}
        
        </div>
    )
}