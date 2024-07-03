import Link from "next/link";
import "../../globals.css";

export default function NavigationLinks() {
  return (
    <nav>
      <Link href="./case-studies" className="hover:underline">
        case studies
      </Link>
      <span className="circle"></span>
      <Link href="#services" className="hover:underline">
        services
      </Link>
      <span className="circle"></span>
      <Link href="#contact" className="hover:underline">
        contact us
      </Link>
    </nav>
  );
}
