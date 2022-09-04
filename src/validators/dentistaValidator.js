const dentistaValidator = {

    nome: {
        required: 'O campo Nome do Dentista é obrigatório',
        minLength: {
            value: 8,
            message: 'A quantidade mínima de caracteres não informada'
        },
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres foi ultrapassada'
        }
    },

    cpf: {
        required: 'O campo CPF do Dentista é obrigatório',
        minLength: {
            value: 14,
            message: 'A quantidade mínima de caracteres não informada'
        },
        maxLength: {
            value: 14,
            message: 'A quantidade máxima de caracteres foi ultrapassada'
        }
    },

    inscricao: {
        required: 'O campo Inscrição é obrigatório',
        minLength: {
            value: 8,
            message: 'A quantidade mínima de caracteres não informada'
        },
        maxLength: {
            value: 8,
            message: 'A quantidade máxima de caracteres foi ultrapassada'
        }
    },

    tipo: {
        required: 'O campo Tipo de Especialidade é obrigatório',
        minLength: {
            value: 8,
            message: 'A quantidade mínima de caracteres não informada'
        },
        maxLength: {
            value: 50,
            message: 'A quantidade máxima de caracteres foi ultrapassada'
        }
    },

    nascimento: {
        required: 'O campo Data de Nascimento é obrigatório',
        minLength: {
            value: 10,
            message: 'A quantidade mínima de caracteres não informada'
        },
        maxLength: {
            value: 10,
            message: 'A quantidade máxima de caracteres foi ultrapassada'
        }
    },

    email: {
        minLength: {
            value: 8,
            message: 'A quantidade mínima de caracteres não informada'
        },
        maxLength: {
            value: 60,
            message: 'A quantidade máxima de caracteres foi ultrapassada'
        }
    },

    telefone: {
        required: 'O campo Telefone do Dentista é obrigatório',
        minLength: {
            value: 15,
            message: 'A quantidade mínima de caracteres não informada'
        },
        maxLength: {
            value: 15,
            message: 'A quantidade máxima de caracteres foi ultrapassada'
        }
    }
}



export default dentistaValidator