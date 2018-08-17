import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderField } from '../Utils/renderField'

const LoginForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form name="loginForm" className="form-validate mb-lg" onSubmit={handleSubmit}
        >
            <div className="form-group has-feedback">
                <Field name="email" component={renderField} type="text" className="form-control" />

            </div>
            <div className="form-group has-feedback">
                <Field name="password" component={renderField} type="password" className="form-control" />
            </div>
            <div className="clearfix" />
            <button type="submit" className="btn btn-primary m-1 align-self-center">Login</button>
        </form>
    )
}

export default reduxForm({
    form: 'login' // a unique identifier for this form
})(LoginForm)