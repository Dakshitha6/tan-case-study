import { TextRevealCardPreview } from "./aceternity/TextRevealCard";

export function ThirdLandingSection() {
  return (
    <section className="min-h-screen w-full text-white flex flex-col justify-center items-center overflow-hidden">
      <TextRevealCardPreview />
      <div className="flex flex-col justify-center items-center w-full mb-2 px-12">
        <div className="flex justify-between w-full py-16">
          <div className="flex flex-col text-start">
            <span>You & I</span>
            <span className="pt-6">Copyright © 2024 You & I</span>
            <span>All rights reserved</span>
          </div>
          <div className="flex flex-row p-4 text-start">
            <div className="flex flex-col pr-16 ">
              <span className="p-1 pb-6 pb-6">Pricing</span>
              <span className="p-1 pb-6">Blog</span>
              <span className="p-1 pb-6">Contact</span>
            </div>
            <div className="flex flex-col pr-16">
              <span className="p-1 pb-6">Privacy policy</span>
              <span className="p-1 pb-6">Terms of service</span>
            </div>
            <div className="flex flex-col pr-10">
              <span className="p-1 pb-6">Twitter</span>
              <span className="p-1 pb-6">LinkedIn</span>
              <span className="p-1 pb-6">Instagram</span>
            </div>
          </div>
        </div>
        <h1 className="w-full text-center">
          <span className="block w-full text-9xl font-light tracking-tight md:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-300 text-center opacity-10">
            YOU & I STUDIO
          </span>
        </h1>
      </div>
    </section>
  );
}
