import { useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
const Demo = () => {
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    // Navigate to the registration page
    navigate("/registration");
  };

  const handleOwnershipClick = () => {
    // Navigate to the ownership transfer page
    navigate("/transfer-ownership");
  };

  return (
    <>
      <section className="mt-16 flex lg:flex-row flex-col gap-4 z-10">
        <SignedIn>
          <button
            className="border border-black p-3 w-[400px] rounded-xl hover:bg-black hover:text-white transition-all font-medium"
            onClick={handleRegistrationClick}
          >
            Registration
          </button>
          <button
            className="border border-black p-3 w-[400px] rounded-xl hover:bg-black hover:text-white transition-all font-semibold"
            onClick={handleOwnershipClick}
          >
            Transfer Ownership
          </button>
        </SignedIn>
        <SignedOut>
          <SignInButton className="border bg-gray-300 p-3 w-[400px] rounded-xl hover:bg-black hover:text-white transition-all font-semibold">
          <button>Get Started</button>
          </SignInButton>
        </SignedOut>
      </section>
      <div className="mt-14 rounded-xl overflow-hidden">
        <img
          src="src\assets\field (2).jpg"
          alt="field_pic"
          className="w-full max-h-max opacity-80"
        />
      </div>
    </>
  );
};

export default Demo;