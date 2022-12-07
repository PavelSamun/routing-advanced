import {Injectable} from '@angular/core';
import {delay, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string | null = null;

  constructor() {
  }

  login(login: string, password: string): Observable<boolean> {

    const observable$ = of({login: 'admin', password: '123'}).pipe(delay(3000))

    return observable$.pipe(
      map(res => {
        return login === res.login && password === res.password ? this.isLoggedIn = true : false;
      })
    );
  };

  logout(): void {
    this.isLoggedIn = false
  }
}
