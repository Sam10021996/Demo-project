import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

export function Register()
{

    const formik = useFormik({
        initialValues : {
            "UserName": "",
            "Email" :"",
            "Mobile": "",
            "City":"",
        },

        validationSchema: yup.object({
            "UserName": yup.string().required('Name Required').min(4, 'Name too short'),
            "Email": yup.string().required(),
            "Mobile": yup.string().matches(/\+91\d{10}/, "Invalid Mobile").required('Mobile Required')
        }),

        onSubmit : (values) => {
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="container-fluid" style={{height:"400px", width:"300px",border:"1px solid "}}>
            <h2><span className="bi bi-person-fill"></span>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="UserName" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Email Id</dt>
                    <dd><input type="email" onChange={formik.handleChange} name="email"/></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Mobile"/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option value="-1">Choose City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyderabaad</option>
                            <option value="Doon">Dehradun</option>
                        </select>
                    </dd>
                    <dd className="text-danger"></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
                <p>Existing User? <Link to="/signin">Signin</Link> </p>
            </form>
        </div>
    )
}