import React from 'react'
import Header from '../header'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './style.css'
const Layout = (props) => {

    return (
        <>
            <Header />
            {
                props.sidebar ?
                    <Container fluid>
                        <Row>
                            <Col md={2} className="sidebar">
                                <ul>
                                    <li><NavLink exact to={"/"} >Home</NavLink></li>
                                    <li><NavLink to={"/category"} >Category</NavLink></li>
                                    <li><NavLink to={"/products"} >Product</NavLink></li>
                                    <li><NavLink to={"/orders"} >Orders</NavLink></li>
                                </ul>
                            </Col>
                            <Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px' }}>
                                {props.children}
                            </Col>
                        </Row>
                    </Container>
                    :
                    props.children
            }


        </>
    )

}
export default Layout