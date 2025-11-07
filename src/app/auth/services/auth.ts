import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Auth {
    login(value: Partial<{ email: string | null; password: string | null; }>) {
      throw new Error('Method not implemented.');
    }
    private baseUrl = "http://127.0.0.1:3000"// Solo para prueba debería ir "http://127.0.0.1:3000"
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