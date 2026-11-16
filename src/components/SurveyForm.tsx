
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";

import FormField from "../components/form-components/FormField";
import FormButton from "../components/form-components/FormButton";
import FormButtonClick from "../components/form-components/FormButtonClick";

// Form validation schema
const userSchema = z.object({
    name: z.string().min(3, "Please enter a valid name"),

    phone: z.number().min(6000000000, "Enter a valid phone number for recieving the OTP")
        .max(9999999999, "Enter a valid phone number for recieving the OTP"),

    city: z.string().min(3, "Please enter a valid city name"),

    state: z.string().min(2, "Please enter a valid state name"),

    email: z.string().trim().email("Please enter a valid email address"),

    password: z.string().min(8, "Password must be at least 8 characters")
});

type FormFields = z.infer<typeof userSchema>;

const API_URL = "http://localhost:5000/api";

function SurveyForm() {

    const {
        register,
        handleSubmit,
        trigger,
        getValues,
        reset,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm<FormFields>({
        resolver: zodResolver(userSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            city: "",
            state: "",
            email: "",
            password: ""
        }
    });

    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [verified, setVerified] = useState(false);
    const [verificationToken, setVerificationToken] = useState("");

    const [newForm, setNewForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // STEP 1: Send OTP
    const sendOTP = async () => {

        // Validate form fields before sending OTP
        const valid = await trigger();

        if (!valid) return;

        try {

            setLoading(true);
            setMessage("");

            const phoneNumber = getValues("phone");

            const response = await fetch(`${API_URL}/otp/send`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ phoneNumber })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message);
            }

            setOtpSent(true);
            setMessage("OTP sent successfully!");

        } catch (error) {

            setMessage(
                error instanceof Error
                    ? error.message
                    : "Unable to send OTP"
            );

        } finally {
            setLoading(false);
        }
    };

    // STEP 2 and STEP 3: Verify OTP and submit form
    const verifyAndSubmit: SubmitHandler<FormFields> = async (data) => {

        try {

            setLoading(true);
            setMessage("");

            // Verify OTP with backend
            const verifyResponse = await fetch(
                `${API_URL}/otp/verify`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        phoneNumber: data.phone,
                        otp
                    })
                }
            );

            const verifyResult = await verifyResponse.json();

            if (!verifyResponse.ok) {
                throw new Error(verifyResult.message);
            }

            const token = verifyResult.verificationToken;

            setVerified(true);
            setVerificationToken(token);

            // Submit form only after successful OTP verification
            const submitResponse = await fetch(
                `${API_URL}/forms/submit`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ...data,
                        verificationToken: token
                    })
                }
            );

            const submitResult = await submitResponse.json();

            if (!submitResponse.ok) {
                throw new Error(submitResult.message);
            }

            setMessage("Form submitted successfully!");

            setNewForm(true);
            reset();

            setOtp("");
            setOtpSent(false);
            setVerified(false);
            setVerificationToken("");

        } catch (error) {

            setMessage(
                error instanceof Error
                    ? error.message
                    : "Form submission failed"
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {!newForm ? (

                <form
                    onSubmit={handleSubmit(verifyAndSubmit)}
                    className="border-red-300 border-4 flex justify-center mx-5 my-5 items-center rounded-xl overflow-hidden flex-col"
                >

                    <div className="bg-red-50 w-full justify-center items-center text-5xl px-5 py-5">
                        CONTACT US FORM
                    </div>

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
                            {...register("phone", { valueAsNumber: true })}
                            disabled={otpSent}

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

                    {/* STEP 1: Send OTP */}

                    {!otpSent && (

                        <FormButtonClick>
                            <button
                                type="button"
                                onClick={sendOTP}
                                disabled={loading}
                                className="bg-cyan-100 text-2xl border-2 rounded-xl px-2 py-2"
                            >
                                {loading ? "Sending..." : "Send OTP on Mobile"}
                            </button>
                        </FormButtonClick>

                    )}

                    {/* STEP 2: Enter OTP */}

                    {otpSent && !verified && (

                        <FormButton>

                            <input
                                value={otp}
                                onChange={(e) => setOtp(
                                    e.target.value.replace(/\D/g, "").slice(0, 6)
                                )}
                                className="bg-cyan-100 text-2xl border-2 rounded-xl px-2 py-2 my-3"
                                type="text"
                                inputMode="numeric"
                                placeholder="Enter OTP"
                                maxLength={6}
                            />

                        </FormButton>

                    )}

                    {/* STEP 3: Verify and Submit */}

                    {otpSent && !verified && (

                        <FormButtonClick>

                            <button
                                type="button"
                                disabled={loading || otp.length !== 6}
                                onClick={handleSubmit(verifyAndSubmit)}
                                className="bg-cyan-100 text-2xl border-2 rounded-xl px-2 py-2 my-3 disabled:opacity-50"
                            >
                                {loading
                                    ? "Verifying..."
                                    : "Verify OTP and Submit Form"}
                            </button>

                        </FormButtonClick>

                    )}

                    {message && (
                        <p className="text-lg my-3">
                            {message}
                        </p>
                    )}

                </form>

            ) : (

                <div className="flex flex-col py-40">
                    <div className="flex justify-center items-center py-10">
                        <Send color="#4B5563" size={200} />
                    </div>

                    <div className="text-gray-600 text-4xl">
                        FORM SUBMITTED SUCCESSFULLY
                    </div>
                </div>

            )}
        </>
    );
}

export default SurveyForm;
