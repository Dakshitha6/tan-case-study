import { AnimatedPinDemo } from "./aceternity/3DPin";

export function SecondLandingSection() {
  return (
    <section className="relative min-h-screen w-full text-white flex flex-col justify-center items-center py-12 px-4">
      <div className="max-w-2xl text-center mt-12 mb-8">
        <span className="text-3xl font-bold mb-12 block">
          Showcasing of our creative excellence
        </span>
        <p className="text-md text-slate-500 whitespace-pre-line">
          At You & I, we offer a comprehensive range of design services tailored
          to meet your unique needs. Our team of experienced designers and
          creatives are dedicated to transforming your vision into reality,
          ensuring every project is executed with precision and creativity.
        </p>
      </div>
      <div className="flex flex-row justify-center space-x-4">
        <AnimatedPinDemo animatedPinContent={animatedPinContent[0]} />
        <AnimatedPinDemo animatedPinContent={animatedPinContent[1]} />
        <AnimatedPinDemo animatedPinContent={animatedPinContent[2]} />
      </div>
    </section>
  );
}

const animatedPinContent: AnimatedPinContentItem[] = [
  {
    title: "Designworks",
    subtitle: "Explore the birth of groundbreaking ideas and inventions. ",
    image: "/images/Rectangle1.png",
  },
  {
    title: "Tandemloop",
    subtitle: "Explore the birth of groundbreaking ideas and inventions. ",
    image: "/images/Rectangle2.png",
  },
  {
    title: "Software Solutions",
    subtitle: "Explore the birth of groundbreaking ideas and inventions. ",
    image: "/images/Rectangle3.png",
  },
];

export interface AnimatedPinContentItem {
  title: string;
  subtitle: string;
  image: string;
}
