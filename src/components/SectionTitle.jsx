import HeadingComponent from "./HeadingComponent"
import Checks from "./Checks"

function SectionTitle(props){

    return(
        <>
            <Checks />
            <HeadingComponent newTitle={props.title}/>
            <Checks />
        </>
    )

}


export default SectionTitle