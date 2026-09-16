import {useForm} from 'react-hook-form';

function SurveyForm(){

    const handleSubmit = () =>{
        /*
            do nothing for now...
        */
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="border-red-300 border-4 flex justify-center mx-5 my-5 items-center rounded-xl overflow-hidden flex-col">
                <div className="w-full flex items-center justify-center bg-red-50 px-5 py-5">
                    <div className="flex text-4xl text-blue-300">CONTACT US FORM</div>
                </div>
                <div className="w-full flex items-center justify-center bg-red-50">
                    <div className="w-2/5">
                        <label className="flex justify-end mx-5 my-5 text-2xl">EMAIL: </label>
                    </div>
                    <div className="w-3/5">
                        <input className="flex justify-start mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2" type="text" placeholder="johndoe@example.com"/>
                    </div>     
                </div>
                <div className="w-full flex items-center justify-center bg-red-50">
                    <div className="w-2/5">
                        <label className="flex mx-5 my-5 text-2xl justify-end">PASSWORD: </label>
                    </div>
                    <div className="w-3/5">
                        <input className="flex mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2 justify-start" type="text" placeholder="password"/>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center bg-red-50">
                    <button className="bg-cyan-100 mx-5 my-5 text-2xl border-2 rounded-xl px-2 py-2" type="submit">SUBMIT</button>
                </div>
            </form>
        </>
    )
}


export default SurveyForm