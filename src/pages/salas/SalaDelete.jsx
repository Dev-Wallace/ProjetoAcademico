import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaTooth, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SalaService from '../../services/clinica/SalaService';


const SalaDelete = () => {

    const [salas, setSalas] = useState([])

    useEffect(() => {
        setSalas(SalaService.getAll())
    }, [])

    function apague(id) {
        Swal.fire({
            icon: 'success',
            title: 'Apagado com sucesso!',
            text: 'O registro foi apagado com sucesso',
        })
        SalaService.delete(id)
        setSalas(SalaService.getAll())

        
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
        //         SalaService.delete(id)
        //         setSalas(SalaService.getAll())
        //         Swal.fire(
        //             'Apagado!',
        //             'O registro foi apagado com sucesso.',
        //             'success'
        //         )
        //         SalaService.delete(id)
        //         setSalas(SalaService.getAll())
        //     }
        // })
    }

    return (
        <div>
            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Apagar Salas
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
                            <Card.Footer className='bg-info'>
                                <Button variant='light' className='text-info' onClick={() => apague(i)} > <FaTrashAlt /> Apagar Sala</Button>
                            </Card.Footer>
                        </Card>
                    </Col>

                ))}
            </Row>
        </div>
    )
}

export default SalaDelete