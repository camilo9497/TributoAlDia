
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useState } from 'react'
import Button from '../reusable/Button'
import Input from '../reusable/Input'
import InputCheck from '../reusable/InputCheck'
import InputRadio from '../reusable/InputRadio'
import styles from './styles.module.css'

const TemplateRegistro = () => {
    const [data, setData] = useState();
    const { register, handleSubmit, watch,  formState: { errors }} = useForm();
    const [tiporegimen, responsableiva, exogena] = watch(["tiporegimen", "responsableiva", "exogena" ]);

    const router = useRouter();
    const onSubmit = (data) => {
        setData(data)
        localStorage.setItem('data', JSON.stringify(data))
        router.push('/')
    };

    const onError = (data) => {
        console.log('error', data);
    }
    console.log('aqui estan las respuestas', data);

    return (
        <div className={styles.container}>
            <div className={styles.containerHeader}>
                <div className={styles.containerLogo}>
                    <img className={styles.imgLogo} src='/images/logo.jpeg' />
                </div>
                <h1 className={styles.title}>Mi tributo al dia</h1>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
                <div className={styles.containerItem}>
                    <Input placeholder="Crea el usuario para ingresar" text="Usuario" type="text" register={register} name="user" options={{ required: "Campo requerido" }} error={errors.user} />
                </div>
                <div className={styles.containerItem}>
                    <Input placeholder="Crea la contraseña para ingresar" text="Contraseña" type="password" register={register} name="password" options={{ required: "Campo requerido" }} error={errors.password} />
                </div>
                <div className={styles.containerItem}>
                    <Input text="Nombre o razon social" type="text" register={register} name="nombre" options={{ required: "Campo requerido" }} error={errors.nombre} />
                </div>
                <div className={styles.containerItem}>
                    <Input text="Nit o cedula" type="number" register={register} name="nit" options={{ required:  "Campo requerido" }} error={errors.nit}/>
                </div>
                <div className={styles.containerItem}>
                    <Input text="Correo" type="text" register={register} name="correo" options={{ required:  "Campo requerido" }} error={errors.correo}/>
                </div>
                <div className={styles.containerItem}>
                    <Input text="Celular" type="number" register={register} name="celular" options={{ required:  "Campo requerido" }} error={errors.celular}/>
                </div>
                <div className={styles.containerTypePerson}>
                    <div className={styles.containerItem}>
                        <InputRadio text="Persona juridica" register={register} options={{ required: "Campo requerido" }} name="tipopersona" value="personaJuridica" text="Persona Juridica"  error={errors.tipopersona} />
                    </div>
                    <div className={styles.containerItem}>
                        <InputRadio text="Persona natural" register={register} options={{ required: "Campo requerido"}} name="tipopersona" value="personaNatural" text="Persona Natural" error={errors.tipopersona} />
                    </div>
                </div>
                <div className={styles.containerItem}>
                    <InputRadio text="Regimen responsable" register={register} options={{ required: "Campo requerido" }} name="tiporegimen" value="regimenResponsable" error={errors.tiporegimen}  />
                </div>
                <div className={styles.containerItem}>
                    <InputRadio text="Gran contribuyente" register={register} options={{ required: "Campo requerido" }} name="tiporegimen" value="granContributyente" error={errors.tiporegimen} />
                </div>
                <div className={styles.containerItem}>
                    <InputRadio text="Regimen simple de tributacion" register={register} options={{ required: "Campo requerido" }} name="tiporegimen" value="rst" error={errors.tiporegimen} />
                </div>

                <div className={styles.containerItem}>
                    <p>Obligaciones tributarias</p>
                    <div className={styles.containerItem}>
                        <InputCheck text="Declarante de renta" register={register} options={{ required: false }} name="declaranterenta" />
                    </div>
                    <div className={styles.containerItem}>
                        <InputCheck text="Retencion de la fuente" register={register} options={{ required: false }} name="retenciondelafuente" />
                    </div>
                    <div className={styles.containerItem}>
                        <InputCheck text="Responsable de IVA" register={register} options={{ required: false }} name="responsableiva" />
                    </div>
                    {responsableiva &&
                        <div className={styles.containerGroup}>
                            <div className={styles.containerItem}>
                                {/* <InputCheck text="Responsable de IVA bimestral" register={register} options={{ required: false }} name="responsableivabimestral" /> */}
                                <InputRadio text="Responsable de IVA bimestral" register={register} options={{ required: "Campo requerido" }} name="responsableiva" value="responsableivabimestral" error={errors.responsableiva} />

                            </div>
                            <div className={styles.containerItem}>
                                {/* <InputCheck text="Responsable de IVA cuatrimestral" register={register} options={{ required: false }} name="responsableivacuatrimestral" /> */}
                                <InputRadio text="Responsable de IVA cuatrimestra" register={register} options={{ required: "Campo requerido" }} name="responsableiva" value="responsableivacuatrimestral" error={errors.responsableiva} />

                            </div>
                        </div>
                    }
                    <div className={styles.containerItem}>
                        <InputCheck text="Impoconsumo" register={register} options={{ required: false }} name="impoconsumo" />
                    </div>
                    {tiporegimen === "rst" &&
                        <div>
                            <div className={styles.containerItem}>
                                <InputCheck text="Declaracion anual consolidada (RST)" checked register={register} options={{ required: false }} name="declaracionanualconsolidada" />

                            </div>
                            <div className={styles.containerItem}>
                                <InputCheck text="Declaracion anual consolidada de IVA (RST)" checked register={register} options={{ required: false }} name="declaracionanualconsolidadadeiva" />
                            </div>
                            <div className={styles.containerItem}>
                                <InputCheck text="Anticipo bimestral (RST)" checked register={register} options={{ required: false }} name="anticipobimestral" />
                            </div>
                        </div>
                    }
                    <div className={styles.containerItem}>
                        <InputCheck text="Exogena" register={register} options={{ required: false }} name="exogena" />
                    </div>
                    {exogena &&
                        <div className={styles.containerGroup}>
                            <div className={styles.containerItem}>
                                <InputCheck text=" Exogena grandes contribuyentes" register={register} options={{ required: false }} name="grandescontribuyentes" />
                            </div>
                            <div className={styles.containerItem}>
                                <InputCheck text="Exogena Personas juridicas o naturales" register={register} options={{ required: false }} name="personasjuridicasonaturales" />
                            </div>
                        </div>
                    }
                </div>
                <Button text="Registrar Datos" type="submit" />
            </form>
        </div>
    )
}
export default TemplateRegistro