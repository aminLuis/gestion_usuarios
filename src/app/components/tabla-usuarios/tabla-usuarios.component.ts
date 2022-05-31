import { Component, Input, OnInit } from '@angular/core';
import { Rol, Usuario } from 'src/app/models/usuario.interface';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RolServiceService } from 'src/app/services/rol-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  @Input() usuarios: Usuario[]=[];
  @Input() usuario_editar!: Usuario;
  form_usuario_editar: FormGroup;
  activos: String[]=['A','B'];
  roles: Rol[]=[];
  current_page: number=1;
  tableSize: number = 1;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private service_usuario:UsuarioServiceService, 
    public form:FormBuilder,
    private service_rol:RolServiceService) {
    this.form_usuario_editar = form.group({
      id_rol:['',Validators.required],
      nombre:['',Validators.required],
      activo:['',Validators.required],
      correo:['',Validators.compose([Validators.required,Validators.email])]
    });
   }

  ngOnInit(): void {
  }


  update_usuario(){
    if(this.form_usuario_editar.valid){
      this.service_usuario.updateUsuario(this.usuario_editar).subscribe(usuario=>{
        this.mensaje_success('Usario actualizado con exito');
      })
    }else{
      this.mensaje_error('El formulario no es valido');
    }
  }


  delete_usuario(id:BigInt){
    Swal.fire({
      title: '¿Seguro que desea eliminar el registro?',
      text: "El registro se eliminará permanentemente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service_usuario.deleteUsuario(id).subscribe();
        Swal.fire(
          'Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        )
      }
    })
  
  }


  cargar_datos(usuario:Usuario){
    this.usuario_editar = usuario;
    console.log(this.usuario_editar)
  }

  listar_roles(){
    this.service_rol.getRoles().subscribe(res=>{
      this.roles = res;
      console.log(this.roles);
    })
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

  onTableDataChange(event: any) {
    this.current_page = event;
    //this.listar_productos();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.current_page = 1;
    //this.listar_productos();
  }


}
