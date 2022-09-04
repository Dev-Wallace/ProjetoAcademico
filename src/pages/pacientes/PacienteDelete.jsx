import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaTooth, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import PacienteService from '../../services/clinica/PacienteService';

const PacienteDelete = () => {

    const [pacientes, setPacientes] = useState([])

    useEffect(() => {
        setPacientes(PacienteService.getAll())
    }, [])

    function apague(id) {
        Swal.fire({
            icon: 'success',
            title: 'Apagado com sucesso!',
            text: 'O registro foi apagado com sucesso',
        })
        PacienteService.delete(id)
        setPacientes(PacienteService.getAll())

        // Swal.fire({
        //     title: 'Deseja realmente apagar o registro?',
        //     text: "Lembre que isto é um processo irreversível!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Sim apagar!',
        //     cancelButtonText: 'Cancelar'
        // }).then(id => {
        //     if (id.isConfirmed) {
        //         Swal.fire(
        //             'Apagado!',
        //             'O registro foi apagado com sucesso.',
        //             'success'
        //         )
        //         PacienteService.delete(id)
        //         setPacientes(PacienteService.getAll())

        //     }
        // })
    }

    return (
        <div>
            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Apagar Pacientes
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
                                <Button variant='light' className='text-info' onClick={() => apague(i)}> <FaTrashAlt /> Apagar Paciente</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default PacienteDelete