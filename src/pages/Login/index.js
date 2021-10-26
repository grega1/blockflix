import React from 'react';
import LogIn from '../../assets/LogIn.svg'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Line } from '../../components/Lines'
import { Footer } from '../../components/Footer'
import { CtaContainer } from '../../components/Base/style';
import { ModalLogin } from './style'
import { GlobalStyle } from '../../global';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const initialValues = {
  email: 'aa@gmail.com',
  password: '123456'
}

const validationObj = Yup.object().shape({
  email: Yup.string().email("Must be a email").required("Required"),
  password: Yup.string().required("Required")
})

const Login = props => {
  const history = useHistory();

  const handleCheckInfo = ({ email, password }) => {
    if (email !== initialValues.email || password !== initialValues.password) {
      alert('Deu ruim! Usuário ou senha inválido(s)');


    } else {
      history.push('/filmes')
    }
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleCheckInfo(values)}
      validationSchema={validationObj}
    >
      {
        (formik) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
          } = formik;



          return (
            <>
              <Header />
              <Line />
              <CtaContainer>
                <ModalLogin>
                  <Form>
                    <h2>LOGIN</h2>

                    <div className="inputs" style={{ display: 'flex', flexDirection: 'column' }}>
                      <label for="email">E-mail: </label>
                      <input type="email" name="email" id="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.email && touched.email
                            ? "text-input error"
                            : "text-input"
                        } />
                      {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                      )}
                      <label for="password">Senha: </label>
                      <input type="password" name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.password && touched.password
                            ? "text-input error"
                            : "text-input"
                        } />
                      {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                      )}
                    </div>
                    <button type="submit" disabled={errors.password || errors.email || !values.email || !values.password}>
                      <img src={LogIn} alt="login" />Entrar
                    </button>

                  </Form>
                </ModalLogin>
              </CtaContainer>
              <Line />
              <Footer />
              <GlobalStyle />
            </>)
        }
      }
    </Formik>
  );
}
export { Login }