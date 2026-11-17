import ShoppingIcon from './ShoppingIcon'

function HeadingComponent(props) {

    return(
        <>
            <div className="flex font-stretch-ultra-condensed xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-700 bg-white">
                <div className="flex grow-10 justify-center items-center">
                    <ShoppingIcon iconNumber={props.iconNumber}/>
                </div>
                <div className="flex grow-10 justify-start">{props.newTitle}</div>
            </div>
        </>
    )

}


export default HeadingComponent