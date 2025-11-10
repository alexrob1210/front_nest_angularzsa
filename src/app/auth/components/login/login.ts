import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private auth = inject(Auth); // Cambiado de 'http' a 'auth' para mayor claridad
  private router = inject(Router);
  
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", Validators.required)
  });

  funIngresar() {
    // Verificar si el formulario es válido
    if (this.loginForm.valid) {
      this.auth.loginComWest(this.loginForm.value).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(["/admin"]); // Corregido: navigate en lugar de navigator
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Formulario inválido');
      // Marcar todos los campos como touched para mostrar errores
      this.loginForm.markAllAsTouched();
    }
  }
}