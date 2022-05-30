export interface Usuario{
    id:BigInt,
    rol:Rol,
    nombre:String,
    estado:CharacterData,
    correo:String   
}

export interface Rol{
    id:BigInt,
    nombre:String
}