import { useForm, type SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { number, z } from "zod";
import { Send } from 'lucide-react';
import FormField from "../components/FormField";
import FormButton from "../components/FormButton"
import FormButtonClick from "../components/FormButtonClick"


function SurveyForm(){

    const userSchema = z.object({
        name: z.string().length(6, "The name should be ateat 6 chracters long"),
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
                <FormField
                    label="NAME :"
                    error={errors.name?.message}
                >
                    <input
                        className="flex justify-start mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2"
                        type="text"
                        placeholder="Samarth Bais"
                        {...register("name")}
                    />
                </FormField>
                <FormField
                    label="EMAIL :"
                    error={errors.email?.message}
                >
                    <input
                        className="flex mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2"
                        type="email"
                        placeholder="johndoe@example.com"
                        {...register("email")}
                    />
                </FormField>
                <FormField
                    label="PASSWORD :"
                    error={errors.password?.message}
                >
                    <input
                        className="flex justify-start mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2"
                        type="password"
                        {...register("password")}
                    />
                </FormField>
                <FormButtonClick>
                    <button onClick={() => setAction("proceedToOTP")} className="bg-cyan-100 text-2xl border-2 rounded-xl px-2 py-2" type="submit">Send OTP on Email</button>
                </FormButtonClick>
                {
                    validSubmit && (
                                    <FormButton>
                                        <input {...register("otp")} className="bg-cyan-100 text-2xl border-2 rounded-xl px-2 py-2 my-3" type="text" placeholder='OTP'/>
                                    </FormButton>
                    )
                }
                <FormField error={errors.otp?.message}>
                    <></>
                </FormField>
                {
                    validSubmit && (
                                        <FormButtonClick>
                                            <button onClick={() => setAction("OTPProcessed")} className="bg-cyan-100 text-2xl border-2 rounded-xl px-2 py-2 my-3" type="submit">Verify OTP and Submit Form</button>
                                        </FormButtonClick>
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