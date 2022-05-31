import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Rol, Usuario } from 'src/app/models/usuario.interface';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { RolServiceService } from 'src/app/services/rol-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usario',
  templateUrl: './usario.component.html',
  styleUrls: ['./usario.component.css']
})
export class UsarioComponent implements OnInit {


  form_usuario_nuevo: FormGroup;
  usuarios: Usuario[]=[];
  roles: Rol[]=[];
  subscription: any;
  activos: String[]=['A','B'];
  @Input() nombre!: String;

  constructor(private service_usuario:UsuarioServiceService,
     public form:FormBuilder,
     private service_rol:RolServiceService) {

    this.form_usuario_nuevo = form.group({
      id_rol:['',Validators.required],
      nombre:['',Validators.required],
      activo:['',Validators.required],
      correo:['',Validators.compose([Validators.required,Validators.email])]
    });
   }

  ngOnInit(): void {
    this.listar_usuarios();
    this.listar_roles();
    this.subscription = this.service_usuario.reload.subscribe(()=>{
      this.listar_usuarios();
    });
  }

  listar_usuarios(){
    this.service_usuario.getUsuarios().subscribe(res=>{
      this.usuarios = res;
      console.log(this.usuarios);
    })
  }

  listar_roles(){
    this.service_rol.getRoles().subscribe(res=>{
      this.roles = res;
      console.log(this.roles);
    })
  }

  save_usuario(){
    if(this.form_usuario_nuevo.valid){
      this.service_usuario.saveUsuario(this.form_usuario_nuevo.value).subscribe(usuario=>{
       this.mensaje_success('Usuario registrado con exito');
        this.form_usuario_nuevo.reset();
      })
    }else{
      this.mensaje_error('El formulario no es valido');
    }
    
  }

  buscar(){
    console.log(this.nombre)
    if(this.nombre!=''){
      this.service_usuario.getName(this.nombre).subscribe(res=>{
        if(res.length==0){
          this.listar_usuarios;
          this.mensaje_error('No se encontraron resultados');
        }else{
          this.usuarios = res;
        }
      })
    }else{
      this.listar_usuarios();
    }

    
  }

  limpiar(){
    this.nombre = '';
    this.listar_usuarios();
  }

  mensaje_success(text:String){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: text,
      showConfirmButton: false,
      timer: 1500
    })
  }

  mensaje_error(text:String){
    Swal.fire({
      icon: 'error',
      title: text,
      showConfirmButton: false,
      timer: 2000
    })
  }


}
