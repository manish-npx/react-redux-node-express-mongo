import "../style/login.css";
import Input from "../components/Input";
import ValidationError from "../components/ValidationError";
import loginLogo from "../assets/login.svg";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getItem } from "../helpers/persistenceStorage";
import { userLogin } from "../redux/slices/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isLoading, user } = useSelector((state) => state.auth);
    const loginMsg = useSelector((state) => state.message);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = getItem('token');

    useEffect(() => {
        console.log('user', user);
        if (!!user && !!token) {   //&& redirectPath()
            console.log('test', loginMsg);
            navigate("/dashboard")
        }

    }, [user, token])

    const loginHandler = async (e) => {
        e.preventDefault();
        dispatch(userLogin({ email, password }));

    };


    return (
        <section>
            <Container id="main-container" className="d-grid h-100">
                <Row>
                    <Col md={6}>
                        <img src={loginLogo} alt="Image" className="img-fluid primary" />
                    </Col>
                    <Col md={6} className="contents">
                        <Row className="justify-content-center">
                            <Col md={8}>
                                <div className="mb-4">
                                    <h3>Sign In</h3>
                                    {console.log('loginMsg', loginMsg)}
                                    {loginMsg && <p className="text-success">{loginMsg.message}</p>}

                                </div>

                                <Form id="sign-in-form" className="text-center p-3 w-100">
                                    <ValidationError />

                                    <Form.Group className="mb-3" controlId="formGroupEmail">                                            <Input
                                        type={"email"}
                                        label={"Email"}
                                        state={email}
                                        setState={setEmail}
                                    />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Input
                                            type={"password"}
                                            label={"Password"}
                                            state={password}
                                            setState={setPassword}

                                        />
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="w-100 mt-2"
                                        type="submit"
                                        disabled={isLoading}
                                        onClick={loginHandler}
                                    >
                                        {isLoading ? "Loading..." : "Login"}
                                    </Button>
                                    <div className="d-flex mb-5 align-items-center">
                                        <span className="ml-auto mt-2">
                                            <p className="forgot-pass text-dark">Don't have any account ? <Link to={'/register'}>Signup</Link > </p>
                                        </span>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;
