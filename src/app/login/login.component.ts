import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: string = 'admin';
  userPassword: string = '123';
  message: string = '';

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.setMessage()
  }

  login(): void {
    this.setMessage('Trying to log in...');

    this.authService.login(this.userLogin, this.userPassword).subscribe({
      next: (res: boolean) => {
        console.log(`Login observable result ${res}`)
        this.setMessage();

        if (!res) return

        this.router.navigate([
          this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/home'
        ]).then();
      },
      error: (err) => console.log(err)
    });
  }

  logout(): void {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage(msg: string = ''): void {
    if (msg) {
      this.message = msg
      return
    }

    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`

  }
}
