import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaTooth, FaCheckCircle } from "react-icons/fa";
import { MdAssignmentReturn } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom';
import procedimentoValidator from '../../validators/procedimentoValidator';
import ProcedimentoService from '../../services/clinica/ProcedimentoService'

const ProcedimentosCreate = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const procedimento = ProcedimentoService.get(params.id)

        for (let campo in procedimento) {
            setValue(campo, procedimento[campo])
        }
    }, [])

    function salvar(dados) {
        if (params.id) {
            ProcedimentoService.update(params.id, dados)
        }
        else {
            ProcedimentoService.create(dados)
        }
        navigate('/procedimentos/listagem')
    }

    return (
        <div>
            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Novo Procedimento</h1>

            <Form>
                <Form.Group className='mb-3' controlId='nome'>
                    <Form.Label> <strong className='text-info'>Nome do Procedimento:</strong> </Form.Label>
                    <Form.Control type='text' className='border-info' isInvalid={errors.nome} {...register('nome', procedimentoValidator.nome)} />
                    {errors.nome && <span className='text-danger fw-bolder'>{errors.nome.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='tipo'>
                    <Form.Label> <strong className='text-info'>Tipo do Procedimento:</strong> </Form.Label>

                    <Form.Select aria-label="Default select example" className='border-info' isInvalid={errors.tipo}  {...register('tipo', procedimentoValidator.tipo)}>
                        <option>Selecione o tipo do Procedimento</option>
                        <option value="Clínico geral">Clínico geral</option>
                        <option value="Odontopediatria">Odontopediatria</option>
                        <option value="Implantodontia">Implantodontia</option>
                        <option value="Prótese dentária">Prótese dentária</option>
                        <option value="Periodontia">Periodontia</option>
                        <option value="Dentística">Dentística</option>
                    </Form.Select>
                    {errors.tipo && <span className='text-danger fw-bolder'>{errors.tipo.message}</span>}
                </Form.Group>
            </Form>

            <div className='text-center'>
                <Button variant='info text-light' onClick={handleSubmit(salvar)}> <FaCheckCircle /> Adicionar Procedimento </Button>
                <Link to={-1} className="btn btn-info text-light ms-2"> <MdAssignmentReturn /> Retornar </Link>
            </div>

        </div>
    )
}

export default ProcedimentosCreate