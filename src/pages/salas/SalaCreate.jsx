import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaTooth, FaCheckCircle } from "react-icons/fa";
import { MdAssignmentReturn } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom';
import salaValidator from '../../validators/salaValidator';
import SalaService from '../../services/clinica/SalaService'


const SalaCreate = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  useEffect(() => {
    const sala = SalaService.get(params.id)

    for (let campo in sala) {
      setValue(campo, sala[campo])
    }
  }, [])

  function salvar(dados) {
    if (params.id) {
      SalaService.update(params.id, dados)
    }
    else {
      SalaService.create(dados)
    }
    navigate('/sala/listagem')
  }

  return (
    <div>

      <h1 className='mt-5 text-center text-info fs-1'> <FaTooth /> Adicionar Sala</h1>

      <Form>

        <Form.Group className='mb-3' controlId='nomeSala'>
          <Form.Label><strong className='text-info'>Nome da Sala:</strong></Form.Label>
          <Form.Control type='text' isInvalid={errors.nomeSala} className='border-info' {...register('nomeSala', salaValidator.nomeSala)} />
          {errors.nomeSala && <span className='text-danger fw-bolder'>{errors.nomeSala.message}</span>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='tipoSala'>
          <Form.Label> <strong className='text-info'>Tipo da Sala:</strong> </Form.Label>
          <Form.Control type='text' isInvalid={errors.tipoSala} className='border-info' {...register('tipoSala', salaValidator.tipoSala)} />
          {errors.tipoSala && <span className='text-danger fw-bolder'>{errors.tipoSala.message}</span>}
        </Form.Group>

      </Form>

      <div className='text-center'>
        <Button variant='info text-light' onClick={handleSubmit(salvar)}> <FaCheckCircle /> Adicionar Sala </Button>
        <Link to={-1} className='btn btn-info text-light ms-2'> <MdAssignmentReturn /> Retornar </Link>
      </div>

    </div>
  )
}

export default SalaCreate