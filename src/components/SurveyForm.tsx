import { useForm, type SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { number, z } from "zod";
import { Send } from 'lucide-react';
import FormField from "../components/form-components/FormField";
import FormButton from "../components/form-components/FormButton"
import FormButtonClick from "../components/form-components/FormButtonClick"


function SurveyForm(){

    const userSchema = z.object({
        name: z.string().min(3, "Please enter a valid name"),
        phone: z.number().min(999999999, "Please enter a valid number").max(10000000000, "Please enter a valid number"),
        city: z.string().min(3, "Please enter a valid city name"),
        state: z.string().min(2, "Please enter a valid state name"),
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
            defaultValues: {
            name: "Johndoe",
            city: "Barwani",
            state: "Madhya Pradesh",
            phone: 9999999999,
            email: "customercare@groxifi.com",
            password: "",
            otp: "123456"
            },
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
            <form onSubmit={handleSubmit(onSubmit)} className="border-red-300 border-4 flex justify-center mx-5 my-5 items-center rounded-xl overflow-hidden flex-col">
                <div className="bg-red-50 w-full justify-center items-center text-5xl px-5 py-5">CONTACT US FORM</div>
                <FormField
                    label="NAME :"
                    error={errors.name?.message}
                >
                    <input
                        className="flex justify-start mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2"
                        type="text"
                        {...register("name")}
                    />
                </FormField>
                <FormField
                    label="PHONE :"
                    error={errors.phone?.message}
                >
                    <input
                        className="flex justify-start mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2"
                        type="number"
                        {...register("phone", { valueAsNumber: true})}
                    />
                </FormField>
                <FormField
                    label="CITY :"
                    error={errors.city?.message}
                >
                    <input
                        className="flex justify-start mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2"
                        type="text"
                        {...register("city")}
                    />
                </FormField>
                <FormField
                    label="STATE :"
                    error={errors.state?.message}
                >
                    <input
                        className="flex justify-start mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2"
                        type="text"
                        {...register("state")}
                    />
                </FormField>
                <FormField
                    label="EMAIL :"
                    error={errors.email?.message}
                >
                    <input
                        className="flex mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2"
                        type="email"
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
            </form>) : <div className="flex flex-col py-40"><div className="flex justify-center items-center py-10"><Send color="#4B5563" size={200}/></div><div className="text-gray-600 text-4xl">FORM SUBMITTED SUCCESFULLY</div></div>}
        </>
    )
}

export default SurveyForm