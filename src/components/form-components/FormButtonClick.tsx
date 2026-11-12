import React from "react";

interface FormButtonClickProps {
    children: React.ReactNode;
}

const FormButtonClick = ({ children }: FormButtonClickProps) => {
    return (
            <div className="flex w-full">
                <div className="flex w-2/5 bg-red-50">
                </div>
                <div className="flex w-3/5">
                    <div className="flex w-full justify-start items-center bg-red-50 px-5">
                       { children }
                    </div>  
                </div>
            </div>
    );
};

export default FormButtonClick;