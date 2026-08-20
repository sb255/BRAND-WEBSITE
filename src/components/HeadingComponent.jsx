import ShoppingIcon from './ShoppingIcon'

function HeadingComponent(props) {

    return(
        <>
            <div class="flex font-stretch-ultra-condensed xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500 bg-yellow-50">
                <div class="flex grow-10 justify-center items-center">
                    <ShoppingIcon iconNumber={props.iconNumber}/>
                </div>
                <div class="flex grow-10 justify-start">{props.newTitle}</div>
            </div>
        </>
    )

}


export default HeadingComponent