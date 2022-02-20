
import styles from './styles.module.css'
import { useEffect, useMemo, useState } from 'react'
import ItemTable from '../ItemTable'
import { natural, juridica, exoGrandesContribuyentes, granContribuyenteF, ivaBimestral, consumo, exoJuridicaNatural, ivaCuatrimestral, retencionFuente, rstAnticipoBimestral, rstDeclaracionAnualConsolidad, rstDeclaracionAnualConsolidadImpuestosIva } from '../../utils/fechas';
import Button from '../reusable/Button';
import { useRouter } from 'next/router';

const TemplateTributoAlDia = () => {
    const [registro, setRegistro] = useState();
    const [tipoPersonaS, setTipoPersonaS] = useState();
    const [responsableIvaS, setResponsableIvaS] = useState();
    const [tipoExogenaS, setTipoExogenaS] = useState();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data") || "{}")
        setRegistro(data)
    }, [])

    const router = useRouter()
    const handleClickClose = () => {
        router.push("/")
    }

    const ultimosDosDigitos = registro?.nit?.slice(-2)
    const ultimoDigito = registro?.nit?.slice(-1)

    const obtenerFecha = (fechas, id) => {
        const result = fechas.find((item) => item.id === id);
        if (!result) return null;

        const date = new Date(2022, result.mes - 1, result.dia);
        console.log('cual mes esta dando', result.mes);
        return new Intl.DateTimeFormat('es-CO', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
    }

    const dates = useMemo(() => {
        let tipoPersona, granContribuyente, responsableIva, declaracionAnualConsolidada, declaracionAnualConsolidadaDeIva, anticipoBimestral, tipoExogena, impoconsumo, retencionEnLaFuente;

        if (!registro) return null;

        if (registro.tipopersona === "personaNatural") {
            tipoPersona = obtenerFecha(natural, ultimosDosDigitos);
            setTipoPersonaS("natural")
        } else if (registro.tipopersona === "personaJuridica") {
            tipoPersona = obtenerFecha(juridica, ultimosDosDigitos);
            setTipoPersonaS("juridica")
        }
        if (registro.tiporegimen === "granContribuyente") {
            granContribuyente = obtenerFecha(granContribuyenteF, ultimoDigito);
        }
        if (registro.responsableiva === "responsableivabimestral") {
            responsableIva = obtenerFecha(ivaBimestral, ultimoDigito);
            setResponsableIvaS("responsable iva bimestral")
        } else if (registro.responsableiva === "responsableivacuatrimestral") {
            responsableIva = obtenerFecha(ivaCuatrimestral, ultimoDigito);
            setResponsableIvaS("responsable iva cuatrimestral")
        }
        if (registro.declaracionanualconsolidada) {
            declaracionAnualConsolidada = obtenerFecha(rstDeclaracionAnualConsolidad, ultimoDigito);
        }
        if (registro.declaracionanualconsolidadadeiva) {
            declaracionAnualConsolidadaDeIva = obtenerFecha(rstDeclaracionAnualConsolidadImpuestosIva, ultimoDigito);
        }
        if (registro.anticipobimestral) {
            anticipoBimestral = obtenerFecha(rstAnticipoBimestral, ultimoDigito);
        }
        if (registro.tipoexogena === "exogenagrandescontribuyentes") {
            tipoExogena = obtenerFecha(exoGrandesContribuyentes, ultimoDigito);
            setTipoExogenaS("exogena grandes contribuyentes")
        } else if (registro.tipoexogena === "exogenajuridicasonaturales") {
            tipoExogena = obtenerFecha(exoJuridicaNatural, ultimosDosDigitos);
            setTipoExogenaS("exogena persona juridica y natural")
        }
        if (registro.impoconsumo) {
            impoconsumo = obtenerFecha(consumo, ultimoDigito);
        }
        if (registro.retenciondelafuente) {
            retencionEnLaFuente = obtenerFecha(retencionFuente, ultimoDigito);
        }

        return { tipoPersona, granContribuyente, responsableIva, declaracionAnualConsolidada, declaracionAnualConsolidadaDeIva, anticipoBimestral, tipoExogena, impoconsumo, retencionEnLaFuente}
    }, [registro, ultimoDigito, ultimosDosDigitos])

    return (
        <div className={styles.container} >
            <div className={styles.containerHeader}>
                <div className={styles.containerLogo}>
                    <img className={styles.imgLogo} src='/images/logo.jpeg' />
                </div>
                <h1 className={styles.title}>Mi tributo al dia</h1>
            </div>
            <div>
            <a className={styles.link} href="https://www.dian.gov.co/Calendarios/Calendario_Tributario_2022.pdf">Calendario tributario 2022</a>
            
                <ItemTable text="UVT" value="$38.004" />
                <ItemTable text="SANCIÓN MÍNIMA" value="$380.000" />
                <ItemTable text="SMMLV" value="$1.000.000" />
                <ItemTable text="Salario minimo integral" value="$13.000.000" />
                <ItemTable text="Auxilio de transporte" value="$117.172" />
                <ItemTable text="Base de retención por servicio" value="$152.000" />
                <ItemTable text="Base de retención por compras" value="$1.026.000" />
                <p className={styles.titleItem}>Ingresos brutos por declarar IVA</p>
                <ItemTable text="Bimestral" value=">$3.275.844.000" />
                <ItemTable text="Cuatrimestral" value="<$3.275.844.000" />
                <div className={styles.containerDates}>

                    <h1 className={styles.title}>FECHAS LÍMITES DE PRESENTACIÓN </h1>
                    {dates?.tipoPersona && <p>Fecha de declaracion renta <strong>{dates?.tipoPersona}</strong> </p>}
                    {dates?.granContribuyente && <p>Fecha declaracion persona gran contribuyente <strong>{dates?.granContribuyente}</strong></p>}
                    {dates?.responsableIva && <p>Fecha declaracion persona de {responsableIvaS} <strong>{dates?.responsableIva} </strong></p>}
                    {dates?.declaracionAnualConsolidada && <p>Fecha declaracion persona anual consolidada (rst)  <strong>{dates?.declaracionAnualConsolidada} </strong></p>}
                    {dates?.declaracionAnualConsolidadaDeIva && <p>Fecha declaracion persona anual consolidada de IVA (rst) <strong>{dates?.declaracionAnualConsolidadaDeIva} </strong></p>}
                    {dates?.anticipoBimestral && <p>Fecha declaracion persona anticipo bimestral (rst) <strong>{dates?.anticipoBimestral} </strong></p>}
                    {dates?.tipoExogena && <p>Fecha declaracion {tipoExogenaS} <strong>{dates?.tipoExogena} </strong></p>}
                    {dates?.impoconsumo && <p>Fecha declaracion de inpoconsumo <strong>{dates?.impoconsumo} </strong></p>}
                    {dates?.retencionEnLaFuente && <p>Fecha declaracion retencion en la fuente <strong>{dates?.retencionEnLaFuente} </strong></p>}
                </div>
                <div className={styles.containerNotification}>
                    <p>Notificar con</p>
                    <select className={styles.select} name="select">
                        <option value="1">1</option>
                        <option value="3" selected>3</option>
                        <option value="8">8</option>
                    </select>
                    <p>dias de anterioridad</p>
                </div>
                <Button text="Finalizar" handleClick={handleClickClose} />
            </div>
        </div>
    )
}
export default TemplateTributoAlDia