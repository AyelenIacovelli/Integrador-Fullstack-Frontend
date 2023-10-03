import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'

const Validation = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const navigate = useNavigate()

    return (
        <div className='validation-container'>
            {
                currentUser?.verified ? (
                    <h1>Bienvenido usuario verificado</h1>
                ) : (
                    <>
                        <h1>Tienes que validar tu cuenta</h1>
                        <Button onClick={() => {
                            navigate('/validate')
                        }}>ir a Validar Usuario</Button>
                    </>
                )
            }
        </div>
    )
}

export default Validation