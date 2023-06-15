import React from 'react';
import { Link } from 'react-router-dom';



// ================== Ant Components ==================
import { Layout, Menu, Row, Col } from 'antd'



// ================== Assets ==================
import LogoSvg from '../../../assets/svg/logo';



// ================== Style ==================
import "./header.scss";


const { Header } = Layout;



const HeaderComponent = () => {
    return (
        <Header className='header-wrapper absolute w-100 bg-none' style={{ height: "auto" }}>
            <Row justify="space-around" align="middle">
                <Col >
                    <div className='color-white' style={{ margin: "1rem" }}>
                        <Link to="/home" className='cursor fs-18'>
                            <LogoSvg />
                        </Link>
                    </div>
                </Col>
                <Col xs={12} className='text-center d-block'>
                    <Menu className='bg-none text-center d-block' mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/home" className='nav-item'>
                                Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/home" className='nav-item'>
                                About
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/home" className='nav-item'>
                                Pricing
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/home" className='nav-item'>
                                Contact Us
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Col>

                <Col>
                    <Row>
                        {/* <Col>Eng</Col> */}
                        <Col>
                            <Link to="/sign-in" className='nav-item'>Login</Link>
                            <span className='color-white' style={{margin:"0 0.5rem"}}>/</span>
                            <Link to="/sign-up" className='nav-item'>Signup</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>


        </Header>
    )
}

export default HeaderComponent