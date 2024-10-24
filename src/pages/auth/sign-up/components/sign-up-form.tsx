import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Mail, EyeOff, Eye } from "lucide-react";
const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <form className="w-full max-w-xl space-y-4 p-6 bg-white shadow-md rounded-lg font-lora mb-4">
      {/* Google Login Button */}
      <h2 className="text-center text-[1.3rem] font-semibold font-lora text-[#0C1415]">
        Account creation
      </h2>

      {/* Email Input */}
      <div className="relative">
        <Label
          htmlFor="email"
          className="block text-[#0C1415] text-[1rem] font-normal mb-1 ml-1"
        >
          Email Address
        </Label>

        <Input type="email" placeholder="Input email" className="pl-3" />
        <Mail className="absolute right-3 top-1/2 mt-3 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>

      {/* Password Input */}
      <div>
        <Label
          htmlFor="password"
          className="block text-[#0C1415] text-[1rem] font-normal mb-1 ml-1"
        >
          Passwords
        </Label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            className="pl-3"
          />

          {showPassword ? (
            <Eye
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2  transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer "
            />
          ) : (
            <EyeOff
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer "
            />
          )}
        </div>
      </div>

      {/* Confirm Password Input */}
      <div>
        <Label
          htmlFor="confirm-password"
          className="block text-[#0C1415] text-[1rem] font-normal mb-1 ml-1"
        >
          Confirm Passwords
        </Label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="confirm-password"
            placeholder="Confirm Password"
            className="pl-3"
          />
          {/* <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
          {showPassword ? (
            <Eye
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2  transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer "
            />
          ) : (
            <EyeOff
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2  transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer "
            />
          )}
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start space-x-2">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          className="h-4 w-4 text-blue-600 border-gray-300 rounded mt-2"
        />
        <Label htmlFor="terms" className="text-[0.9rem] text-[#4F4F4F] ">
          By signing up, you agree to our{" "}
          <Link to="/terms" className="text-blue-500 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-blue-500 hover:underline">
            Privacy Policy
          </Link>
          .
        </Label>
      </div>

      {/* Log In Button */}
      <Button type="submit" className="w-full bg-[#3066BE]">
        Create Account
      </Button>

      {/* Links */}
      <div className="text-center text-[0.9rem] text-[#000000] mt-4">
        <p className="font-bold">
          Got an account already?{" "}
          <Link to="/" className="text-[#18BBCC] hover:underline">
            Log in
          </Link>
        </p>
      </div>
      <div>
        <p className="mt-3 font-bold">
          Need assistance?{" "}
          <Link to="/help" className="text-[#18BBCC] hover:underline">
            Get help
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
