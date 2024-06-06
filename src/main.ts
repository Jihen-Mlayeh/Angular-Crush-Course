import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//bootstrap an angular app in a browser environement
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
