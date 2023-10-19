import React, { useState } from 'react';
import Helmet from '../../components/Helmet/Helmet';
import { Formik, Form } from 'formik';
import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import CommonSection from '../../components/UI/common/CommonSection';
import { createUser } from '../../axios/axios-user';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/slices/userSlice';
import useRedirect from '../../custom-hooks/useRedirect';
import Loader from "../../components/UI/Loader/Loader"

import './signup.css';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false); // Estado para controlar el estado de carga
    useRedirect('/validation');

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('El nombre de usuario es requerido'),
        email: Yup.string().email('Ingrese un correo válido').required('El correo es requerido'),
        password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
    });

    const handleSignup = async (values, actions) => {
        try {
            setLoading(true); // Activa el estado de carga

            const user = await createUser(values.username, values.email, values.password);
            actions.resetForm();

            if (user) {
                dispatch(setCurrentUser({
                    ...user.usuario,
                }));
                toast.success('Usuario registrado');
                navigate('/validation', { state: { username: user.usuario.username } });
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false); // Desactiva el estado de carga después de completar el registro
        }
    };

    return (
        <Helmet title="Registrarse">
            <CommonSection title="Registrarse" />
            <section className="signup__section">
                <div className="form__container">
                    <h3 className="login-title">Crea tu cuenta</h3>
                    <Formik
                        initialValues={{
                            username: '',
                            email: '',
                            password: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSignup}
                    >
                        <Form className="auth__form">
                            <LoginInput name="username" type="text" placeholder="Nombre" />
                            <LoginInput name="email" type="text" placeholder="Email" />
                            <LoginInput name="password" type="password" placeholder="Password" />

                            <Submit type="button" className="auth__btn">
                                Crear cuenta
                            </Submit>
                            <p>
                                ¿Ya tienes cuenta? <Link to="/login">Login</Link>
                            </p>
                        </Form>
                    </Formik>
                </div>
                {loading && <Loader />} {/* Mostrar Loader si el estado de carga está activo */}
            </section>
        </Helmet>
    );
};

export default Signup;