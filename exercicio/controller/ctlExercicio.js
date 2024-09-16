// Funções de cálculo
function fSoma(num1Par, num2Par) {
    return num1Par + num2Par;
}

function fSubtracao(num1Par, num2Par) {
    return num1Par - num2Par;
}

function fMultiplicacao(num1Par, num2Par) {
    return num1Par * num2Par;
}

function fDivisao(num1Par, num2Par) {
    if (num2Par === 0) {
        throw new Error('Divisão por zero');
    }
    return num1Par / num2Par;
}

// Função de controle da API
const fCalculo = (req, res) => {
    const { num1Par, num2Par, operacao } = req.body;

    let resultado;

    try {
        switch (operacao) {
            case '+':
                resultado = fSoma(num1Par, num2Par);
                break;
            case '-':
                resultado = fSubtracao(num1Par, num2Par);
                break;
            case '*':
                resultado = fMultiplicacao(num1Par, num2Par);
                break;
            case '/':
                resultado = fDivisao(num1Par, num2Par);
                break;
            default:
                return res.status(400).json({ error: 'Operação inválida' });
        }
        res.json({ resultado });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { fCalculo };
