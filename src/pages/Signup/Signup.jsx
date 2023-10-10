import { Formik, Form } from 'formik';

import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import * as Yup from 'yup';
import CommonSection from '../../components/UI/common/CommonSection';
import Helmet from '../../components/Helmet/Helmet';

import { createUser } from "../../axios/axios-user";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/slices/userSlice";
import useRedirect from "../../custom-hooks/useRedirect";

import "./signup.css"

const Signup = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate()
    // const currentUser = useSelector(state => state.user.currentUser)
    useRedirect("/validation")

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('El nombre de usuario es requerido'),
        email: Yup.string().email('Ingrese un correo válido').required('El correo es requerido'),
        password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
    });


    return (
        <Helmet title="Registrarse">
            <CommonSection title="Registrarse" />
            <section className="signup__section">
                <div className="form__container">
                    <h3 className='login-title'>Crea tu cuenta</h3>
                    <Formik
                        initialValues={{
                            username: '',
                            email: '',
                            password: '',
                            // file: null
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, actions) => {
                            try {
                                const user = await createUser(values.username, values.email, values.password);
                                actions.resetForm();
                                if (user) {
                                    dispatch(setCurrentUser({
                                        ...user.usuario,
                                    }));
                                    toast.success('Usuario registrado');
                                }
                            } catch (error) {
                                toast.error(error.message);
                            }
                        }}
                    >
                        <Form className="auth__form">
                            <LoginInput name='username' type="text" placeholder="Nombre" />
                            <LoginInput name='email' type="text" placeholder="Email" />
                            <LoginInput name='password' type="password" placeholder="Password" />



                            <Submit type="button" className="auth__btn">
                                Crear cuenta
                            </Submit>
                            <p>
                                ¿Ya tienes cuenta? <Link to="/login">Login</Link>
                            </p>
                        </Form>
                    </Formik>
                </div>
            </section>
        </Helmet>
    );
};

export default Signup;