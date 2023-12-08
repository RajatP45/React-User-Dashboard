import React, { FC, Fragment, useState } from 'react';
import { Button, Card, Col, InputGroup, Row ,Form} from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import Logo1 from '../../../../assets/images/brand/logo1.png';
interface Login02Props {}

const Login02: FC<Login02Props> = () => {
  document.body.classList.add("register-2", "login-page");
	const [passwordshow, setpasswordshow] = useState(false);

	return(
		<Fragment>
		<div className="page">
			<div className="page-content">
				<div className="container">
					<Row>
						<div className="col mx-auto mt-5">
							<div className="row justify-content-center">
								<Col md={7} lg={5} xl={4} className="col-md-7 col-lg-5 col-xl-4">
									<div className="text-center mb-5">
										<Link to={`${import.meta.env.BASE_URL}dashboard`}>
											<img src={Logo1} className="header-brand-img"
											alt="Azea logo"/></Link>
									</div>
									<Card>
										<Card.Body>
											<div className="text-center mb-3">
												<h1 className="mb-2">Log In</h1>
												<Link to="#">Welcome Back !</Link>
											</div>
											<Form className="mt-5">
												<InputGroup className="mb-4">
													<InputGroup.Text>
														<i className="fe fe-user"></i>
													</InputGroup.Text>
													<Form.Control type="text" className="" placeholder="Username"/>
												</InputGroup>
												<InputGroup className="input-group mb-4" onClick={()=>setpasswordshow(!passwordshow)}>
													<div className="input-group" id="Password-toggle1">
														<Link to="#" className="input-group-text">
															<i className={`zmdi ${passwordshow ? 'zmdi-eye' : 'zmdi-eye-off'} text-muted`} aria-hidden="true"></i>
														</Link>
														<Form.Control className="form-control" type={(passwordshow) ? 'text' : "password"}
															placeholder="Confirm Password"/>
													</div>
												</InputGroup>
												<Form.Group>
														<Form.Check type="checkbox" label="Remember Me" />

												</Form.Group>
												<Form.Group className="form-group text-center mb-3">
													<Link to={`${import.meta.env.BASE_URL}dashboard`} className="btn  w-100 br-7 btn-primary">Log In</Link>
												</Form.Group>
												<Form.Group className="form-group fs-13 text-center">
													<Link to={`${import.meta.env.BASE_URL}CustomPages/forgetpassword/forgetpassword02`}> Forget Password ?</Link>
												</Form.Group>
												<Form.Group className="form-group fs-14 text-center font-weight-bold">
													<Link to="#">Click Here To Backup Mail</Link>
												</Form.Group>
											</Form>
										</Card.Body>
									</Card>
									{/* <div className="text-center register-icons">
										<div className="small text-white mb-4">Login with</div>
										<Button className="btn bg-white-50  text-white-50 font-weight-semibold w-12 google me-2" variant=''
											type="button"><i className="fa fa-google"></i></Button>
										<Button
											className="btn bg-white-50  text-white-50 font-weight-semibold  w-12 facebook me-2" variant=''
											type="button"><i className="fa fa-facebook-f"></i></Button>
										<Button
											className="btn bg-white-50  text-white-50 font-weight-semibold w-12 twitter me-2" variant=''
											type="button"><i className="fa fa-twitter"></i></Button>
									</div> */}
								</Col>
							</div>
						</div>
					</Row>
				</div>
			</div>
		</div>
		</Fragment>
	)
};

export default Login02;
