
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import ItemTable from '../ItemTable'

const TemplateTributoAlDia = () => {
    const [registro, setRegistro] = useState()
   
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data") || "{}")
        setRegistro(data)
    }, [])

    console.log('NIT', registro?.nit)
    const ultimosDosDigitos = []
    const difitosSeparados = registro?.nit.split("")
     const numberUltimo = difitosSeparados?.length -1;
     const numberPenultimo = difitosSeparados?.length -2;
    // const penultimoDigito = difitosSeparados[numberPenultimo]
    // ultimosDosDigitos.push(penultimoDigito)
    // const ultimoDigito = difitosSeparados[numberUltimo]
    // ultimosDosDigitos.push(ultimoDigito)
    // const ultimosDigitos = parseInt(ultimosDosDigitos.join(""))


    // console.log('ultimos dos digitos', ultimosDosDigitos);
    // console.log('ultimos dos digitos JOIN', ultimosDigitos);
    // const ultimoDigito = difitosSeparados?.pop()
    console.log('digitos separados' , difitosSeparados)
    // const ultimo = difitosSeparados[difitosSeparados.length - 2]
    // console.log('ultimo F' , ultimo)
    // console.log('digitos separados' , ultimoDigito)

    const natural = [
        {
            id: "01",
            dia: 9,
            mes: 8
        },
        {
            id: "02",
            dia: 9,
            mes: 8
        },
        {
            id: "03",
            dia: 10,
            mes: 8
        },
        {
            id: "04",
            dia: 10,
            mes: 8
        },
    ]


    // const getDay = natural.filter((item) => item.id === ultimosDigitos )

    // console.log('dia ', getDay[0].dia);
    
    return (
        <div className={styles.container} >
           <div className={styles.containerHeader}>
                <div className={styles.containerLogo}>
                    <img className={styles.imgLogo} src='/images/logo.jpeg' />
                </div>
                <h1 className={styles.title}>Mi tributo al dia</h1>
            </div>
            <div>
                <ItemTable text="UVT" value="$38.004" />
                <ItemTable text="SMIN" value="$380.000" />
                <ItemTable text="SMMLV" value="$1.000.000" />
                <ItemTable text="Salario minimo integral" value="$13.000.000" />
                <ItemTable text="Auxilio de transporte" value="$117.172" />
                <ItemTable text="Base de retención por servicio" value="$152.000" />
                <ItemTable text="Base de retención por compras" value="$1.026.000" />
                <p className={styles.titleItem}>Ingresos brutos por declarar IVA</p>
                <ItemTable text="Bimestral" value=">327.584.400" />
                <ItemTable text="Cuatrimestral" value="<3.275.844.000" />
            </div>
        </div>
    )
}
export default TemplateTributoAlDia