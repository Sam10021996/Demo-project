import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

export function Signin()
{

    const formik = useFormik({
        initialValues : {
            "UserName": "",
            "Password":"",
        },

        validationSchema: yup.object({
            "UserName": yup.string().required('Name Required').min(4, 'Name too short'),
            "Password": yup.string().required(),
        }),

        onSubmit : (values) => {
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="container-fluid" style={{height:"350px", width:"300px",border:"1px solid "}}>
            <h2>Signin</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="UserName" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="password"/></dd>
                    <dd className="text-danger">{formik.errors.Password}</dd>
                </dl>
                <button className="btn btn-primary">Sign in</button>
                <div>
                New User? <Link to="/signup">Register</Link>
                </div>
            </form>
        </div>
    )
}