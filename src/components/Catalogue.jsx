
function Catalogue(props){
    return (
        <>
            <div>
                <div class="flex flex-nowrap overflow-hidden justify-center px-10 py-10">
                    <img src={props.productImage}></img>
                </div>
                <div class="flex flex-col font-bold my-4">
                    <h5 class="card-title my-2">{props.cardTitle}</h5> 
                </div>
            </div>
            
        </>
    )
}

export default Catalogue