import Footer from "@/components/Footer";
import Input from "@/components/Input";
import Image from "next/image";
import Button from "@/components/Button";
import Svg from "@/components/Svg";
import { useTheme } from "next-themes";

export default function Home() {

  const { theme, setTheme } = useTheme("dark");
  let isDark = theme === "dark";

  return (
    <section>
      <div className="w-full flex my-10 lg:my-20">
        <div className="container flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-8/12 items-center flex justify-center lg:justify-start flex-col lg:flex-row">
            <h1 className="text-6xl font-bold lg:mr-5 mb-5 lg:mb-0">Template</h1>
            <div className="flex flex-col">
              <p>Alguma coisa</p>
              <p>
                Será escrita, <span className="link">aqui.</span>
              </p>
            </div>
          </div>

          <div className="w-full lg:w-4/12 mt-5 lg:mt-0 lg:text-left flex items-center justify-center lg:justify-start flex-col lg:flex-row">
            <h1 className="font-bold text-2xl mr-5">Registre-se</h1>
            <p>E comece a usar o nosso sistema.</p>
          </div>
        </div>
      </div>

      <div className="container flex flex-col-reverse lg:flex-row gap-20 lg:gap-0">
        <div className="w-full h-full lg:w-8/12 flex items-center">
          <div className="w-full lg:w-1/2">
            {/* <Image
              objectFit
              width={744}
              height={744}
              layout="responsive"
              src="/login.svg"
            /> */}
            <div className="relative w-full">
              <Svg icon="login" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-4/12 h-full gap-8 flex flex-col">
          <div className="flex-row flex gap-5 justify-center">
            <Input icon="user" placeholder="Nome" className="flex-grow" />
            <Input icon="user" placeholder="Sobrenome" className="flex-grow" />
          </div>

          <Input icon="letter" placeholder="Email" />
          <Input icon="lock" placeholder="Senha" />
          <Input icon="lock" placeholder="Confirmar senha" />

          <Input
            type="checkbox"
            placeholder="Eu concordo com os termos"
            id="termos"
          />

          <Button>Criar conta</Button>

          <p>
            Já tem uma conta? <a className="link link-border">Login</a>
          </p>
        </div>
      </div>

      <Footer />

      <Button
        type="rounded"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        <Image width={33} height={33} src={isDark ? "/moon.svg" : "/sun.svg"} />
      </Button>
    </section>
  );
}
