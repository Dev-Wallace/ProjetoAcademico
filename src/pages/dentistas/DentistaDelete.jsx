import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTooth, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import DentistaService from '../../services/clinica/DentistaService';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';


const DentistaDelete = () => {

    const [dentistas, setDentistas] = useState([])

    useEffect(() => {
        setDentistas(DentistaService.getAll())
    }, [])

    function apague(id) {
        Swal.fire({
            icon: 'success',
            title: 'Apagado com sucesso!',
            text: 'O registro foi apagado com sucesso',
        })
        DentistaService.delete(id)
        setDentistas(DentistaService.getAll())
        // Swal.fire({
        //     title: 'Deseja realmente apagar o registro?',
        //     text: "Lembre que isto é um processo irreversível!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Sim apagar!',
        //     cancelButtonText: 'Cancelar'
        // }).then((id) => {
        //     if (id.isConfirmed) {
        //         Swal.fire(
        //             'Apagado!',
        //             'O registro foi apagado com sucesso.',
        //             'success'
        //         )
        //         DentistaService.delete(id)
        //         setDentistas(DentistaService.getAll())

        //     }
        // })
    }

    return (
        <div>
            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Apagar Dentistas
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
                                <Button variant='light' className='text-info' onClick={() => apague(i)}> <FaTrashAlt /> Apagar Dentista </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default DentistaDelete