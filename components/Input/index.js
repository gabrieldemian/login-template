import Svg from "../Svg";
import s from "./input.module.css";

export default function index({
  className,
  icon,
  placeholder,
  type = "text",
  id
}) {
  return (
    <>
      {type === "text" || type === "email" || type === "password" ? (
        <div className={`${s.wrapper} ${className}`}>
          <i className={s.icon}>
            <Svg icon={icon} />
          </i>
          <input type={type} placeholder={placeholder} className={s.input} />
        </div>
      ) : (
        <div className="flex items-center">
          <input id={id} type="checkbox" className="h-6 w-6 rounded-md text-accent" placeholder={placeholder} />
          <label htmlFor={id} className={s.label}>
            Eu concordo com os <a className="link">Termos</a> e <a className="link">Política de privacidade</a>
          </label>
        </div>
      )}
    </>
  );
}
