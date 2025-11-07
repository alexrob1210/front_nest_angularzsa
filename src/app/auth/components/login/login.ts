import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth'; // Asegúrate de que esta ruta es correcta y que Auth es un servicio con método login.
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private auth = inject(Auth); // Cambiado de 'http' a 'auth' para coincidir con el uso.
  
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", Validators.required)
  });

  funIngresar() {
    this.auth.loginComWest(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}