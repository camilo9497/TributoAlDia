import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Button from '../reusable/Button'
import Input from '../reusable/Input'
import styles from './styles.module.css'

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [registro, setRegistro] = useState()
    const router = useRouter()
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data") || "{}")
        setRegistro(data)
    }, [])
    console.log('datos', registro);


    const onSubmit = (data) => {
        console.log('datos del login', data);
        if (data.userLogin === registro.user && data.passwordLogin === registro.password ) {
            router.push("/tributoaldia")
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerLogo}>
                <img className={styles.imgLogo} src="/images/logo.jpeg" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.title}>Iniciar Sesion</p>
                <div className={styles.containerItem}>
                    <Input text="Usuario" type="text" placeholder="Escribe tu usuario" register={register} name="userLogin" options={{ required: "Campo requerido" }} error={errors.userLogin} />
                </div>
                <div className={styles.containerItem}>
                    <Input text="Contraseña" type="password" placeholder="Escribe tu contraseña" register={register} name="passwordLogin" options={{ required: "Campo requerido" }} error={errors.passwordLogin} />
                </div>
                <div className={styles.containerBtn}>
                    <Button text="Ingresar" type="submit" />
                </div>
                <Link href="/registro">
                    <p className={styles.registro}>Registro</p>
                </Link>
            </form>
        </div>
    )
}
export default Login