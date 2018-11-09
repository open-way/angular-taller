// y por último la aplicación a leída desde el módulo raíz, llamado app por convenio.
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// condiciones para ejecutar en modo desarrollo o producción
if (environment.production) {
  enableProdMode();
}

// arranque de la aplicación invocando al módulo raíz
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
