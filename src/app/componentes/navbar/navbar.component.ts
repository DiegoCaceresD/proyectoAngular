import { Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Usuario} from "../../dominio/usuario";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {validarEspacios} from "../../validaciones/espacios.validator";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  persona:Usuario = new Usuario();
  formGroup:FormGroup;
  minimocaracteres: number = 2;
  minimocaracteresPass: number = 8;


  constructor(public modal:NgbModal, private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      nombre:['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        validarEspacios
      ])],
      apellido:['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        validarEspacios
      ])],
      email: ['', Validators.compose([
        Validators.email,
        validarEspacios
      ])],
      usuario: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        validarEspacios
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        validarEspacios
      ])]
    })

  }

  ngOnInit(): void {
  }


  onSubmit(inicioSesionForm: any ): void {
    console.log('Form values',inicioSesionForm.value )
    inicioSesionForm.form.reset();

  }



  enviarFormRF() {
    console.log(this.formGroup)
    this.persona.nombre = this.formGroup.value.nombre;
    this.persona.apellido = this.formGroup.value.apellido;
    this.persona.email = this.formGroup.value.email;
    this.persona.usuario = this.formGroup.value.usuario;
    this.persona.password = this.formGroup.value.password;
    this.formGroup.reset()
  }
}

