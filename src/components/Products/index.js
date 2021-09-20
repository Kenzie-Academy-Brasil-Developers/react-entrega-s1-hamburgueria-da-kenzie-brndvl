import "./style.css"

export const Products = ({name, category, price, handleClick, id, buttonAppear}) => {


    return(
        <div className="ProductCards">
            <div>
                <label className="name">{name}</label>
                <label className="category">{category}</label>
                <label className="price">{price}</label>
                {buttonAppear && <button onClick={() => handleClick(id)}>Adicionar ao carrinho</button>}
            </div>


        </div>
    )
}