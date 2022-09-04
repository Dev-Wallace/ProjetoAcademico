class ProcedimentoService{

    getAll(){
        const procedimentos = localStorage.getItem('procedimentos')
        return procedimentos ? JSON.parse(procedimentos) : []
    }

    get(id){
        const procedimentos = this.getAll()
        return procedimentos[id]
    }

    create(dados){
        const procedimentos = this.getAll()
        procedimentos.push(dados)
        localStorage.setItem('procedimentos', JSON.stringify(procedimentos))
    }

    update(id, dados){
        const procedimentos = this.getAll()
        procedimentos.splice(id, 1, dados)
        localStorage.setItem('procedimentos', JSON.stringify(procedimentos))
    }

    delete(id){
        const procedimentos = this.getAll()
        procedimentos.splice(id, 1)
        localStorage.setItem('procedimentos', JSON.stringify(procedimentos))
    }

}

export default new ProcedimentoService()