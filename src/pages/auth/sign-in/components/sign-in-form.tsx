import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Mail, EyeOff, Eye } from "lucide-react";
const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <form className="w-full max-w-xl space-y-4 p-6 bg-white shadow-md rounded-lg">
      {/* Google Login Button */}
      <Button
        variant="outline"
        className="w-full flex items-center justify-center space-x-4"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span className="text-[#0C1415] text-[1.3rem] font-normal">
          Continue with Google
        </span>
      </Button>

      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-4 text-[#0C1415] text-[1.3rem] font-normal">
          OR
        </span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

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

      <div className="text-left ml-1">
        <Link
          to="/reset-password"
          className="block text-[#3066BE] text-[1rem] font-normal mb-1 ml-1 hover:underline"
        >
          Reset password
        </Link>
      </div>

      {/* Log In Button */}
      <Button type="submit" className="w-full bg-[#3066BE]">
        Log in
      </Button>

      <div className="text-center">
        <span>Don’t have an account? </span>
        <Link to="/sign-up" className="text-blue-500 hover:underline">
          Create one
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
