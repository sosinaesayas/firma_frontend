import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { postRequest } from "../../../../services/api_service";
import { signUpCompany } from "../company_auth_api";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/solid";

const OtpVerification: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState<string>("");
  const [countdown, setCountdown] = useState<number>(0);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  const signup = useSelector((state: RootState) => state.form);
  const phone = useSelector((state: RootState) => state.form.phone);
  const email = useSelector((state: RootState) => state.form.email);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsResendDisabled(false);
    }
  }, [countdown]);

  const handleResendOtp = async () => {
    try {
      await signUpCompany(signup);
      setCountdown(60);
      setIsResendDisabled(true);
    } catch (e: any) {
      setError(e.response?.data.message || "An error occurred");
      console.error("Error resending OTP:", e.response || e);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const otp = inputs.join("");
    // const token = localStorage.getItem("token");

    try {
      const response = await postRequest(
        `/auth/verify-otp`,
        { otp, phone, email },
        "application/json"
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/login");
      }
    } catch (e: any) {
      setError(e.response?.data.message || "An error occurred");
      console.error("Error submitting OTP:", e.response || e);
    }
  };

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value.slice(0, 1);

    if (index < inputs.length - 1 && value) {
      const nextInput = document.getElementById(`otpInput${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    if (!value && index > 0) {
      const prevInput = document.getElementById(`otpInput${index - 1}`);
      if (prevInput) prevInput.focus();
    }

    setInputs(newInputs);
  };

  useEffect(() => {
    const firstInput = document.getElementById("otpInput0");
    if (firstInput) firstInput.focus();
  }, []);

  const isButtonActive = inputs.every((input) => input !== "");

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg rounded-lg text-center bg-white">
      <div className="flex justify-center items-center mb-4">
        <CheckCircleIcon className="w-12 h-12 text-green-500" />
      </div>
      <h4 className="mt-4 mb-6 text-lg font-semibold text-gray-700">
        የማረጋገጫ ቁጥርዎን ያስገቡ
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between mb-5">
          {inputs.map((input, index) => (
            <input
              key={index}
              type="number"
              id={`otpInput${index}`}
              value={input}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(index, e.target.value)
              }
              autoFocus={index === 0}
              className="w-1/6 p-2 text-xl text-center rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>
        <button
          type="submit"
          className={`w-full p-3 rounded font-semibold text-white ${
            isButtonActive
              ? "bg-green-500 hover:bg-green-600 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!isButtonActive}
        >
          {/* ያስገቡ */}
          Verify
        </button>
        <div className="mt-5">
          <p
            className={`italic font-light text-blue-500 cursor-pointer hover:underline ${
              isResendDisabled
                ? "text-gray-400 cursor-not-allowed"
                : "text-blue-500"
            }`}
            onClick={!isResendDisabled ? handleResendOtp : undefined}
          >
            {/* በድጋሚ ይላክልዎ */}
            Resend again? {isResendDisabled && `(${countdown}s)`}
          </p>
        </div>
        {error && (
          <div className="mt-5 text-red-500 flex items-center">
            <ExclamationCircleIcon className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default OtpVerification;
