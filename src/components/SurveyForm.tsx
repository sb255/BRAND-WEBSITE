import { useForm, type SubmitHandler } from 'react-hook-form';
import { useState } from 'react';


function SurveyForm(){

    const {
        register,
        handleSubmit,
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
                        <input className="flex justify-start mx-5 my-5 border-4 rounded-xl text-2xl px-2 py-2" type="text" placeholder="Samarth Bais"
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
                        {errors.password && (
                                    <p style={{ color: "red" }}>{errors.password.message}</p>
                                )}
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

/*

Imagine useForm() returns an object like this:

{
  register: function,
  handleSubmit: function,
  formState: {
    errors: {
      name: {
        message: "Name is required"
      }
    },
    isSubmitting: false,
    isDirty: true
  }
}
You could access the errors like this:

const result = useForm();

const errors = result.formState.errors; Or, more conveniently, you can write:

const {
  formState: { errors },
} = useForm();
 
*/


/*

Other options if you're not using react-hook-form

<form action={submitAction}> 

Here, React provides the submitted values as FormData; you can read them using .get().
The key difference: React Hook Form is a form-management library, while the action prop is a built-in React feature.
If you're learning React Hook Form, keep using handleSubmit() for now. You can learn React Actions separately when you're comfortable with the basics.

*/

export default SurveyForm