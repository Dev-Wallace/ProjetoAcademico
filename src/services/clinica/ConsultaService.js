class ConsultaService {

    getAll(){
        const consultas = localStorage.getItem('consultas')
        return consultas ? JSON.parse(consultas) : []
    }

    get(id){
        const consultas = this.getAll()
        return consultas[id]
    }

    create(dados){
        const consultas = this.getAll()
        consultas.push(dados)
        localStorage.setItem('consultas', JSON.stringify(consultas))
    }

    update(id, dados){
        const consultas = this.getAll()
        consultas.splice(id, 1, dados)
        localStorage.setItem('consultas', JSON.stringify(consultas))
    }

    delete(id){
        const consultas = this.getAll()
        consultas.splice(id, 1)
        localStorage.setItem('consultas', JSON.stringify(consultas))
    }
}

export default new ConsultaService()