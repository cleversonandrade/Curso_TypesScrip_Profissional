"use strict";
let funcionario = {
    nome: 'Raimundo',
    setor: 'Tráfego',
    status: 'Ativo',
    data_val: 2024,
    ola: () => { console.log('Oi'); },
    info: (p) => { console.log(p); }
};
funcionario.nome = 'Gilson';
funcionario.status = 'Inativo';
funcionario.setor = 'Gestão';
funcionario.ola();
funcionario.info('Cleverson');
console.log(typeof (funcionario));
console.log(funcionario.nome);
console.log(funcionario.setor);
console.log(funcionario.status);
console.log(funcionario.data_val);
