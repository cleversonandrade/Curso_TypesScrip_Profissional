"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
const d = new Date();
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores['branco']);
var tipo_Usuario;
(function (tipo_Usuario) {
    tipo_Usuario[tipo_Usuario["USER"] = 10] = "USER";
    tipo_Usuario[tipo_Usuario["ADMIN"] = 100] = "ADMIN";
    tipo_Usuario[tipo_Usuario["SUPER"] = 1000] = "SUPER";
})(tipo_Usuario || (tipo_Usuario = {}));
const tp = tipo_Usuario.SUPER;
console.log(tp);
