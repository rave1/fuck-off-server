import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { 
    Container, 
    Title,
    TitleWrapper,
    FormWrapper,
    Button,
    Footer,
    ActionTypeTitle
} from './HomePage.styles';

export function HomePage() {
    const history = useHistory();
    const [register, setRegister] = useState(false);
    return (
        <Container>
            <TitleWrapper>
                <Title>Fuck you CHAT!</Title>
            </TitleWrapper>
            <div>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={(values) => {
                        if (register) {
                            return axios.post('http://127.0.0.1:8000/auth/register/', {
                                username: values.email,
                                password: values.password
                            }).then(() => {
                                return history.push('/join/')
                            })
                        }
                        return axios.post('http://127.0.0.1:8000/auth/login/', {
                            username: values.email,
                            password: values.password
                        }).then(() => {
                            return history.push('/join/')
                        })
                    }}
                >
                    <Form>
                        <ActionTypeTitle>
                            {register ? 'Register' : 'Login'}
                        </ActionTypeTitle>
                        <FormWrapper>
                            <Field id="email" name="email" placeholder="Email" />
                            <Field id="password" name="password" placeholder="Password" type="password" />
                            <Button type="submit">
                                {register ? 'Register' : 'Login'}
                            </Button>
                            <span className="error">
                                {register ? 'Registration failed' : 'Login failed'}
                            </span>
                        </FormWrapper>
                    </Form>
                </Formik>
                <Footer>
                    <span>
                        {register 
                            ? "Already have an account?"
                            : "Don't have an account yet?"
                        }
                    </span>
                    <Button onClick={() => register ? setRegister(false) : setRegister(true)}>
                        {register ? 'Login' : 'Register'}
                    </Button>
                </Footer>
            </div>
        </Container>
    )
}