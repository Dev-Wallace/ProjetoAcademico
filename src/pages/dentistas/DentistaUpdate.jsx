import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTooth, FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import DentistaService from '../../services/clinica/DentistaService';
import { Card, Col, Row } from 'react-bootstrap';


const DentistaUpdate = () => {

    const [dentistas, setDentistas] = useState([])

    useEffect(() => {
        setDentistas(DentistaService.getAll())
    }, [])

    return (
        <div>
            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Atualizar Dentistas
                <Link to={'/dentista/create'} className='btn btn-info text-light mb-3 mt-3 ms-5'>
                    <FaPlusCircle /> Adicionar Dentista
                </Link>
            </h1>

            <Row>

                {dentistas.map((item, i) => (
                    <Col key={i} md={3} className='mb-3'>
                        <Card className='h-100 w-75'>
                            <Card.Header className='bg-info text-light'> <strong>Nome do Dentista: </strong> {item.nome}</Card.Header>
                            <Card.Body bg='light' className='text-info'>
                                <Card.Text> <strong>CPF do Dentista: </strong>{item.cpf}</Card.Text>
                                <Card.Text> <strong>Inscrição do Dentista: </strong>{item.inscricao}</Card.Text>
                                <Card.Text> <strong>Especialiade do Dentista: </strong>{item.tipo}</Card.Text>
                                <Card.Text> <strong>Telefone do Dentista: </strong>{item.telefone}</Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-info'>
                                <Link to={'/dentista/create/' + i} className='btn btn-light text-info'> <FaPencilAlt /> Editar Dentista </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default DentistaUpdate