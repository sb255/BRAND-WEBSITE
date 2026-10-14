import { useForm, type SubmitHandler } from 'react-hook-form';
import { useState } from 'react';


function SurveyForm(){

    const { register,
            handleSubmit,
            formState: {errors, isSubmitting},
    } = useForm<FormFields>();

    const [status, setStatus] = useState(false);

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        setStatus((prevStatus) => !prevStatus);
    };

    type FormFields = {
        name: String,
        email: String,
        password: String
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="border-red-300 border-4 flex justify-center mx-5 my-5 items-center rounded-xl overflow-hidden flex-col">
                <div className="w-full flex items-center justify-center bg-red-50 px-5 py-5">
                    <div className="flex text-4xl text-blue-300">CONTACT US FORM</div>
                </div>
                <div className="w-full flex items-center justify-center bg-red-50">
                    <div className="w-2/5">
                        <label className="flex justify-end mx-5 my-5 text-2xl">NAME: </label>
                    </div>
                    <div className="w-3/5">
                        <input className="flex justify-start mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2" type="text" placeholder="johndoe@example.com"
                            {...register("name", {
                                    required: "NAME IS REQURIED",
                                    minLength: {
                                        value: 8,
                                        message: "THE NAME SHOULD HAVE MINIMUM 8 CHARACTERS"
                                    }
                            })}
                        />
                        {errors.name && (
                                    <p style={{ color: "red" }}>{errors.name.message}</p>
                                )}
                    </div>  
                </div>
                <div className="w-full flex items-center justify-center bg-red-50">
                    <div className="w-2/5">
                        <label className="flex justify-end mx-5 my-5 text-2xl">EMAIL: </label>
                    </div>
                    <div className="w-3/5">
                        <input className="flex justify-start mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2" type="text" placeholder="johndoe@example.com"
                            {...register("email", {
                                    required: "EMAIL IS REQUIRED",
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: "YOU NEED TO ENTER A VALID EMAIL",
                                    },
                            })}
                        />
                        {errors.email && (
                                    <p style={{ color: "red" }}>{errors.email.message}</p>
                                )}
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
                <div>
                    {status && 
                        ( 
                            <p style={{ color: "red" }}>THE FORM HAS BEEN SUCCESFULLY SUBMITTED BY THE USER</p> 
                        )
                    }
                </div>
            </form>
        </>
    )
}


export default SurveyForm