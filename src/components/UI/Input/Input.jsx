import React from 'react';

import { Field } from 'formik';
import "./input.css"

const Input = ({ children, htmlFor, type, id, placeholder, name }) => {
    return (

        <Field name={name}>
            {
                ({ field, form: { errors, touched } }) => (

                    <div className={`input-box ${errors[field.name] && touched[field.name] ? 'error' : ''}`}>
                        <label className='input-label' htmlFor={htmlFor}>{children}</label>
                        <input
                            type={type}
                            id={id}
                            placeholder={placeholder}
                            {...field}
                        />
                        {errors[field.name] && touched[field.name] && (
                            <p className='error-msg'>{errors[field.name]}</p>
                        )}
                    </div>

                )
            }
        </Field>


    );
};

export default Input;