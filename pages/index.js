import Footer from "@/components/Footer";
import Image from "next/image";
import Button from "@/components/Button";
import Svg from "@/components/Svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";
import { motion, useCycle } from "framer-motion";

export default function Home() {

  const [isRegisterOpen, toggleRegister] = useCycle(true, false);
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const { setTheme, resolvedTheme } = useTheme();
  let isDark = resolvedTheme === "dark";

  const animate = {
    open: {
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <section>
      <div className="w-full flex my-10 lg:my-20">
        <div className="container flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-8/12 items-center flex justify-center lg:justify-start flex-col lg:flex-row">
            <h1 className="text-6xl font-bold lg:mr-5 mb-5 lg:mb-0">
              Template
            </h1>
            <div className="flex flex-col">
              <p>Alguma coisa</p>
              <p>
                Será escrita, <span className="link">aqui.</span>
              </p>
            </div>
          </div>

          <div className="w-full lg:w-4/12 mt-5 lg:mt-0 lg:text-left flex items-center justify-center lg:justify-start flex-col lg:flex-row">
            <h1
              onClick={() => toggleRegister()}
              className="font-bold text-2xl mr-5"
            >
              Registre-se
            </h1>
            <p>E comece a usar o nosso sistema.</p>
          </div>
        </div>
      </div>

      <div className="container flex flex-col-reverse lg:flex-row gap-20 lg:gap-0">
        <div className="w-full h-full lg:w-8/12 flex items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full">
              <Svg icon="login" />
            </div>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={isRegisterOpen ? "open" : "closed"}
          variants={animate}
          className="lg:w-4/12 h-full w-full"
        >
          <RegisterForm toggle={() => toggleRegister()} />
          {/* <LoginForm /> */}
        </motion.div>
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
