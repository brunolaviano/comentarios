import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-ver-comentario',
  templateUrl: './ver-comentario.component.html',
  styleUrls: ['./ver-comentario.component.css']
})
export class VerComentarioComponent implements OnInit {
  id: number;
  comentario: Comentario | undefined;

  constructor(private aRoute: ActivatedRoute, private _comentarioService: ComentarioService) {
    this.aRoute.snapshot.paramMap.get('id');
    this.id = + this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getComentario();
  }

  getComentario(){
    this._comentarioService.getComentario(this.id).subscribe(data =>{
      this.comentario = data;
    })
  }

}
