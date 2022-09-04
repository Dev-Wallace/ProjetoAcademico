import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaTooth, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ProcedimentoService from '../../services/clinica/ProcedimentoService';


const ProcedimentosDelete = () => {

    const [procedimentos, setProcedimentos] = useState([])

    useEffect(() => {
        setProcedimentos(ProcedimentoService.getAll())
    }, [])


    function apague(id) {
        Swal.fire({
            icon: 'success',
            title: 'Apagado com sucesso!',
            text: 'O registro foi apagado com sucesso',
        })
        ProcedimentoService.delete(id)
        setProcedimentos(ProcedimentoService.getAll())

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
        //         ProcedimentoService.delete(id)
        //         setProcedimentos(ProcedimentoService.getAll())
        //     }
        // })
    }

    return (
        <div>
            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Apagar Procedimentos
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
                                <Button onClick={() => apague(i)} variant='light' className='text-info'> <FaTrashAlt /> Apagar Procedimento </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ProcedimentosDelete