import productimage from '../assets/products.jpeg'
import ItemArrangement from './ItemArrangement'

function PhotoWall(props){

    return(
        <>  
            <div class="grid grid-cols-2 px-2 py-2">         
                {
                    props.exportPhotos.map((items)=>(
                    <ItemArrangement photos={items.source} url={items.url}/>
                ))}
            </div>
        </>
    )
}

export default PhotoWall