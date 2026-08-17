
function Catalogue(props){
    return (
        <>
            <div class="h-10/10 w-10/10">
                <div class="h-7/10 w-10/10 md:h-8/10 px-5 py-5">
                    <img class="h-1/1 w-1/1" src={props.productImage}></img>
                </div>
                <div class="h-3/10 w-10/10 md:h-2/10 px-5 py-5 font-bold">
                    <h5 class="card-title my-2">{props.cardTitle}</h5> 
                </div>
            </div>
            
        </>
    )
}

export default Catalogue