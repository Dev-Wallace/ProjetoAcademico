import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { FaTooth, FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ConsultaService from '../../services/clinica/ConsultaService';


const ConsultaUpdate = () => {

    const [consultas, setConsultas] = useState([])

    useEffect(() => {
        setConsultas(ConsultaService.getAll())
    }, [])

    return (
        <div>
            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Editar Consultas
                <Link to={'/consulta/create'} className='btn btn-info text-light mb-3 mt-3 ms-5'>
                    <FaPlusCircle /> Nova Consulta
                </Link>
            </h1>


            <Row>

                {consultas.map((item, i) => (
                    <Col key={i} md={3} className='mb-3'>
                        <Card className='h-100'>
                            <Card.Header className='bg-info text-light'>Consulta no dia: <strong>{item.data}</strong> </Card.Header>
                            <Card.Body bg='light' className='text-info'>
                                <Card.Title> <strong>Paciente: </strong> {item.nomePaciente} </Card.Title>
                                <Card.Text> <strong>Procedimento: </strong>{item.procedimento}</Card.Text>
                                <Card.Text> <strong>Dentista: </strong>{item.nomeDentista}</Card.Text>
                                <Card.Text> <strong>Sala: </strong>{item.sala}</Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-info'>
                                <Link className='btn btn-light text-info' to={'/consulta/create/' + i}> <FaPencilAlt /> Editar consulta</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}


            </Row>

        </div>
    )
}

export default ConsultaUpdate