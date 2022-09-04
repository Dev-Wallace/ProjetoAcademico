import ConsultaCreate from "./pages/consultas/ConsultaCreate";
import ConsultaList from "./pages/consultas/ConsultaList";
import ConsultaUpdate from "./pages/consultas/ConsultaUpdate";
import ConsultaDelete from "./pages/consultas/ConsultaDelete";
import SalaCreate from "./pages/salas/SalaCreate";
import SalaList from "./pages/salas/SalaList";
import SalaUpdate from "./pages/salas/SalaUpdate";
import SalaDelete from "./pages/salas/SalaDelete";
import DentistaCreate from "./pages/dentistas/DentistaCreate";
import DentistaList from "./pages/dentistas/DentistaList";
import DentistaUpdate from "./pages/dentistas/DentistaUpdate";
import DentistaDelete from "./pages/dentistas/DentistaDelete";
import PacientesCreate from "./pages/pacientes/PacientesCreate";
import PacienteList from "./pages/pacientes/PacienteList";
import PacienteUpdate from "./pages/pacientes/PacienteUpdate";
import PacienteDelete from "./pages/pacientes/PacienteDelete"
import ProcedimentosCreate from "./pages/procedimentos/ProcedimentosCreate";
import ProcedimentosList from "./pages/procedimentos/ProcedimentosList";
import ProcedimentosUpdate from "./pages/procedimentos/ProcedimentosUpdate";
import ProcedimentosDelete from "./pages/procedimentos/ProcedimentosDelete";
import Menu from "./components/Menu";
import Home from "./pages/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>

        <Menu />

        <Container>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>

            <Route path='/consulta/create' element={<ConsultaCreate />}></Route>
            <Route path='/consulta/create/:id' element={<ConsultaCreate />}></Route>
            <Route path='/consulta/listagem' element={<ConsultaList />}></Route>
            <Route path='/consulta/update' element={<ConsultaUpdate />}></Route>
            <Route path='/consulta/delete' element={<ConsultaDelete />}></Route>

            <Route path='/sala/create' element={<SalaCreate />}></Route>
            <Route path='/sala/create/:id' element={<SalaCreate />}></Route>
            <Route path='/sala/listagem' element={<SalaList />}></Route>
            <Route path='/sala/update' element={<SalaUpdate />}></Route>
            <Route path='/sala/delete' element={<SalaDelete />}></Route>

            <Route path='/dentista/create' element={<DentistaCreate />}></Route>
            <Route path='/dentista/create/:id' element={<DentistaCreate />}></Route>
            <Route path='/dentista/listagem' element={<DentistaList />}></Route>
            <Route path='/dentista/update' element={<DentistaUpdate />}></Route>
            <Route path='/dentista/delete' element={<DentistaDelete />}></Route>

            <Route path='/paciente/create' element={<PacientesCreate />}></Route>
            <Route path='/paciente/create/:id' element={<PacientesCreate />}></Route>
            <Route path='/paciente/listagem' element={<PacienteList />}></Route>
            <Route path='/paciente/update' element={<PacienteUpdate />}></Route>
            <Route path='/paciente/delete' element={<PacienteDelete />}></Route>

            <Route path='/procedimentos/create' element={<ProcedimentosCreate />}></Route>
            <Route path='/procedimentos/create/:id' element={<ProcedimentosCreate />}></Route>
            <Route path='/procedimentos/listagem' element={<ProcedimentosList />}></Route>
            <Route path='/procedimentos/update' element={<ProcedimentosUpdate />}></Route>
            <Route path='/procedimentos/delete' element={<ProcedimentosDelete />}></Route>

          </Routes>
        </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
