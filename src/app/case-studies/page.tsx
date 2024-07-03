import { BentoGridThirdDemo } from "../ui/components/aceternity/BentoGrid";

export default function CaseStudies() {
  return (
    <div className="flex flex-col text-white m-8 text-center ">
      <div className="flex flex-col mb-20 pt-8">
        <span className="text-4xl">Visual Stories, Grid by Grid</span>
        <span className="text-lg text-slate-500 ">
          Explore our success stories in every square
        </span>
      </div>
      <BentoGridThirdDemo />
    </div>
  );
}
