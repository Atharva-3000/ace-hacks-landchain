import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <h1 className='w-28 object-contain text-3xl font-normal'>LandChain</h1>

        <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </nav>

      <h1 className='head_text'>
       Stress Free Land Ownership with<br className='max-md:hidden' />
        <span className='orange_gradient '>LandChain</span>
      </h1>
      <h2 className='desc text-center mt-4 text-xl'>
        Simplifying the process of buying and selling land with blockchain <br /> transfer ownership <span className=" font-bold">nft powered</span>
      </h2>
    </header>
  );
};

export default Hero;