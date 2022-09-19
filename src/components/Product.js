import React from 'react'
import { FaBloggerB, FaRegKeyboard } from "react-icons/fa"
import { MdPeopleAlt } from "react-icons/md"
import { RiImageEditFill } from "react-icons/ri"
import { FiEdit } from "react-icons/fi"
import { TbReportMedical } from "react-icons/tb"
import { Container, Row } from 'react-bootstrap'


const Product = () => {
    return (
        <section className="product"id="product">
            <Container>
                <Row>
                    <div className="section-title text-center mb-5">
                        <span>Our Product</span>
                        <h2 className='mb-4'>We Develope Amazing Products</h2>
                    </div>
                </Row>
                <Row className="product__inner">
                    <div className="col-md-4">
                        <div className="product-item">
                            <div className="icon"><MdPeopleAlt /></div>
                            <h2>Custom CMS</h2>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, totam fugiat ipsa officiis natus nulla eius consequuntur ea eligendi quibusdam?</p>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-item">
                            <div className="icon"><FaBloggerB /></div>
                            <h2>Blogging Tool</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, totam fugiat ipsa officiis natus nulla eius consequuntur ea eligendi quibusdam?</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-item">
                            <div className="icon"><RiImageEditFill /></div>
                            <h2>Photo Editor</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, totam fugiat ipsa officiis natus nulla eius consequuntur ea eligendi quibusdam?</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-item">
                            <div className="icon"><FiEdit /></div>
                            <h2>Accounting App</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, totam fugiat ipsa officiis natus nulla eius consequuntur ea eligendi quibusdam?</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-item">
                            <div className="icon"><FaRegKeyboard /></div>
                            <h2>Keyword Tool</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, totam fugiat ipsa officiis natus nulla eius consequuntur ea eligendi quibusdam?</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-item">
                            <div className="icon"><TbReportMedical /></div>
                            <h2>Social Media Tool</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, totam fugiat ipsa officiis natus nulla eius consequuntur ea eligendi quibusdam?</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Product