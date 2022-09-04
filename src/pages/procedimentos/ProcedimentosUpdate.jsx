import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { FaTooth, FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ProcedimentoService from '../../services/clinica/ProcedimentoService';


const ProcedimentosUpdate = () => {

    const [procedimentos, setProcedimentos] = useState([])

    useEffect(() => {
        setProcedimentos(ProcedimentoService.getAll())
    }, [])

    return (
        <div>
            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Editar Procedimentos
                <Link to={'/procedimentos/create'} className='btn btn-info text-light mb-3 mt-3 ms-5'>
                    <FaPlusCircle /> Adicionar Procedimento
                </Link>
            </h1>

            <Row>
                {procedimentos.map((item, i) => (
                    <Col key={i} md={3} className='mb-3'>
                        <Card className='h-100 w-75'>
                            <Card.Header className='bg-info text-light'> <strong>Nome do Procedimento: </strong> {item.nome}</Card.Header>
                            <Card.Body bg='light' className='text-info'>
                                <Card.Text> <strong>Tipo do Procedimento: </strong>{item.tipo}</Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-info'>
                                <Link to={'/procedimentos/create/' + i} className='btn btn-light text-info'> <FaPencilAlt /> Editar Procedimento </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ProcedimentosUpdate