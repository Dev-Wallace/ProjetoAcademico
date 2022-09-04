const salaValidator = {

    nomeSala: {
        required: 'O campo Nome da Sala é obrigatório',
        minLength: {
            value: 5,
            message: 'A quantidade mínima de caracteres não informada'
        },
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres foi ultrapassada'
        },
    },

    tipoSala: {
        required: 'O campo Tipo da Sala é obrigatório',
        minLength: {
            value: 5,
            message: 'A quantidade mínima de caracteres não informada'
        },
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres foi ultrapassada'
        }
    }

}

export default salaValidator