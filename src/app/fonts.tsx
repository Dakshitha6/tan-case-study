import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const montreal = localFont({
  src: [
    {
      path: "../../public/fonts/pp-neue-montreal-cufonfonts/ppneuemontreal-book.otf",
      weight: "700",
    },
  ],
});
export const poppins = Poppins({ weight: "100", subsets: ["latin"] });
