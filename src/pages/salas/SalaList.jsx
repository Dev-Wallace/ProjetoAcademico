import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { FaTooth, FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SalaService from '../../services/clinica/SalaService';


const SalaList = () => {

    const [salas, setSalas] = useState([])

    useEffect(() => {
        setSalas(SalaService.getAll())
    }, [])

    return (
        <div>
            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Listagem das Salas
                <Link to={'/sala/create'} className='btn btn-info text-light mb-3 mt-3 ms-5'>
                    <FaPlusCircle /> Nova Sala
                </Link>
            </h1>

            <Row>
                {salas.map((item, i) => (
                    <Col key={i} md={3} className='mb-3'>
                        <Card className='h-100'>
                            <Card.Header className='bg-info text-light' > <strong>Nome da Sala: </strong> {item.nomeSala} </Card.Header>
                            <Card.Body bg='light' className='text-info'>
                                <Card.Text> <strong>Tipo da Sala: </strong> {item.tipoSala} </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>
        </div>
    )
}

export default SalaList