import { ErrorMessage, Field } from "formik";


const LoginInput = ({ type, placeholder, name }) => {
    return (

        <Field name={name}>

            {
                ({ field, form: { errors, touched } }) => (
                    <div className="form__group">

                        <input
                            className={`login-input ${errors[field.name] && touched[field.name] ? 'is-error' : ''}`}
                            type={type}
                            placeholder={placeholder}
                            {...field}
                        />

                        <ErrorMessage name={field.name}>
                            {message => <p className="error-message">{message}</p>}
                        </ErrorMessage>

                    </div>
                )
            }


        </Field>


    );
};

export default LoginInput;