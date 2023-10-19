
import React from 'react'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import Helmet from "../../components/Helmet/Helmet"
import CommonSection from "../../components/UI/common/CommonSection"
import "./validation.css"

const Validation = () => {
    // const currentUser = useSelector(state => state.user.currentUser)
    const navigate = useNavigate()

    return (
        <Helmet title="Validation">
            <CommonSection title="Validación de cuenta" />
            <div className='validation-container'>

                <h1 className='validation-h1'>¡BIENVENIDO/A! Te llegará un mail con un código de verificación</h1>
                <div className='validation-btn-container'>
                    <Button onClick={() => {
                        navigate('/validate')
                    }}>Validar tu cuenta</Button>
                    <Button onClick={() => {
                        navigate('/')
                    }}>Validar más tarde</Button>
                </div>
            </div>
        </Helmet>

    )




}

export default Validation