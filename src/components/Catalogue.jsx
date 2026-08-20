
function Catalogue(props){
    return (
        <>
            <div class="h-10/10 w-10/10">
                <div class="h-7/10 w-10/10 md:h-8/10 px-5 py-5">
                    <img class="h-1/1 w-1/1" src={props.productImage}></img>
                </div>
                <div class="flex justify-center items-center h-3/10 w-10/10 md:h-2/10 text-xl font-extrabold font-stretch-expanded">
                    <div class="animate-bounce">{props.cardTitle}</div>   
                </div>
            </div>
            
        </>
    )
}

export default Catalogue