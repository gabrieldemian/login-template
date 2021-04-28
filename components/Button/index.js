import s from './button.module.css'
import cn from 'classnames'

export default function index({
  type = 'flat',
  className,
  children,
  onClick
}) {
  return (
    <button onClick={onClick} className={cn(s[type], className)}>{children}</button>
  )
}
