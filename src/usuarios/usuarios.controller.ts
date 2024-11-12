import { Controller, Get, Param,Post,Put,Delete,Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { usuarioModelo } from './usuario.model';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly service: UsuariosService) {}
    @Get()
    getUsuarios(){
        return this.service.usuarios
    }
    @Get(':id')
    getUsuarioPorId(@Param('id') id: string) {
        return this.service.getUsuarioPorId(id);
    }
    @Post() 
    postusers (@Body() nuevoUsuario : usuarioModelo) {
        return this.service.postUser( nuevoUsuario );
    }
        
    @Put( ":id" )
    putusers( @Body() nuevosDatos : usuarioModelo, @Param("id") id:string ): boolean {
        return this.service.putUser( nuevosDatos, Number(id) );
    }

    @Delete(":id")
    deletusers( @Param("id") id:string) : boolean {
        return this.service.deleteUser( Number(id) );
    }

}
