import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const surveySchema = z.object({
    name: z.string().trim().min(3, "Enter at least 3 characters"),
    city: z.string().trim().min(3, "Enter a valid city"),
    state: z.string().trim().min(2, "Enter a valid state"),
    phone: z.string().regex(
        /^[6-9]\d{9}$/,
        "Enter a valid 10-digit Indian mobile number"
    ),
    email: z.email("Enter a valid email address")
});

type SurveyFields = z.infer<typeof surveySchema>;

function SurveyForm() {
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        trigger,
        getValues,
        reset,
        formState: { errors }
    } = useForm<SurveyFields>({
        resolver: zodResolver(surveySchema),
        defaultValues: {
            name: "",
            city: "",
            state: "",
            phone: "",
            email: ""
        }
    });

    const inputClass =
        "w-full rounded-lg border border-gray-300 " +
        "bg-white px-4 py-3 text-gray-900 " +
        "placeholder:text-gray-400 outline-none " +
        "transition-colors focus:border-blue-500 " +
        "focus:ring-2 focus:ring-blue-100 " +
        "disabled:bg-gray-100";

    const labelClass =
        "flex mb-2 block text-sm font-medium text-gray-700";

    const errorClass =
        "flex mt-1 text-sm text-red-500";

    // STEP 1: Send OTP
    const sendOTP = async () => {

        const valid = await trigger();
        
        if (!valid) return;

        try {
            setLoading(true);
            setMessage("");
            setSuccess(false);

            const phoneNumber = `+91${getValues("phone")}`;

            const response = await fetch(
                `http://localhost:3000/api/otp/send`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ phoneNumber })
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Failed to send OTP"
                );
            }

            setOtpSent(true);
            setMessage(
                "OTP generated. Check your backend terminal."
            );

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

    // STEP 2: Verify OTP and Submit Survey
    const submitOTP: SubmitHandler<SurveyFields> = async (data) => {
        if (!otpSent || !/^\d{6}$/.test(otp)) {
            setMessage("Enter a valid 6-digit OTP");
            return;
        }

        try {
            setLoading(true);
            setMessage("");

            const response = await fetch(
                `http://localhost:3000/api/forms/verify-and-submit`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: data.name,
                        city: data.city,
                        state: data.state,
                        phone: `+91${data.phone}`,
                        email: data.email,
                        otp
                    })
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Survey submission failed"
                );
            }

            setSuccess(true);
            setMessage(
                "OTP verified and survey accepted!"
            );

            reset();
            setOtp("");
            setOtpSent(false);

        } catch (error) {
            setSuccess(false);

            setMessage(
                error instanceof Error
                    ? error.message
                    : "Unable to submit survey"
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 px-4 py-10">
            <div className="mx-auto mx max-w-xl rounded-2xl bg-white p-6 shadow-lg md:p-8">

                {/* Header */}
                <h1 className="mb-2 text-center text-3xl font-bold text-blue-700">
                    Survey Form
                </h1>

                <p className="mb-8 text-center text-sm text-gray-500">
                    Complete your details and verify your phone number.
                </p>

                <form
                    onSubmit={handleSubmit(submitOTP)}
                    noValidate
                    className="space-y-5"
                >

                    {/* Full Name */}
                    <div>
                        <label htmlFor="name" className={labelClass}>
                            Full Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            autoComplete="name"
                            className={inputClass}
                            {...register("name")}
                        />

                        {errors.name && (
                            <p className={errorClass}>
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* City */}
                    <div>
                        <label htmlFor="city" className={labelClass}>
                            City
                        </label>

                        <input
                            id="city"
                            type="text"
                            placeholder="Enter your city"
                            className={inputClass}
                            {...register("city")}
                        />

                        {errors.city && (
                            <p className={errorClass}>
                                {errors.city.message}
                            </p>
                        )}
                    </div>

                    {/* State */}
                    <div>
                        <label htmlFor="state" className={labelClass}>
                            State
                        </label>

                        <input
                            id="state"
                            type="text"
                            placeholder="Enter your state"
                            className={inputClass}
                            {...register("state")}
                        />

                        {errors.state && (
                            <p className={errorClass}>
                                {errors.state.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className={labelClass}>
                            Email Address
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            autoComplete="email"
                            className={inputClass}
                            {...register("email")}
                        />

                        {errors.email && (
                            <p className={errorClass}>
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone" className={labelClass}>
                            Phone Number
                        </label>

                        <div className="flex gap-2">
                            <span className="flex items-center rounded-lg border border-gray-300 bg-gray-100 px-4 text-gray-700">
                                +91
                            </span>

                            <input
                                id="phone"
                                type="tel"
                                inputMode="numeric"
                                maxLength={10}
                                placeholder="10-digit mobile number"
                                disabled={otpSent}
                                className={inputClass}
                                {...register("phone")}
                            />
                        </div>

                        {errors.phone && (
                            <p className={errorClass}>
                                {errors.phone.message}
                            </p>
                        )}
                    </div>

                    {/* Send OTP Button */}
                    {!otpSent && (
                        <button
                            type="button"
                            onClick={sendOTP}
                            disabled={loading}
                            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send OTP"}
                        </button>
                    )}

                    {/* OTP Section */}
                    {otpSent && (
                        <div className="space-y-4 rounded-lg border border-blue-100 bg-blue-50 p-4">

                            <div>
                                <label htmlFor="otp" className={labelClass}>
                                    Enter 6-digit OTP
                                </label>

                                <input
                                    id="otp"
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={6}
                                    autoComplete="one-time-code"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(event) =>
                                        setOtp(
                                            event.target.value.replace(/\D/g, "")
                                        )
                                    }
                                    className={inputClass}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading || otp.length !== 6}
                                className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {loading
                                    ? "Verifying..."
                                    : "Submit OTP & Survey"}
                            </button>

                        </div>
                    )}

                    {/* Success/Error Message */}
                    {message && (
                        <p
                            role="status"
                            aria-live="polite"
                            className={`rounded-lg p-3 text-center text-sm ${
                                success
                                    ? "bg-green-50 text-green-700"
                                    : "bg-gray-100 text-gray-700"
                            }`}
                        >
                            {message}
                        </p>
                    )}

                </form>
            </div>
        </div>
    );
}

export default SurveyForm;