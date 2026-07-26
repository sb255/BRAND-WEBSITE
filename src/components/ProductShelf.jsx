import Catalogue from "./Catalogue"

function ProductShelf(props){

    return(
        <>
              <div class="grid grid-cols-3 justify-center px-10 py-10">
                {
                    props.cart.map((items)=>(
                    <Catalogue productImage={items.image} cardTitle={items.name}/>
                ))}
            </div>
        </>
    )

}


export default ProductShelf