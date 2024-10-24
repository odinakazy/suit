import { Button } from "../../../../components/ui/button";
import Key from "../../../../assets/key.svg";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../../../components/ui/input-otp";
import { useNavigate } from "react-router-dom";

const OtpForm = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/new-password");
  };
  return (
    <>
      <div className="w-full max-w-xl space-y-6 p-6 bg-white shadow-md rounded-lg font-lora mb-4">
        {/* OTP Icon */}
        <div className="flex justify-center mb-6">
          <img
            src={Key} // Replace with your actual icon path
            alt="OTP Icon"
            className="W-16 h-16"
          />
        </div>

        {/* Title */}
        <h2 className="text-center text-[#0C1415] text-[1rem] font-lora font-semibold mb-2">
          Input OTP Sent to Your Email Address
        </h2>

        {/* OTP Input */}
        <div className="flex justify-center gap-2 mb-6">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        {/* Resend Code */}
        <div className="mb-4">
          <button className="text-[#18BBCC] font-lora hover:underline">
            Resend code
          </button>
        </div>

        {/* Continue Button */}
        <Button
          type="submit"
          onClick={handleclick}
          className="w-full bg-[#3066BE] text-[0.9rem] "
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default OtpForm;
