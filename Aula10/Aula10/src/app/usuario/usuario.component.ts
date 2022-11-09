import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicos/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios : any = [];
  public loading = false;
  constructor(public usuarioService : UsuarioService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios(){
    this.loading = true;
    this.usuarioService.obterUsuarios().subscribe((data:any)=>{
      this.usuarios = data;
      this.loading = false;
    });
  }

  excluir(id){
    this.loading = true;
    this.usuarioService.excluirUsuario(id).subscribe(()=>{
      this.buscarUsuarios();
      this.loading = false;
      this.toastr.success( 'Excluído com sucesso!','Sucesso!');

    });
  }
}
