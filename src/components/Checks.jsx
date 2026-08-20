function Checks(){

    const arr = []

    for(let i=0; i<120; i++){
        arr.push(<div class="border-2 opacity-30"></div>)
    }

    return(
        <>
            <div class="h-5 relative flex justify-center items-center overflow-hidden">
                <div class="grid grid-cols-120 h-300 w-10/10 opacity-50 bg-yellow-100 rotate-45">
                    {arr}
                </div>
                <div class="absolute grid grid-rows-120 h-300 w-10/10 z-1 opacity-50 rotate-45">
                    {arr}
                </div>   
            </div>
        </>
    )

}


export default Checks