function GroceryItems(props) {

    return(
        <>
            <div className="grid grid-cols-4 h-200 justify-center items-center">
                {props.pd.map((object, index)=>(
                    <div key='{index}' className="flex h-100 bg-red-50">
                        <div className="flex justify-center items-center h-100 w-100 px-20 py-20">
                            <img src={object.image}/>
                        </div>
                    </div>
                    ))}
            </div>
        </>
    )

}


export default GroceryItems 