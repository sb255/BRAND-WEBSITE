import GroxifiMovie from '../assets/Groxifi_movie.mov'

function Picture() {

    return (
        <>  
            <div class="my-2">
                <video width="100%" controls>
                    <source
                        src={GroxifiMovie} type="video/mp4"
                    />
                </video>
            </div>
        </>
    )

}


export default Picture