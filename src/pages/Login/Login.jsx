import React from 'react'
import Helmet from "../../components/Helmet/Helmet"
import { Form, Formik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import "../Signup/signup.css"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import CommonSection from '../../components/UI/common/CommonSection'
import { loginUser } from '../../axios/axios-user'
import { useDispatch } from "react-redux"
import { setCurrentUser } from '../../redux/slices/userSlice'
import LoginInput from '../../components/UI/LoginInput/LoginInput'
// import useRedirect from '../../custom-hooks/useRedirect'
import Submit from '../../components/UI/Submit/Submit'
import * as Yup from 'yup';


const Login = () => {
    // const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();
    const dispatch = useDispatch()
    const navigate = useNavigate()



    // const currentUser = useSelector(state => state.user.current)
    // useRedirect(currentUser?.verified ? "/" : "/validation")

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Ingrese un correo válido').required('El correo es requerido'),
        password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
    });

    return (
        <Helmet title="Login">
            <CommonSection title="Iniciar sesión" />
            <section className="signup__section">

                <div className="form__container">
                    <h3 className='login-title'>Login</h3>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values) => {
                            try {
                                const user = await loginUser(values.email, values.password);
                                if (user) {
                                    dispatch(setCurrentUser({
                                        ...user.usuario,
                                        token: user.token
                                    }));
                                    toast.success('Sesión iniciada');
                                    if (user.usuario.verified) {
                                        navigate("/");
                                    } else {
                                        navigate("/validation");
                                    }
                                } else {
                                    toast.error('Error al iniciar sesión. Verifica tus credenciales.');
                                }
                            } catch (error) {
                                toast.error('Error al iniciar sesión. Verifica tus credenciales.');
                            }
                        }}
                    >
                        <Form className="auth__form">
                            <LoginInput name='email' type="text" placeholder="Email" />
                            <LoginInput name='password' type="password" placeholder="Password" />
                            <Link to="/forgot-password"></Link>

                            <Submit>
                                Ingresar
                            </Submit>

                            <p>
                                ¿Aún no tienes cuenta? <Link to="/signup">Regístrate aquí</Link>{' '}
                            </p>
                        </Form>
                    </Formik>
                </div>

            </section>
        </Helmet>
    );
};

export default Login;