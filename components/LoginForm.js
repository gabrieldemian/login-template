import Input from "@/components/Input";
import Button from "@/components/Button";
import { motion } from "framer-motion";

const parentAnimation = {
  initial: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const childrenAnimation = {
  initial: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function LoginForm({ toggle, ...other }) {
  return (
    <motion.div variants={parentAnimation} className="gap-8 flex flex-col flex-wrap absolute left-0 right-0 top-0" {...other}>

      <motion.div variants={childrenAnimation}>
        <Input icon="letter" type="email" placeholder="Email" />
      </motion.div>
      <motion.div variants={childrenAnimation}>
        <Input icon="lock" placeholder="Senha" />
      </motion.div>

      <motion.div variants={childrenAnimation}>
        <Button>Logar</Button>
      </motion.div>

      <motion.p variants={childrenAnimation}>
        Não tem uma conta?{" "}
        <a onClick={toggle} className="link link-border">
          Registrar
        </a>
      </motion.p>

    </motion.div>
  );
}
