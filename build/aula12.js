"use strict";
function logar(user, pass) {
    console.log(`User: ${user}`);
    console.log(`Senha: ${pass}`);
}
logar('Cleverson', '123');
function soma2(n1, n2) {
    let t = n1 + n2;
    return t;
}
const n_res = soma2(10, 15);
const s_res = soma2(5, 2).toString();
console.log(n_res);
console.log(s_res);
