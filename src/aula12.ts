function logar(user: string, pass: string): void {
    console.log(`User: ${user}`);
    console.log(`Senha: ${pass}`);
}

logar('Cleverson', '123');

function soma2(n1:number, n2:number): number {
    let t = n1 + n2; 
    return t;
}

const n_res: number = soma2(10, 15);
const s_res: string = soma2(5,2).toString();

console.log(n_res);
console.log(s_res);
