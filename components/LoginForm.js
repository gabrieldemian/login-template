import Input from "@/components/Input";
import Button from "@/components/Button";

export default function LoginForm() {
  return (
    <>
      <Input icon="letter" type="email" placeholder="Email" />
      <Input icon="lock" placeholder="Senha" />

      <Button>Logar</Button>

      <p>
        Não tem uma conta? <a className="link link-border">Registrar</a>
      </p>
    </>
  );
}
