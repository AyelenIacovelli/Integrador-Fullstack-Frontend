import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Formik, Form } from "formik"
import { verifyUser } from "../../axios/axios-user"
import { setVerified } from '../../redux/slices/userSlice'
import Submit from "../../components/UI/Submit/Submit"
import LoginInput from '../../components/UI/LoginInput/LoginInput'
import Button from '../../components/UI/Button/Button'
import * as Yup from 'yup';
import Helmet from '../../components/Helmet/Helmet'
import CommonSection from '../../components/UI/common/CommonSection'
import "../Validation/validation.css"
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
    code: Yup.string()
        .required('Este campo es requerido')
});

const Validate = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)
    const [error, setError] = useState(null);

    return (
        <Helmet title="Validate">
            <CommonSection title="Verificación de Usuario" />
            {
                currentUser?.verified ?
                    (<>
                        <h1>¡Tu cuenta ya fue verificada!</h1>
                        <Button onClick={() => {
                            navigate('/')
                        }}>Volver al Home</Button>
                    </>)
                    :
                    (<div className='validation-container'>
                        <h1 className='validation-h1'>Revisa tu mail y validá tu cuenta</h1>
                        <p className='validate-p'>Recuerda que no podrás realizar compras en tanto no esté la cuenta validada</p>
                        <Formik
                            initialValues={{
                                code: ''
                            }}
                            validationSchema={validationSchema}
                            onSubmit={async values => {
                                try {
                                    // Verifica el código en la base de datos
                                    const isCodeValid = await verifyUser(currentUser.email, values.code);

                                    if (isCodeValid) {
                                        // Si el código es válido, actualiza el estado y navega a la página principal
                                        dispatch(setVerified());
                                        toast.success('Cuenta verificada correctamente');
                                        navigate('/login');
                                    } else {
                                        // Si el código no es válido, muestra un mensaje de error
                                        setError('El código ingresado no es válido');
                                        console.log(error);
                                        toast.error('El código ingresado es incorrecto')
                                    }
                                } catch (error) {
                                    // Manejo de errores de la solicitud a la base de datos
                                    console.error('Error al verificar el código:', error);
                                    setError('Error al verificar el código. Intente nuevamente más tarde.');
                                    toast.error('Error en la verificación. Vuelva a intentar más tarde')
                                }
                            }}
                        >
                            <Form className='validate-form'>
                                <LoginInput name='code' type='code' placeholder='Ingrese aquí el código de verificación' />
                                <Submit>Verificar</Submit>
                            </Form>
                        </Formik>
                    </div>)
            }
        </Helmet>
    )
}

export default Validate