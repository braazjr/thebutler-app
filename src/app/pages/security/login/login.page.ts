import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingUtil } from 'src/app/utils/loading-util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulario: FormGroup;

  mensagem: any;

  iconForTheme: string = 'assets/icon/icon.png';

  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    private router: Router,
    private loadingUtil: LoadingUtil,
    // private events: Events
  ) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    this.iconForTheme = localStorage.getItem('selectedTheme') == 'light-theme' ? 'assets/icon/icon.png' : 'assets/icon/icon-white.png';
  }

  async entrar() {
    // const loader = await this.loadingUtil.criarLoading();

    // loader.present().then(() => {
    //   this.authService.login(this.formulario.get('email').value, this.formulario.get('senha').value)
    //     .subscribe(data => {
    //       this.authService.setUsuarioStorage(data.accessToken).then(() => {
    //         this.router.navigate(['/tabs']);
    //         this.events.publish('calendario:update', undefined);
    //       });
    //     }, error => {
    //       console.error(error.error);

    //       this.mensagem = error.error.message;
    //       setTimeout(() => this.mensagem = undefined, 2000);

    //       loader.dismiss();
    //     }, () => loader.dismiss());
    // });
  }
}
