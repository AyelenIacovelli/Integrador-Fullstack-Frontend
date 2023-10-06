import React from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Formik, Form } from "formik"
import { verifyUser } from "../../axios/axios-user"
import { setVerified } from '../../redux/slices/userSlice'
import Submit from "../../components/UI/Submit/Submit"
import LoginInput from '../../components/UI/LoginInput/LoginInput'

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
        <div className='validate-container'>
            <h1>Valida tu cuenta</h1>
            <Formik
                initialValues={{
                    code: ''
                }}
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
        </div>
    )
}

export default Validate