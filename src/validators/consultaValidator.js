const consultaValidator = {

    nomePaciente: {
        required: 'O campo Nome do Paciente é obrigatório',
        minLength: {
            value: 10,
            message: 'A quantidade mínima de caracteres não informada'
        },
        maxLength: {
            value: 60,
            message: 'A quantidade máxima de caracteres ultrapassada'
        }
    },

    cpf: {
        required: 'o campo CPF é Obrigatório',
        minLength: {
            value: 14,
            message: 'A quantidade mínima de caracteres não informada'
        },
        maxLength: {
            value: 14,
            message: 'A quantidade máxima de caracteres ultrapassada'
        }
    },

    data: {
        required: 'O campo Data é obrigatório',
        minLength: {
            value: 8,
            message: 'A quantidade mínima para os caracteres não informada'
        },
        maxLength: {
            value: 11,
            message: 'A quantidade máxima para os caracteres foi ultrapassada'
        }
    },

    sala: {
        required: 'O campo Sala é obrigatório',
        minLength: {
            value: 5,
            message: 'A quantidade mínima para os caracteres não informada'
        },
        maxLength: {
            value: 60,
            message: 'A quantidade máxima para os caracteres foi ultrapassada'
        }
    },

    nomeDentista: {
        required: 'O campo Nome do Dr. é obrigatório',
        minLength: {
            value: 10,
            message: 'A quantidade mínima para os caracteres não informada'
        },
        maxLength: {
            value: 60,
            message: 'A quantidade máxima para os caracteres foi ultrapassada'
        }
    },

    procedimento: {
        required: 'O campo Procedimento é obrigatório',
        minLength: {
            value: 5,
            message: 'A quantidade mínima para os caracteres não informada'
        },
        maxLength: {
            value: 60,
            message: 'A quantidade máxima para os caracteres foi ultrapassada'
        }
    },

    

}

export default consultaValidator