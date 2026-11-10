import { useForm, type SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { number, z } from "zod";
import { Send } from 'lucide-react';


function SurveyForm(){

    const userSchema = z.object({
        name: z.string().min(3),
        email: z.string().trim().includes('@', "Please enter a valid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        otp: z.string().length(6, "Enter a valid OTP").regex(/^\d+$/, "OTP must contain only digits").optional()
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: {
        errors,
        isDirty,
        isValid,
        isSubmitting,
        isSubmitted,
        isSubmitSuccessful,
        isLoading,
        dirtyFields,
        touchedFields,
        submitCount,
        },
    } = useForm<FormFields>({
            resolver: zodResolver(userSchema),
        });
    
    type FormFields = z.infer<typeof userSchema>;

    const [status, setStatus] = useState(false);
    const [validSubmit, setValidSubmit] = useState(false);
    const [action, setAction] = useState("");
    const [newForm, setNewForm] = useState(false);

    const onSubmit: SubmitHandler<FormFields> = (data) => {

        if(action=="proceedToOTP")
            setValidSubmit((prevState)=>!prevState); 
        
        if(action=="OTPProcessed"){
            setStatus((prevStatus) => !prevStatus);
            setValidSubmit((prevState)=>!prevState);
            callServer(data);
            reset();
            setNewForm((prevState)=>!prevState);
        }
           
    };

    const callServer = async (data : FormFields) => {

        const response = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            
        const result = await response.json(); 
        console.log("Server response: ", result);
    }

    return(
        <>
            { !newForm ? (
            <form onSubmit={handleSubmit(onSubmit)} className="border-red-300 border-4 flex justify-center mx-5 my-5 py-10 items-center rounded-xl overflow-hidden flex-col">
                <div className="w-full flex items-center justify-center bg-red-50 px-5 py-5">
                    <div className="flex text-4xl text-blue-300">CONTACT US FORM</div>
                </div>
                <div className="w-full flex items-center justify-center bg-red-50">
                    <div className="w-2/5">
                        <label className="flex justify-end mx-5 my-5 text-2xl">NAME: </label>
                    </div>
                    <div className="w-3/5">
                        <input className="flex justify-start mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2" type="text" placeholder="Samarth Bais"
                            {...register("name", {
                                    required: "NAME IS REQURIED",
                                    minLength: {
                                        value: 8,
                                        message: "THE NAME SHOULD HAVE MINIMUM 8 CHARACTERS"
                                    }
                            })}
                        />
                    </div> 
                </div>
               <div className="flex w-full">
                    <div className="flex w-2/5 bg-red-50">
                    </div>
                    <div className="flex w-3/5">
                        <div className="flex w-full justify-start items-center bg-red-50 px-5">
                            {errors.name && (
                                    <p style={{ color: "red" }}>{errors.name.message}</p>
                            )}
                        </div>
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
                    </div>  
                </div>
               <div className="flex w-full">
                    <div className="flex w-2/5 bg-red-50">
                    </div>
                    <div className="flex w-3/5">
                        <div className="flex w-full justify-start items-center bg-red-50 px-5">
                            {errors.email && (
                                    <p style={{ color: "red" }}>{errors.email.message}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center bg-red-50">
                    <div className="w-2/5">
                        <label className="flex justify-end mx-5 my-5 text-2xl">PASSWORD: </label>
                    </div>
                    <div className="w-3/5">
                        <input className="flex justify-start mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2" type="password"
                            {...register("password", {
                                    required: "PASSWORD SHOULD HAVE A LENGHT OF 8 CHARACTERS",
                                    minLength: {
                                        value: 8,
                                        message: "INSUFFICIENT LENGHT OF THE PASSWORD"
                                    }
                            })}
                        />
                    </div>  
                </div>
                <div className="flex w-full">
                    <div className="flex w-2/5 bg-red-50">
                    </div>
                    <div className="flex w-3/5">
                        <div className="flex w-full justify-start items-center bg-red-50 px-5">
                            {errors.password && (
                                <p style={{ color: "red" }}>{errors.password.message}</p>
                            )} 
                        </div>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="flex w-2/5 bg-red-50">
                    </div>
                    <div className="flex w-3/5">
                        <div className="flex w-full justify-start items-center bg-red-50 px-5">
                           <button onClick={() => setAction("proceedToOTP")} className="bg-cyan-100 text-2xl border-2 rounded-xl px-2 py-2" type="submit">Send OTP on Email</button>
                        </div>  
                    </div>
                </div>
                {
                    validSubmit && (
                                        <div className="flex w-full">
                                            <div className="flex w-2/5 bg-red-50">
                                            </div>
                                            <div className="flex w-3/5">
                                                <div className="flex w-full justify-start items-center bg-red-50 px-5">
                                                    {/*MAYBE YOU DO NOT WANT TO REGISTER THE OTP TO THE FORM DATA*/}
                                                    <input {...register("otp")} className="bg-cyan-100 text-2xl border-2 rounded-xl px-2 py-2 my-3" type="text" placeholder='OTP'/>
                                                </div>
                                            </div>
                                        </div>
                    )
                }
                <div className="flex w-full">
                    <div className="flex w-2/5 bg-red-50">
                    </div>
                    <div className="flex w-3/5">
                        <div className="flex w-full justify-start items-center bg-red-50 px-5">
                            {errors.otp && (
                                    <p style={{ color: "red" }}>{errors.otp.message}</p>
                            )}
                        </div>
                    </div>
                </div>
                {
                    validSubmit && (
                                        <div className="flex w-full">
                                            <div className="flex w-2/5 bg-red-50">
                                            </div>
                                            <div className="flex w-3/5">
                                                <div className="flex w-full justify-start items-center bg-red-50 px-5">
                                                    <button onClick={() => setAction("OTPProcessed")} className="bg-cyan-100 text-2xl border-2 rounded-xl px-2 py-2 my-3" type="submit">Verify OTP and Submit Form</button>
                                                </div>
                                            </div>
                                        </div>
                    )
                }
                <div>
                    {status && 
                        ( 
                            <p style={{ color: "red" }}>THE FORM HAS BEEN SUCCESFULLY SUBMITTED BY THE USER</p> 
                        )
                    }
                </div>      
            </form>) : <div className="flex flex-col py-40"><div className="flex justify-center items-center py-10"><Send color="#4B5563" size={200}/></div><div className="text-gray-600 text-4xl">FORM SUBMITTED SUCCESFULLY</div></div>}
        </>
    )
}

export default SurveyForm