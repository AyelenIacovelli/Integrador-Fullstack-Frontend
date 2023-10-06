import React from 'react'
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
        .test('codigo-valido', 'El código ingresado no es válido', async function (value) {
            // Aquí comparamos el valor ingresado con el código almacenado en el usuario
            const currentUser = useSelector(state => state.user.currentUser); // Obtenemos el usuario desde el estado o de donde lo tengas
            const codigoBackend = currentUser ? currentUser.code : ''; // Obtenemos el código del usuario

            return value === codigoBackend;
        }),
});

const Validate = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)

    // useEffect(() => {
    //     if (!currentUser) {
    //         navigate('/login')
    //     } else if (currentUser.verified) {
    //         navigate('/')
    //     } else if (!currentUser.verified) {
    //         navigate('/validation')
    //     }
    // }, [currentUser, navigate])




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
                                await verifyUser(currentUser.email, values.code)
                                dispatch(setVerified())
                                navigate('/')
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