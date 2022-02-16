
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { useState } from 'react'
import Button from '../reusable/Button'
import Input from '../reusable/Input'
import InputCheck from '../reusable/InputCheck'
import InputRadio from '../reusable/InputRadio'
import styles from './styles.module.css'

const TemplateRegistro = () => {

    const [isResponsableIva, setIsResponsableIva] = useState(true)
    const [isRst, setIsRst] = useState(true)
    const [isExogena, setIsExogena] = useState(true)

    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
        console.log('click aqui')
    };
    
    return (
        <div className={styles.container}>
          <div className={styles.containerHeader}>
              <div className={styles.containerLogo}>
                  <img className={styles.imgLogo} src='/images/logo.jpeg' />
              </div>
              <h1 className={styles.title}>Mi tributo al dia</h1>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.containerItem}>
                  <Input text="Nombre o razon social" type="text" register={register} name="nombre" options={{required: true}} />
              </div>
              <div className={styles.containerItem}>
                  <Input text="Nit o cedula" type="text"  register={register} name="nit" options={{required: true}} />
              </div>
              <div className={styles.containerItem}>
                  <Input text="Correo" type="text"  register={register} name="correo" options={{required: true}} />
              </div>
              <div className={styles.containerItem}>
                  <Input text="Celular" type="number"  register={register} name="celular" options={{required: true}}/>
              </div>
              <div className={styles.containerTypePerson}>
                <div className={styles.containerItem}>
                    <InputRadio text="Persona juridica" register={register} options={{required: true}} name="tipopersona" value="personaJuridica" text="Persona Juridica" />
                </div>
                <div className={styles.containerItem}>
                    <InputRadio text="Persona natural" register={register} options={{required: true}} name="tipopersona" value="personaNatural" text="Persona Natural" />
                </div>
              </div>
              <div className={styles.containerItem}>
                    <InputRadio text="Regimen responsable" register={register} options={{required: true}} name="tiporegimen" value="regimenResponsable" />
              </div>
              <div className={styles.containerItem}>
                    <InputRadio text="Gran contribuyente" register={register} options={{required: true}} name="tiporegimen" value="granContributyente" />
              </div>
              <div className={styles.containerItem}>
                    <InputRadio text="Regimen simple de tributacion" register={register} options={{required: true}} name="tiporegimen" value="rst"  />
              </div>

              <div className={styles.containerItem}>
                  <p>Obligaciones tributarias</p>
                  <div className={styles.containerItem}>
                      <InputCheck text="Declarante de renta" register={register} options={{required: true}} name="declaranterenta" />
                  </div>
                  <div className={styles.containerItem}>
                      <InputCheck text="Retencion de la fuente" register={register} options={{required: true}} name="retenciondelafuente" />
                  </div>
                  <div className={styles.containerItem}>
                      <InputCheck text="Responsable de IVA" register={register} options={{required: true}} name="responsableiva"  />
                  </div>
                  {isResponsableIva && 
                    <div>
                        <div className={styles.containerItem}>
                         <InputCheck text="Responsable de IVA bimestral" register={register} options={{required: true}} name="responsableivabimestral"  />
                        </div>
                        <div className={styles.containerItem}>
                         <InputCheck text="Responsable de IVA cuatrimestral" register={register} options={{required: true}} name="responsableivacuatrimestral"  />
                        </div>
                    </div>
                  }
                  <div className={styles.containerItem}>
                      <InputCheck text="Impoconsumo" register={register} options={{required: true}} name="impoconsumo" />
                  </div>
                  {isRst && 
                    <div>
                        <div className={styles.containerItem}>
                            {isRst ? <InputCheck text="Declaracion anual consolidada (RST)" checked register={register} options={{required: true}} name="declaracionanualconsolidada"   /> : <InputCheck text="Declaracion anual consolidada (RST)"  register={register} options={{required: true}} name="declaracionanualconsolidada"/> }
                            
                        </div>
                        <div className={styles.containerItem}>
                            {isRst ? <InputCheck text="Declaracion anual consolidada de IVA (RST)" checked register={register} options={{required: true}} name="declaracionanualconsolidadadeiva" /> : <InputCheck text="Declaracion anual consolidada de IVA (RST)" register={register} options={{required: true}} name="declaracionanualconsolidada" />}
                        </div>
                        <div className={styles.containerItem}>
                            {isRst ? <InputCheck text="Anticipo bimestral (RST)" checked register={register} options={{required: true}} name="anticipobimestral" /> : <InputCheck text="Anticipo bimestral (RST)" register={register} options={{required: true}} name="anticipobimestral"/>}
                        </div>
                    </div>
                  }
                  <div className={styles.containerItem}>
                      <InputCheck text="Exogena" register={register} options={{required: true}} name="exogena" />
                  </div>
                  {isExogena && 
                    <div>
                        <div className={styles.containerItem}>
                            <InputCheck text="grandes contribuyentes" register={register} options={{required: true}} name="grandescontribuyentes" />
                        </div>
                        <div className={styles.containerItem}>
                            <InputCheck text="Personas juridicas o naturales" register={register} options={{required: true}} name="personasjuridicasonaturales" />
                        </div>
                    </div>
                  }
              </div>
                <Button text="Registrar Datos" type="submit"/>
            </form>
        </div>
    )
}
export default TemplateRegistro