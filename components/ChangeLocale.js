import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'

const LOCALES_MAP = {
  "en-US": {
    name: "English",
    img: {
      filename: "flag-en-us.svg",
      alt: "US Flag",
    },
  },
  "pt-BR": {
    name: "Português",
    img: {
      filename: "flag-pt-br.svg",
      alt: "Bandeira BR",
    },
  },
};

export default function ChangeLocale() {
  const { locale, asPath } = useRouter();
  const check = locale === 'pt-BR' ? 'en-US' : 'pt-BR';

  return (
    <>
      {
        <Link scroll={false} value={check} href={asPath} locale={check}>
          <a className="flex justify-center items-center">
            <Image
              width={20}
              height={20}
              className="block mr-2"
              src={`/${LOCALES_MAP[check].img.filename}`}
              alt={LOCALES_MAP[check].img.alt}
            />
            <span className="ml-2">{LOCALES_MAP[check].name}</span>
          </a>
        </Link>
      }
    </>
  );
}
