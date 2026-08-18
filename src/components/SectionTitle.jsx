function SectionTitle(props){

    return(
        <>
            <div class="h-30 relative flex justify-center items-center overflow-hidden my-5">
                <div class="grid grid-cols-20 h-100 w-full opacity-50">
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
            </div>
            <div class="absolute grid grid-rows-20 h-100 w-full z-1 opacity-50">
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
                <div class="border-2 opacity-30"></div>
            </div>
            <div class="absolute font-serif xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-600">{props.title}</div>     
            </div>
        </>
    )

}


export default SectionTitle