import Image from "next/image";
import "./globals.css";
import { ContactUsIcon } from "../../public/icons/contact-us";
import { FirstLandingSection } from "./ui/components/FirstLandingSection";
import { SecondLandingSection } from "./ui/components/SecondLandingSection";
import { ThirdLandingSection } from "./ui/components/ThirdLandingSection";

export default function Home() {
  return (
    <main className="flex flex-col text-center">
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-8 text-white">
        <div className="flex justify-between items-center w-full">
          <div className="pl-4">
            <Image src="/logo.png" alt="U and I logo" width="34" height="42" />
          </div>
          <div className="flex items-center pr-36">
            <div className="pr-6 text-lg">Contact Us</div>
            <ContactUsIcon />
          </div>
        </div>
      </header>
      <FirstLandingSection />
      <SecondLandingSection />
      <ThirdLandingSection />
    </main>
  );
}
