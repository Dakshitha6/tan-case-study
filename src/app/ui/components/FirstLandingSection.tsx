import { FlipWordsDemo } from "./aceternity/FlipWords";
import NavigationLinks from "./NavigationLinks";
import { SparklesCore } from "./aceternity/Sparkles";

export function FirstLandingSection() {
  return (
    <section className="relative bg-custom-gradient min-h-screen w-full text-white flex flex-col justify-center items-center">
      <div className="w-[60rem] h-40 absolute ">
        <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={2}
          particleDensity={400}
          className="w-100 h-200  pointer-events-none"
          particleColor="#505050"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <span className="text-lg">“Your vision, our design” </span>
        <FlipWordsDemo />
        <div className="flex flex-row justify-center text-white mt-4 space-x-4">
          <NavigationLinks />
        </div>
      </div>
    </section>
  );
}
