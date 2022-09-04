class DentistaService {

    getAll() {
        const dentistas = localStorage.getItem('dentistas')
        return dentistas ? JSON.parse(dentistas) : []
    }

    get(id) {
        const dentistas = this.getAll()
        return dentistas[id]
    }

    create(dados) {
        const dentistas = this.getAll()
        dentistas.push(dados)
        localStorage.setItem('dentistas', JSON.stringify(dentistas))
    }

    update(id, dados) {
        const dentistas = this.getAll()
        dentistas.splice(id, 1, dados)
        localStorage.setItem('dentistas', JSON.stringify(dentistas))
    }

    delete(id) {
        const dentistas = this.getAll()
        dentistas.splice(id, 1)
        localStorage.setItem('dentistas', JSON.stringify(dentistas))
    }

}

export default new DentistaService()