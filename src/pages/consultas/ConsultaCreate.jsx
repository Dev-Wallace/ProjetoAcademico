import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaTooth, FaCheckCircle } from "react-icons/fa";
import { MdAssignmentReturn } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';
import consultaValidator from '../../validators/consultaValidator';
import ConsultaService from '../../services/clinica/ConsultaService';
import ProcedimentoService from '../../services/clinica/ProcedimentoService';
import procedimentoValidator from '../../validators/procedimentoValidator';
import salaValidator from '../../validators/salaValidator';
import SalaService from '../../services/clinica/SalaService';
import dentistaValidator from '../../validators/dentistaValidator';
import DentistaService from '../../services/clinica/DentistaService';



const ConsultaCreate = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [procedimentos, setProcedimentos] = useState([])
    const [salas, setSalas] = useState([])
    const [dentistas, setDentistas] = useState([])
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const consulta = ConsultaService.get(params.id)
        console.log(consulta)

        for (let campo in consulta) {
            setValue(campo, consulta[campo])
        }

        setProcedimentos(ProcedimentoService.getAll())
        setSalas(SalaService.getAll())
        setDentistas(DentistaService.getAll())
    }, [])

    function salvar(dados) {
        if (params.id) {
            ConsultaService.update(params.id, dados)
        }
        else {
            ConsultaService.create(dados)
        }
        navigate('/consulta/listagem')
    }

    function handleChange(event) {
        const mascara = event.target.getAttribute('mask')
        setValue(event.target.name, mask(event.target.value, mascara))
    }
    return (
        <div>

            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Marcar Consulta</h1>

            <Form>
                <Form.Group className="mb-3 " controlId="nomePaciente">
                    <Form.Label> <strong className='text-info'>Nome do Paciente:</strong> </Form.Label>
                    <Form.Control className='border-info' isInvalid={errors.nomePaciente} type="text" {...register('nomePaciente', consultaValidator.nomePaciente)} />
                    {errors.nomePaciente && <span className='text-danger fw-bolder'>{errors.nomePaciente.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='cpf'>
                    <Form.Label> <strong className='text-info'>CPF do Paciente:</strong> </Form.Label>
                    <Form.Control className='border-info' isInvalid={errors.cpf} type='text' {...register('cpf', consultaValidator.cpf)}
                        mask='999.999.999-99' onChange={handleChange} />
                    {errors.cpf && <span className='text-danger fw-bolder'>{errors.cpf.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3 " controlId="data">
                    <Form.Label> <strong className='text-info'>Data da Consulta:</strong> </Form.Label>
                    <Form.Control className='border-info' isInvalid={errors.data} type="text" {...register('data', consultaValidator.data)}
                        mask='99/99/9999' onChange={handleChange} />
                    {errors.data && <span className='text-danger fw-bolder'>{errors.data.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3 " controlId="nomeDentista">
                    <Form.Label> <strong className='text-info'>Nome do Dr.:</strong> </Form.Label>
                    <Form.Control className='border-info' isInvalid={errors.nomeDentista} type="text" {...register('nomeDentista', consultaValidator.nomeDentista)} />
                    {errors.nomeDentista && <span className='text-danger fw-bolder'>{errors.nomeDentista.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3 " controlId="procedimento">
                    <Form.Label> <strong className='text-info'>Procedimento:</strong> </Form.Label>
                    <Form.Control className='border-info' isInvalid={errors.procedimento} type="text" {...register('procedimento', consultaValidator.procedimento)} />
                    {errors.procedimento && <span className='text-danger fw-bolder'>{errors.procedimento.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='sala'>
                    <Form.Label> <strong className='text-info'>Sala da Consulta:</strong> </Form.Label>
                    <Form.Control className='border-info' isInvalid={errors.sala} type='text' {...register('sala', consultaValidator.sala)} />
                    {errors.sala && <span className='text-danger fw-bolder'>{errors.sala.message}</span>}
                </Form.Group>
            </Form>

            <div className='text-center mb-3'>
                <Button variant='info text-light' onClick={handleSubmit(salvar)}> <FaCheckCircle /> Guardar Consulta </Button>
                <Link className='btn btn-info ms-3 text-light' to={-1}> <MdAssignmentReturn /> Retornar </Link>
            </div>

        </div>
    )
}

export default ConsultaCreate