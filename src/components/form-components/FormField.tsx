import React from "react";

interface FormFieldProps {
    label?: string;
    error?: string;
    children: React.ReactNode;
}

const FormField = ({ label, error, children }: FormFieldProps) => {
    return (
        <div className="flex w-full bg-red-50">
            <div className="w-2/5">
                <label className="flex justify-end mx-5 my-8 text-2xl">
                    {label}
                </label>
            </div>

            <div className="w-3/5">
                {children}

                {error && (
                    <p className="flex justify-start mx-5 my-2 text-red-500">
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FormField;