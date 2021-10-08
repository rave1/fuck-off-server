import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { PageContainer } from '../Pages.styles';
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
        <PageContainer>
            <Container>
                <TitleWrapper>
                    <Title>Fuck you CHAT!</Title>
                </TitleWrapper>
                <div>
                    <Formik
                        initialValues={{
                            email: '',
                            password1: '',
                            password2: ''
                        }}
                        onSubmit={(values) => {
                            if (register) {
                                return axios.post('http://127.0.0.1:8000/auth/register/', {
                                    username: values.email,
                                    email: values.email,
                                    password1: values.password1,
                                    password2: values.password2
                                }).then(() => {
                                    return history.push('/dashboard/')
                                })
                            }
                            return axios.post('http://127.0.0.1:8000/auth/login/', {
                                username: values.email,
                                password: values.password1
                            }).then(() => {
                                return history.push('/dashboard/')
                            })
                        }}
                    >
                        <Form>
                            <ActionTypeTitle>
                                {register ? 'Register' : 'Login'}
                            </ActionTypeTitle>
                            <FormWrapper>
                                <Field id="email" name="email" placeholder="Email" />
                                <Field id="password1" name="password1" placeholder="Password" type="password" />
                                {register &&
                                    <Field id="password2" name="password2" placeholder="Password" type="password" />
                                }
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
        </PageContainer>
    )
}
