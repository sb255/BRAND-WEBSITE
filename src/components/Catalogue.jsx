
function Catalogue(props){
    return (
        <>
            <div>
                <div class="w-50 mx-20 my-20 hover:translate-1">
                    <img class="my-4" src={props.productImage}></img>
                    <div class="flex flex-col my-4">
                        <h5 class="card-title my-2">{props.cardTitle}</h5> 
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Catalogue