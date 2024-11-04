import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { music } from './canciones.module';

@Controller('music')
export class CancionesController {
    constructor(private readonly service: CancionesService ) {}

    @Get()
    getmusic() {
        return this.service.getMusic();
    }

    @Get(':id')
    getmusicById( @Param('id') id:string ) {
        return this.service.getMusicById( Number( id ) );
    }
    
    @Get('/name/:name')
    getmusicByName( @Param('name') name:string ) {
        return this.service.getMusicByName( name );
    }
    @Get('/artist/:artista')
    getmusicByArtista( @Param('artista') artista:string ) {
        return this.service.getMusicByArtista( artista );
    }
    @Post() 
    postmusic (@Body() newmusic : music) {
        return this.service.postMusic( newmusic );
    }
        
    @Put(":id")
    putMusic( @Body() nuevosDatos:music, @Param("id") id:string ): boolean {
        return this.service.putMusic( nuevosDatos, Number(id) );
    }

    @Delete(":id")
    deleteMusic( @Param("id") id:string) : boolean {
        return this.service.deleteMusic( Number(id) );
    }
}
    