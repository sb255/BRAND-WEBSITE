import GroxifiMovie from '../assets/Groxifi_movie.mov'

function Picture() {

    return (
        <>  
            <video width="100%" controls>
                <source
                    src={GroxifiMovie} type="video/mp4"
                />
            </video>
        </>
    )

}


export default Picture