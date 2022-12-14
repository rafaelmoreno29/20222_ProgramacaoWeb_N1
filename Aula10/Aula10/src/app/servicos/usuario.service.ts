import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }

  obterUsuarios(){
    return this.http.get(`${environment.urlAPI}v1/Usuario`);
  }
  obterUsuarioPorId(id){
    return this.http.get(`${environment.urlAPI}v1/Usuario/${id}`);
  }
  inserirUsuario(usuario){
    return this.http.post(`${environment.urlAPI}v1/Usuario`,usuario);
  }
  editarUsuario(usuario){
    return this.http.put(`${environment.urlAPI}v1/Usuario/${usuario.id}`,
          usuario);
  }
  excluirUsuario(id){
    return this.http.delete(`${environment.urlAPI}v1/Usuario/${id}`);
  }
}
