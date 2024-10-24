import { ReactNode } from "react";
import Logo from "../../assets/suitrohlogo.png";

// Importing all SVGs at once to avoid redundancy
import Firstsvg from "../../assets/first.svg";
import Secondsvg from "../../assets/second.svg";
import Thirdsvg from "../../assets/third.svg";
import Fourthsvg from "../../assets/fourth.svg";
import Fifthsvg from "../../assets/fifth.svg";

// Type for props
interface AuthLayoutProps {
  children: ReactNode;
}

// Array to hold SVG data for dynamic rendering
const svgDecorations = [
  { src: Firstsvg, alt: "svg1", className: "top-[-25px] left-0" },
  { src: Secondsvg, alt: "svg2", className: "top-[-25px] left-[12%]" },
  { src: Thirdsvg, alt: "svg3", className: "top-[-40px] right-0" },
  { src: Fourthsvg, alt: "svg4", className: "top-[25%] right-0" },
  { src: Fifthsvg, alt: "svg5", className: "bottom-[20%] left-0" },
];

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* SVG Decorations */}
      {svgDecorations.map(({ src, alt, className }, index) => (
        <div key={index} className={`hidden lg:block absolute ${className}`}>
          <img src={src} alt={alt} />
        </div>
      ))}

      <div className="w-full max-w-md flex flex-col items-center space-y-6 font-lora">
        {/* Logo */}
        <img src={Logo} alt="Logo" />

        {/* Children (Sign In Form) */}
        <div className="w-full flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
