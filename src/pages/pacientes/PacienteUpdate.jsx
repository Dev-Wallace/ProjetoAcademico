import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { FaTooth, FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PacienteService from '../../services/clinica/PacienteService';

const PacienteUpdate = () => {

    const [pacientes, setPacientes] = useState([])

    useEffect(() => {
        setPacientes(PacienteService.getAll())
    }, [])

    return (
        <div>
            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Atualizar Pacientes
                <Link to={'/paciente/create'} className='btn btn-info text-light mb-3 mt-3 ms-5'>
                    <FaPlusCircle /> Adicionar Paciente
                </Link>
            </h1>

            <Row>
                {pacientes.map((item, i) => (
                    <Col key={i} md={3} className='mb-3'>
                        <Card className='h-100 w-75'>
                            <Card.Header className='bg-info text-light'> <strong>Nome do Paciente:</strong> {item.nome} </Card.Header>
                            <Card.Body bg='light' className='text-info'>
                                <Card.Text> <strong>CPF do Paciente: </strong> {item.cpf} </Card.Text>
                                <Card.Text> <strong>Telefone do Paciente: </strong> {item.telefone} </Card.Text>
                                <Card.Text> <strong>Já foi ao Dentista antes: </strong> {item.historico} </Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-info'>
                                <Link to={'/paciente/create/' + i} className='btn btn-light text-info'> <FaPencilAlt /> Editar Paciente </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default PacienteUpdate