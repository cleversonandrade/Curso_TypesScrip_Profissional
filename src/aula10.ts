// NULL - UNDEFINED - UNKNOWN

let vnome1: string | null;
vnome1 = 'Cleverson';
// vnome1 = null;
console.log(vnome1);

let vnome2: any;
vnome2 = null;
console.log(vnome2);

let vnome3: unknown = vnome1; // unknown só pode ser atribuído em tipos unknown ou any.
let vnum: any= vnome3;
console.log(vnome3);