import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(navCtrl, alertService) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.AppName = 'e-Cupom33';
        this.AppVersion = '0.0.1';
        this.AppGreetings = 'Bem-Vindos ao e-Cupom33!';
    }
    Tab1Page.prototype.itemSelected = function (item) {
        //if(item.name ==='Produtos'){
        this.alertService.presentToast("Acessando...: " + item.name);
        this.navCtrl.navigateRoot(item.route);
        //}
    };
    Tab1Page.prototype.ngOnInit = function () {
        if (!sessionStorage.SessionHashkey) {
            this.navCtrl.navigateRoot('/login');
        }
        //this.alertService.showLoader('Carregando... aguarde!!!');
        this.items = [
            {
                id: 1,
                name: "Produtos",
                icon: "assets/imgs/Produtos.png",
                details: "Procure aqui o que você precisa encontrar.",
                route: "/login"
            }
        ];
        this.items.push({
            id: 2,
            name: "Preços",
            icon: "assets/imgs/Consultar-Precos.png",
            details: "Consulte os preços de forma rápido usando a camera do seu celular.",
            route: "/login"
        });
        this.items.push({
            id: 4,
            name: "Promoções",
            icon: "assets/imgs/Promocoes.png",
            details: "Encontre todas as promoções e aproveite.",
            route: "/login"
        });
        this.items.push({
            id: 5,
            name: "Favoritos",
            icon: "assets/imgs/Compras.png",
            details: "Produtos marcados como favoritos.",
            route: "/login"
        });
        this.items.push({
            id: 6,
            name: "Compras",
            icon: "assets/imgs/Compras.png",
            details: "Tudo que você colocou no carrinho, salvou ou comprou antes.",
            route: "/login"
        });
        this.items.push({
            id: 6,
            name: "Atendimento",
            icon: "assets/imgs/Consultar-Precos.png",
            details: "Atendimento no Caixa, Expedição ou OnLine.",
            route: "/login"
        });
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: './tab1.page.html',
            styleUrls: ['./tab1.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AlertService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map