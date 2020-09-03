import React from "react";
import Element from "../../components/hoc/Element";
import {Field} from "redux-form";

export const Textarea = Element("textarea");
export const Input = Element("input");

// export const Textarea = ({input, meta, ...props}) => {
//
//     const hasError = meta.touched && meta.error
//
//     return (
//         <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
//             <div>
//                 <textarea {...input} {...props}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

// export const Input = ({input, meta, ...props}) => {
//
//     const hasError = meta.touched && meta.error
//
//     return (
//         <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

export const CreateField = (component, name, placeholder = '',type = '', validate = '', text = '') => {
    return (
        <div>
                <Field component={component}
                       name={name}
                       placeholder={placeholder}
                       type={type}
                       validate={validate}
                />{text}
            </div>
    )
}