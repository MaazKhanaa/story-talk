import React from 'react';
import { NavLink } from 'react-router-dom';



// ================== Ant Components ==================
import { Layout, Menu, Row, Col } from 'antd'



// ================== Assets ==================
import LogoSvg from '../../assets/svg/logo';



// ================== Style ==================
import "./header.scss";


const { Header } = Layout;



const HeaderComponent = () => {
    return (
        <Header className='header-wrapper absolute w-100 bg-none' style={{ height: "auto" }}>
            <Row justify="space-around" align="middle">
                <Col >
                    <div className='color-white' style={{ margin: "1rem" }}>
                        <NavLink to="/home" className='cursor fs-18'>
                            <LogoSvg />
                        </NavLink>
                    </div>
                </Col>

                <NavLink to="/home" className='nav-item'>
                    Home
                </NavLink>

                <NavLink to="/about" className='nav-item'>
                    About
                </NavLink>

                <NavLink to="/pricing" className='nav-item'>
                    Pricing
                </NavLink>

                {/* <Col xs={12} className='text-center d-block'>
                    <Menu className='bg-none text-center d-block' mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <NavLink to="/home" className='nav-item'>
                                Home
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/about" className='nav-item'>
                                About
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to="/pricing" className='nav-item'>
                                Pricing
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <NavLink to="/contact-us" className='nav-item'>
                                Contact Us
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                </Col> */}

                <Col>
                    <Row>
                        {/* <Col>Eng</Col> */}
                        <Col>
                            <NavLink to="/sign-in" className='nav-item'>Login</NavLink>
                            <span className='color-white' style={{ margin: "0 0.5rem" }}>/</span>
                            <NavLink to="/sign-up" className='nav-item'>Signup</NavLink>
                        </Col>
                    </Row>
                </Col>
            </Row>


        </Header>
    )
}

export default HeaderComponent