import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Comentario } from 'src/app/interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentario[] = [];

  constructor(private _comentarioService: ComentarioService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCometarios();
  }

  getCometarios() {
    this._comentarioService.getListComentarios().subscribe(data => {
      console.log(data);
      this.listComentarios = data;
    }, error => {
      this.toastr.error('Opps Ocurrio un Error', 'Error');
      console.log(error);
    });
  }

  eliminarComentario(id: any) {
    console.log(id);
    this._comentarioService.deleteComentario(id).subscribe(data => {
      this.getCometarios();
      this.toastr.error('El Comentario fue eliminado con Exito!', 'Registro Eliminado');
    }, error => {
      this.toastr.error('Opps Ocurrio un Error', 'Error');
      console.log(error);
    })
  }
}
