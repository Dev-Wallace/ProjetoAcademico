const procedimentoValidator ={

    nome: {
        required: 'O campo Nome do Procedimento é obrigatório',
        minLength: {
            value: 5,
            message: 'A quantidade mínima de caracteres não informada'
        },
        maxLength: {
            value: 60,
            message: 'A quantidade máxima de caracteres ultrapassada'
        }
    },

    tipo: {
        required: 'O campo Tipo do Procedimento é obrigatório',
        minLength: {
            value: 5,
            message: 'A quantidade mínima para os caracteres não informada'
        },
        maxLength: {
            value: 60,
            message: 'A quantidade máxima para os caracteres foi ultrapassada'
        }
    }

}

export default procedimentoValidator