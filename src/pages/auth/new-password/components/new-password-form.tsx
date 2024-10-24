import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";
const NewPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <>
      <div className="w-full max-w-xl space-y-6 p-6 bg-white shadow-md rounded-lg font-lora mb-4">
        {/* Title */}
        <h2 className="text-center text-[#0C1415] text-[1.2rem] font-lora font-semibold mb-2">
          Enter password
        </h2>

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

        {/* OTP Input */}

        {/* Continue Button */}
        <Button type="submit" className="w-full bg-[#3066BE] text-[0.9rem] ">
          Reset
        </Button>
      </div>
    </>
  );
};

export default NewPasswordForm;
