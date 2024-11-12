import { Injectable } from '@nestjs/common';
import { usuarioModelo } from './usuario.model';

@Injectable()
export class UsuariosService {
    usuarios = [];
    constructor() {
        let usuario={
            id:'1',
           nombre:'juan',
           apellido:''
        };
        this.usuarios.push(usuario);
        usuario={
            id:'4',
           nombre:'naty',
           apellido:''
        };
        this.usuarios.push(usuario);
        usuario={
            id:'2',
           nombre:'marcelo',
           apellido:''
        };
        this.usuarios.push(usuario);
        usuario={
            id:'3',
           nombre:'maria',
           apellido:''
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
    
    postUser( nuevoUsuario : usuarioModelo ): string {
        this.usuarios.push( nuevoUsuario );
        return nuevoUsuario.nombre;
    }

    putUser( nuevosDatos: usuarioModelo, userToUpdateId:number ) : boolean {
        const userToUpdate : usuarioModelo = this.usuarios.find( m => m.id === userToUpdateId );
        if( userToUpdate != undefined ){
            userToUpdate.nombre = nuevosDatos.nombre;
            userToUpdate.apellido = nuevosDatos.apellido;
            return true;
        } else 
            return false;
    }

    deleteUser( id:number ) : boolean {
        const indiceUsuarioAEliminar = this.usuarios.findIndex( u => u.id === id );
        if( indiceUsuarioAEliminar == -1 )
            return false;
        this.usuarios.splice( indiceUsuarioAEliminar, 1 );
        return true;
    }
    
}
