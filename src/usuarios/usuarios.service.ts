import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
    usuarios = [];
    constructor() {
        let usuario={
            id:'1',
           nombre:'juan'
        };
        this.usuarios.push(usuario);
        usuario={
            id:'4',
           nombre:'naty'
        };
        this.usuarios.push(usuario);
        usuario={
            id:'2',
           nombre:'marcelo'
        };
        this.usuarios.push(usuario);
        usuario={
            id:'3',
           nombre:'maria'
        };
        this.usuarios.push(usuario);

    }
    getUsuarios (){
        return this.usuarios;
    }
    getUsuarioPorId(id: string){
       for(let i=0; i < this.usuarios.length; i++){
        if (this.usuarios[i].id === id){
            return this.usuarios[i];
        }
       }
    }
    
}
