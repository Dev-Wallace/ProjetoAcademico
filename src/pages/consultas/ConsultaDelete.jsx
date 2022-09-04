import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaTooth, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ConsultaService from '../../services/clinica/ConsultaService';


const ConsultaDelete = () => {

    const [consultas, setConsultas] = useState([])

    useEffect(() => {
        setConsultas(ConsultaService.getAll())
    }, [])

    function apague(id) {
        Swal.fire({
            icon: 'success',
            title: 'Apagado com sucesso!',
            text: 'O registro foi apagado com sucesso',
        })
        ConsultaService.delete(id)
        setConsultas(ConsultaService.getAll())
        
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
        //         ConsultaService.delete(id)
        //         setConsultas(ConsultaService.getAll())
        //         // CursoService.delete(id)
        //         // setCursos(CursoService.getAll())
        //     }
        // })
    }

    return (
        <div>
            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Apagar Consultas
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
                                <Button onClick={() => apague(i)} variant='light' className='text-info'> <FaTrashAlt /> Apagar Consulta </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}


            </Row>

        </div>
    )
}

export default ConsultaDelete