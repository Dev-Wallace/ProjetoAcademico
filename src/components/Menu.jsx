import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FaTooth, FaClipboardList, FaPlusCircle, FaPencilAlt, FaTrashAlt, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>

            <Navbar fixed='top' bg="info" variant="dark" className="mb-3">
                <Container>
                    <Navbar.Brand>
                        <Link to={'/home'} className='text-light'>
                            <strong><FaTooth className='me-2' />Cliníca Dentinho </strong>
                        </Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Consultas" className="show fw-bold " id="basic-nav-dropdown">
                            <Link className="nav-link text-info" to="/consulta/listagem"> <FaClipboardList /> Listagem das Consultas</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/consulta/create"> <FaPlusCircle /> Marcar Consultas</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/consulta/update"> <FaPencilAlt /> Editar Consultas</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/consulta/delete"> <FaTrashAlt /> Excluir Consultas</Link>
                        </NavDropdown>

                        <NavDropdown title="Salas" className="show fw-bold" id="basic-nav-dropdown">
                            <Link className="nav-link text-info" to="/sala/listagem"> <FaClipboardList /> Listagem das Salas</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/sala/create"> <FaPlusCircle /> Nova Sala</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/sala/update"> <FaPencilAlt /> Editar Salas</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/sala/delete"> <FaTrashAlt /> Excluir Salas</Link>
                        </NavDropdown>

                        <NavDropdown title="Dentistas" className="show fw-bold" id="basic-nav-dropdown">
                            <Link className="nav-link text-info" to="/dentista/listagem"> <FaClipboardList /> Listagem dos Dentistas</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/dentista/create"> <FaPlusCircle /> Novo Dentista</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/dentista/update"> <FaPencilAlt /> Atualizar Dentista</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/dentista/delete"> <FaTrashAlt /> Excluir Dentista</Link>
                        </NavDropdown>

                        <NavDropdown title="Pacientes" className="show fw-bold" id="basic-nav-dropdown">
                            <Link className="nav-link text-info" to="/paciente/listagem"> <FaClipboardList /> Listagem dos Pacientes</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/paciente/create"> <FaPlusCircle /> Novo Paciente</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/paciente/update"> <FaPencilAlt /> Atualizar Paciente</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/paciente/delete"> <FaTrashAlt /> Excluir Paciente</Link>
                        </NavDropdown>

                        <NavDropdown title="Procedimentos" className="show fw-bold" id="basic-nav-dropdown">
                            <Link className="nav-link text-info" to="/procedimentos/listagem"> <FaClipboardList /> Listagem dos Procedimentos</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/procedimentos/create"> <FaPlusCircle /> Inserir Procedimentos</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/procedimentos/update"> <FaPencilAlt /> Atualizar Procedimentos</Link>
                            <NavDropdown.Divider />
                            <Link className="nav-link text-info" to="/procedimentos/delete"> <FaTrashAlt /> Excluir Procedimentos</Link>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        <a href="https://www.instagram.com/" target="_blank" className='text-light fw-bolder fs-3 me-3' > <FaInstagram /> </a>
                        <a href="https://www.facebook.com/" target="_blank" className='text-light fw-bolder fs-3' > <FaFacebookF /> </a>
                        <a href="https://www.whatsapp.com/download?lang=pt_br" target="_blank" className='text-light fw-bolder fs-3 ms-3' > <FaWhatsapp /> </a>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu