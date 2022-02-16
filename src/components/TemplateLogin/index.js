import Link from 'next/link'
import Button from '../reusable/Button'
import Input from '../reusable/Input'
import styles from './styles.module.css'

const Login = () => {

    const data = JSON.parse(localStorage.getItem("data") || "{}")
    console.log('datos', data);
    return (
        <div className={styles.container}>
            <div className={styles.containerLogo}>
                <img className={styles.imgLogo} src="/images/logo.jpeg" />
            </div>
            <form>
                <p className={styles.title}>Iniciar Sesion</p>
                <div className={styles.containerItem}>
                    <Input text="Usuario" type="text" placeholder="Escribe tu usuario" />
                </div>
                <div className={styles.containerItem}>
                    <Input text="Contraseña" type="password" placeholder="Escribe tu contraseña" />
                </div>
                <div className={styles.containerBtn}>
                    <Button text="Ingresar" />
                </div>
                <Link href="/registro">
                    <p className={styles.registro}>Registro</p>
                </Link>
            </form>
        </div>
    )
}
export default Login