import { Controller, Get, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

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

}
