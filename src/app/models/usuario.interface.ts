export interface Usuario{
    id:BigInt,
    id_rol:BigInt,
    nombre:String,
    activo:CharacterData,
    correo:String
    rol:Rol,   
}

export interface Rol{
    id:BigInt,
    nombre:String
}