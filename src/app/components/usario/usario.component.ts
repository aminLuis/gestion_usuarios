import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usario',
  templateUrl: './usario.component.html',
  styleUrls: ['./usario.component.css']
})
export class UsarioComponent implements OnInit {


  form_producto_nuevo: FormGroup;
  form_producto_editar: FormGroup;

  constructor(public form:FormBuilder) {

    this.form_producto_nuevo = form.group({
      nombre:['',Validators.required],
      activo:['',Validators.required],
      correo:['',Validators.required]
    });

    this.form_producto_editar = form.group({
      nombre:['',Validators.required],
      activo:['',Validators.required],
      correo:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

}
