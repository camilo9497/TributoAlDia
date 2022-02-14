
import Link from 'next/link'
import { useState } from 'react'
import Button from '../reusable/Button'
import Input from '../reusable/Input'
import InputCheck from '../reusable/InputCheck'
import InputRadio from '../reusable/InputRadio'
import styles from './styles.module.css'

const TemplateRegistro = () => {

    const [isResponsableIva, setIsResponsableIva] = useState(false)
    const [isRst, setIsRst] = useState(true)
    const [isExogena, setIsExogena] = useState(false)
    
    return (
        <div className={styles.container}>
          <div className={styles.containerHeader}>
              <div className={styles.containerLogo}>
                  <img className={styles.imgLogo} src='/images/logo.jpeg' />
              </div>
              <h1 className={styles.title}>Mi tributo al dia</h1>
          </div>
          <form>
              <div className={styles.containerItem}>
                  <Input text="Nombre o razon social" type="text" />
              </div>
              <div className={styles.containerItem}>
                  <Input text="Nit o cedula" type="text" />
              </div>
              <div className={styles.containerItem}>
                  <Input text="Correo" type="text" />
              </div>
              <div className={styles.containerItem}>
                  <Input text="Celular" type="number" />
              </div>
              <div className={styles.containerTypePerson}>
                <div className={styles.containerItem}>
                    <InputRadio text="Persona juridica" name="tipopersona" value="personaJuridica" text="Persona Juridica" />
                </div>
                <div className={styles.containerItem}>
                    <InputRadio text="Persona natural" name="tipopersona" value="personaNatural" text="Persona Natural" />
                </div>
              </div>
              <div className={styles.containerItem}>
                    <InputRadio text="Regimen responsable" name="tiporegimen" value="regimenResponsable" />
              </div>
              <div className={styles.containerItem}>
                    <InputRadio text="Gran contribuyente" name="tiporegimen" value="granContributyente" />
              </div>
              <div className={styles.containerItem}>
                    <InputRadio text="Regimen simple de tributacion" name="tiporegimen" value="rst"  />
              </div>

              <div className={styles.containerItem}>
                  <p>Obligaciones tributarias</p>
                  <div className={styles.containerItem}>
                      <InputCheck text="Declarante de renta" />
                  </div>
                  <div className={styles.containerItem}>
                      <InputCheck text="Retencion de la fuente" />
                  </div>
                  <div className={styles.containerItem}>
                      <InputCheck text="Responsable de IVA" />
                  </div>
                  {isResponsableIva && 
                    <div>
                        <div className={styles.containerItem}>
                         <InputCheck text="Responsable de IVA bimestral" />
                        </div>
                        <div className={styles.containerItem}>
                         <InputCheck text="Responsable de IVA cuatrimestral" />
                        </div>
                    </div>
                  }
                  <div className={styles.containerItem}>
                      <InputCheck text="Impoconsumo" />
                  </div>
                  {isRst && 
                    <div>
                        <div className={styles.containerItem}>
                            {isRst ? <InputCheck text="Declaracion anual consolidada (RST)" checked /> : <InputCheck text="Declaracion anual consolidada (RST)" checked /> }
                            
                        </div>
                        <div className={styles.containerItem}>
                            {isRst ? <InputCheck text="Declaracion anual consolidada de IVA (RST)" checked /> : <InputCheck text="Declaracion anual consolidada de IVA (RST)" />}
                        </div>
                        <div className={styles.containerItem}>
                            {isRst ? <InputCheck text="Anticipo bimestral (RST)" checked /> : <InputCheck text="Anticipo bimestral (RST)" />}
                        </div>
                    </div>
                  }
                  <div className={styles.containerItem}>
                      <InputCheck text="Exogena" />
                  </div>
                  {isExogena && 
                    <div>
                        <div className={styles.containerItem}>
                            <InputCheck text="grandes contribuyentes" />
                        </div>
                        <div className={styles.containerItem}>
                            <InputCheck text="Personas juridicas o naturales" />
                        </div>
                    </div>
                  }
              </div>
            <Link href="/">
                <Button text="Registrar Datos" />
            </Link>
          </form>
        </div>
    )
}
export default TemplateRegistro