import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaTooth, FaCheckCircle } from "react-icons/fa";
import { MdAssignmentReturn } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';
import pacienteValidator from '../../validators/pacienteValidator';
import PacienteService from '../../services/clinica/PacienteService';



const PacientesCreate = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const paciente = PacienteService.get(params.id)
        console.log(paciente);

        for (let campo in paciente) {
            setValue(campo, paciente[campo])
        }
    }, [])

    function salvar(dados) {
        if (params.id) {
            PacienteService.update(params.id, dados)
        }
        else {
            PacienteService.create(dados)
        }
        navigate('/paciente/listagem')
    }

    function handleChange(event) {
        const mascara = event.target.getAttribute('mask')
        setValue(event.target.name, mask(event.target.value, mascara))
    }

    return (
        <div>
            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Adicionar novo Paciente</h1>

            <Form>
                <Form.Group className='mb-3' controlId='nome'>
                    <Form.Label> <strong className='text-info'> Nome do Paciente: </strong> </Form.Label>
                    <Form.Control type='text' className='border-info' isInvalid={errors.nome} {...register('nome', pacienteValidator.nome)} />
                    {errors.nome && <span className='text-danger fw-bolder'>{errors.nome.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='cpf'>
                    <Form.Label> <strong className='text-info'>CPF do Paciente:</strong> </Form.Label>
                    <Form.Control type='text' className='border-info' isInvalid={errors.cpf} {...register('cpf', pacienteValidator.cpf)}
                        mask='999.999.999-99' onChange={handleChange} />
                    {errors.cpf && <span className='text-danger fw-bolder'>{errors.cpf.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='telefone'>
                    <Form.Label> <strong className='text-info'>Telefone do Paciente:</strong> </Form.Label>
                    <Form.Control type='text' className='border-info' isInvalid={errors.telefone}  {...register('telefone', pacienteValidator.telefone)}
                        mask='(99) 99999-9999' onChange={handleChange} />
                    {errors.telefone && <span className='text-danger fw-bolder'>{errors.telefone.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='nascimento'>
                    <Form.Label> <strong className='text-info'>Data de Nascimento do Paciente:</strong> </Form.Label>
                    <Form.Control type='text' className='border-info' isInvalid={errors.nascimento} {...register('nascimento', pacienteValidator.nascimento)}
                        mask='99/99/9999' onChange={handleChange} />
                    {errors.nascimento && <span className='text-danger fw-bolder'>{errors.nascimento.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='historico'>
                    <Form.Label> <strong className='text-info me-3'>Já foi ao Dentista antes:</strong>  </Form.Label>
                    <Form.Check type='radio' label='SIM' value='SIM' inline className='text-info fw-bold' isInvalid={errors.historico} {...register('historico', pacienteValidator.historico)} />
                    <Form.Check type='radio' label='NÃO' value='NÃO' inline className='text-info fw-bold' isInvalid={errors.historico} {...register('historico', pacienteValidator.historico)} />
                    <Form.Control.Feedback type='in'>{errors.historico && <span className='text-danger fw-bolder'>{errors.historico.message}</span>}</Form.Control.Feedback>
                </Form.Group>
            </Form>

            <div className='text-center mb-3'>
                <Button variant='info text-light' onClick={handleSubmit(salvar)}> <FaCheckCircle /> Salvar Paciente </Button>
                <Link className='btn btn-info ms-3 text-light' to={-1}> <MdAssignmentReturn /> Retornar </Link>
            </div>
        </div>
    )
}

export default PacientesCreate