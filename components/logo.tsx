import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="block w-[210px] sm:w-[250px]" aria-label="DTM Geocivil Consulting home">
      <Image
        src="/images/dtm-geocivil-logo.png"
        alt="DTM Geocivil Consulting"
        width={2181}
        height={651}
        priority
        className="h-auto w-full"
      />
    </Link>
  );
}
