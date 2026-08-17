import Catalogue from "./Catalogue"

function ProductShelf(props){

    return(
        <>
              <div class="grid grid-cols-3">
                {
                    props.cart.map((items)=>(
                    <div class="flex justify-center">
                        <Catalogue productImage={items.image} cardTitle={items.name}/>
                    </div>
                ))}
            </div>
        </>
    )

}


export default ProductShelf