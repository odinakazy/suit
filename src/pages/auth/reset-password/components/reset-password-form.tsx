import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Button } from "../../../../components/ui/button";
import { Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/otp");
  };
  return (
    <form className="w-full max-w-xl space-y-6 p-6 bg-white shadow-md rounded-lg font-lora mb-4">
      {/* Google Login Button */}
      <h2 className="text-center text-[1.3rem] font-semibold font-lora text-[#0C1415]">
        Reset Password?
      </h2>

      <p className="text-[0.8rem] text-center font-lora text-[#0C1415]">
        Enter your email below to receive a link to reset your password.
      </p>

      {/* Email Input */}
      <div className="relative ">
        <Label
          htmlFor="email"
          className="block text-[#0C1415] text-[1rem] font-normal mb-1 ml-1"
        >
          Email Address
        </Label>

        <Input type="email" placeholder="Input email" className="pl-3" />
        <Mail className="absolute right-3 top-1/2 mt-3 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>

      {/* Log In Button */}
      <Button
        type="submit"
        onClick={handleclick}
        className="w-full bg-[#3066BE] text-[0.9rem]"
      >
        Reset
      </Button>
      <div className="text-center text-[0.9rem] text-[#000000] mt-4">
        <p className="font-bold font-lora">
          Don’t have an account?
          <Link to="/sign-up" className="text-[#18BBCC] hover:underline ml-2">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
