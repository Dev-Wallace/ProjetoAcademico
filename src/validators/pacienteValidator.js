const pacienteValidator = {

    nome: {
        required: 'O campo Nome do Paciente é obrigatório',
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
        required: 'O campo CPF do Paciente é obrigatório',
        minLength: {
            value: 14,
            message: 'A quantidade mínima de caracteres não informada'
        },
        maxLength: {
            value: 14,
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

    historico: {
        required: 'É obrigatório marcar pelo menos uma das opções "SIM" ou "NÃO"'
    }


}

export default pacienteValidator