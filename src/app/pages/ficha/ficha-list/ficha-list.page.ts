import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FichaService } from 'src/app/services/ficha.service';
import { LoadingUtil } from 'src/app/utils/loading-util';

@Component({
  selector: 'app-ficha-list',
  templateUrl: './ficha-list.page.html',
  styleUrls: ['./ficha-list.page.scss'],
})
export class FichaListPage implements OnInit {

  fichas: any[] = []

  constructor(
    private authService: AuthService,
    private fichaService: FichaService,
    private loadingUtil: LoadingUtil
  ) { }

  ngOnInit() {
    this.getFichasForMorador()
  }

  async getFichasForMorador(refresher?) {
    const loader = await this.loadingUtil.criarLoading()

    loader
      .present()
      .then(() => {
        // this.fichaService.getFichasFullForMorador(this.authService.getLoggedUser().id)
        this.fichaService.getFichasFullForMorador("5ed5c5bc9279a41bfc9a4c57")
          .subscribe(response => {
            this.fichas = response as any[]
            loader.dismiss()

            if (refresher) refresher.target.complete()
          })
      })
  }
}
