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

const validationSchema = Yup.object().shape({
    code: Yup.string()
        .required('Este campo es requerido')
});

const Validate = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     if (!currentUser) {
    //         navigate('/login')
    //     } else if (currentUser.verified) {
    //         navigate('/')
    //     } else if (!currentUser.verified) {
    //         navigate('/validation')
    //     }
    // }, [currentUser, navigate]

    return (
        <>
            {
                currentUser?.verified ?
                    (<>
                        <h1>¡Tu cuenta ya fue verificada!</h1>
                        <Button onClick={() => {
                            navigate('/')
                        }}>Volver al Home</Button>
                    </>)
                    :
                    (<div className='validate-container'>
                        <h1>Valida tu cuenta</h1>
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
                                        navigate('/');
                                    } else {
                                        // Si el código no es válido, muestra un mensaje de error
                                        setError('El código ingresado no es válido');
                                    }
                                } catch (error) {
                                    // Manejo de errores de la solicitud a la base de datos
                                    console.error('Error al verificar el código:', error);
                                    setError('Error al verificar el código. Intente nuevamente más tarde.');
                                }
                            }}
                        >
                            <Form>
                                <LoginInput name='code' type='code' placeholder='Ingrese su código' />
                                <Submit>Validar</Submit>
                            </Form>

                        </Formik>
                    </div>)
            }
        </>

    )
}

export default Validate