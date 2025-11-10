import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class Auth {
    
    private baseUrl=environment.urlServidor
    
    private http = inject(HttpClient);
    
    // Constructor vacío o puedes eliminarlo si no necesitas inicializar nada
    constructor() { }

    loginComWest(credenciales: any) {
      
      return this.http.post<any>(`${this.baseUrl}/auth/login`,credenciales);

    }

    registroComWest(datos: any) {
        return this.http.post<any>(`${this.baseUrl}/register`, datos);
    }
}