import Catalogue from "./Catalogue"

function ProductShelf(props){

    return(
        <>
              <div class="grid grid-cols-3">
                {
                    props.cart.map((items)=>(
                    <Catalogue productImage={items.image} cardTitle={items.name}/>
                ))}
            </div>
        </>
    )

}


export default ProductShelf