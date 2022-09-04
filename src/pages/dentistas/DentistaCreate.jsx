import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaTooth, FaCheckCircle } from "react-icons/fa";
import { MdAssignmentReturn } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';
import dentistaValidator from '../../validators/dentistaValidator';
import DentistaService from '../../services/clinica/DentistaService';


const DentistaCreate = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const dentista = DentistaService.get(params.id)
        console.log(dentista);

        for (let campo in dentista) {
            setValue(campo, dentista[campo])
        }
    }, [])

    function salvar(dados) {
        if (params.id) {
            DentistaService.update(params.id, dados)
        }
        else {
            DentistaService.create(dados)
        }
        navigate('/dentista/listagem')
    }


    function handleChange(event) {
        const mascara = event.target.getAttribute('mask')
        setValue(event.target.name, mask(event.target.value, mascara))
    }

    return (
        <div>
            <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Novo Dentista </h1>

            <Form>

                <Form.Group className='mb-3' controlId='nome'>
                    <Form.Label><strong className='text-info'>Nome do Dentista:</strong></Form.Label>
                    <Form.Control type='text' className='border-info' isInvalid={errors.nome} {...register('nome', dentistaValidator.nome)} />
                    {errors.nome && <span className='text-danger fw-bolder'>{errors.nome.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='cpf'>
                    <Form.Label><strong className='text-info'>CPF do Dentista:</strong></Form.Label>
                    <Form.Control type='text' className='border-info' isInvalid={errors.cpf} {...register('cpf', dentistaValidator.cpf)}
                        mask='999.999.999-99' onChange={handleChange} />
                    {errors.cpf && <span className='text-danger fw-bolder'>{errors.cpf.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='inscricao'>
                    <Form.Label> <strong className='text-info'>Inscrição do Dentista:</strong> </Form.Label>
                    <Form.Control className='border-info' type='text' isInvalid={errors.inscricao} {...register('inscricao', dentistaValidator.inscricao)}
                        mask='99999-99' onChange={handleChange} />
                    {errors.inscricao && <span className='text-danger fw-bolder'>{errors.inscricao.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='tipo'>
                    <Form.Label> <strong className='text-info'>Tipo de Especialidade:</strong> </Form.Label>
                    <Form.Select aria-label="Default select example" className='border-info' isInvalid={errors.tipo} {...register('tipo', dentistaValidator.tipo)}>
                        <option>Selecione o tipo de Especialidade</option>
                        <option value="Clínico geral">Clínico geral</option>
                        <option value="Odontopediatria">Odontopediatria</option>
                        <option value="Implantodontia">Implantodontia</option>
                        <option value="Prótese dentária">Prótese dentária</option>
                        <option value="Periodontia">Periodontia</option>
                        <option value="Dentística">Dentística</option>
                    </Form.Select>
                    {errors.tipo && <span className='text-danger fw-bolder'>{errors.tipo.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='nascimento'>
                    <Form.Label> <strong className='text-info'>Data de Nascimento:</strong> </Form.Label>
                    <Form.Control type='text' className='border-info' isInvalid={errors.nascimento} {...register('nascimento', dentistaValidator.nascimento)}
                        mask='99/99/9999' onChange={handleChange} />
                    {errors.nascimento && <span className='text-danger fw-bolder'>{errors.nascimento.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label> <strong className='text-info'> Email do Dentista: </strong> </Form.Label>
                    <Form.Control className='border-info' type='email' isInvalid={errors.email} {...register('email', dentistaValidator.email)} />
                    {errors.email && <span className='text-danger fw-bolder'>{errors.email.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='telefone'>
                    <Form.Label> <strong className='text-info'>Telefone do Dentista:</strong> </Form.Label>
                    <Form.Control className='border-info' type='text' isInvalid={errors.telefone} {...register('telefone', dentistaValidator.telefone)}
                        mask='(99) 99999-9999' onChange={handleChange} />
                    {errors.telefone && <span className='text-danger fw-bolder'>{errors.telefone.message}</span>}
                </Form.Group>

            </Form>



            <div className='text-center mb-3'>
                <Button onClick={handleSubmit(salvar)} variant='info text-light'> <FaCheckCircle /> Criar Dentista </Button>
                <Link to={-1} className='btn btn-info text-light ms-2'> <MdAssignmentReturn /> Retornar </Link>
            </div>
        </div>


    )
}

export default DentistaCreate