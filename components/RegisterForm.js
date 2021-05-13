import Input from "@/components/Input";
import Button from "@/components/Button";
import { motion } from "framer-motion";

const parentAnimation = {
  initial: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const childrenAnimation = {
  initial: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export default function index({ toggle, ...other }) {
  return (
    <motion.div variants={parentAnimation} className="gap-8 flex flex-col flex-wrap" {...other}>

      <motion.div variants={childrenAnimation} className="flex-row flex gap-5 justify-center">
        <Input icon="user" placeholder="Nome" className="flex-grow" />
        <Input icon="user" placeholder="Sobrenome" className="flex-grow" />
      </motion.div>

      <motion.div variants={childrenAnimation}><Input variants={childrenAnimation} icon="letter" type="email" placeholder="Email" /></motion.div>
      <motion.div variants={childrenAnimation}><Input variants={childrenAnimation} type="password" icon="lock" placeholder="Senha" /></motion.div>
      <motion.div variants={childrenAnimation}><Input variants={childrenAnimation} type="password" icon="lock" placeholder="Confirmar senha" /></motion.div>

      <motion.div variants={childrenAnimation}>
        <Input
          type="checkbox"
          placeholder="Eu concordo com os termos"
          id="termos"
        />
      </motion.div>

      <motion.div variants={childrenAnimation}>
        <Button>Criar conta</Button>
      </motion.div>

      <motion.p variants={childrenAnimation}>
        Já tem uma conta? <a onClick={toggle} className="link link-border">Login</a>
      </motion.p>
    </motion.div>
  );
}
