function ItemArrangement(props){
// *define the height and width of the division and not the image!!*
    return(
        <>
            
            <div class="px-2 py-2 hover:translate-1">
               <img src={props.photos}></img>
            </div>
        </>
    )

}

export default ItemArrangement