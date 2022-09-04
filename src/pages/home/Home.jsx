import React from 'react'
import { Card, Carousel, Col, Row, } from 'react-bootstrap'
import { FaTooth, FaInfoCircle, FaCheckCircle, FaEye, FaGrinAlt } from "react-icons/fa";

const Home = () => {
    return (
        <div className='mt-5'>

            <h1 className='text-center text-info'> <FaTooth /> Bem Vindo ao Dentinho</h1>

            <Row>
                <Col md={3}>
                    <Card border="info" className='mb-3 ' >
                        <Card.Header className='bg-info text-light'> <strong>< FaInfoCircle className='me-1 mb-1' />Sobre Nós: </strong> </Card.Header>
                        <Card.Body className='text-info fw-bolder'>
                            <Card.Text>
                                Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o julgamento imparcial das eventualidades faz parte de um processo de gerenciamento dos conhecimentos estratégicos para atingir a excelência.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="info" className='mb-3 ' >
                        <Card.Header className='bg-info text-light'> <strong><FaCheckCircle className='me-1 mb-1' />Missão: </strong> </Card.Header>
                        <Card.Body className='text-info fw-bolder'>
                            <Card.Text>
                                Podemos definir a missão como a razão de ser de uma empresa, o propósito pelo qual trabalham e se esforçam os seus sócios e colaboradores. A missão deve ser a carteira de identidade da organização, deve esclarecer qual o seu negócio, ser concisa e objetiva.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}></Col>
                <Col md={3}></Col>

                <Col md={3}>
                    <Card border="info" className='mb-3' >
                        <Card.Header className='bg-info text-light'> <strong> <FaEye /> Visão: </strong></Card.Header>
                        <Card.Body className='text-info fw-bolder'>
                            <Card.Text >
                                É uma visão geral do negócio. Descreve uma estrutura de metas para a organização Ilustra problemas que precisam ser solucionados para atingir tais metas. Ilustra a interação entre os processos e recursos para atingir a meta de cada processo.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="info" className='mb-3' >
                        <Card.Header className='bg-info text-light'>  <strong> <FaGrinAlt />Valores: </strong></Card.Header>
                        <Card.Body className='text-info fw-bolder'>
                            <Card.Text >
                                Valores são o conjunto de características de uma determinada pessoa ou organização que determinam a forma como estas se comportam e interagem com outros indivíduos e com o meio ambiente.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={9}>
                    <Carousel indicators={false} controls={false} fade className="ms-5 position-absolute top-50 start-50 translate-middle">
                        <Carousel.Item interval={800} >
                            <img
                                className="ms-4 w-75 h-75"
                                src="https://www.trt4.jus.br/portais/media-noticia/236715/28---4%C2%AA-Turma-do-TRT-RS-reconhece-v%C3%ADnculo-de-emprego-entre-dentista-e-cl%C3%ADnica.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item interval={800}>
                            <img
                                className="ms-4 w-75 h-75"
                                src="https://home.odontosystem.com.br/wp-content/uploads/2018/11/odonto_system_acompanhamento_dentista.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item interval={800}>
                            <img
                                className="ms-4 w-75 h-75"
                                src="https://sorria.dentalprev.com.br/wp-content/uploads/2015/06/Com-que-frequ%C3%AAncia-devo-visitar-o-dentista-1.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
    )
}

export default Home