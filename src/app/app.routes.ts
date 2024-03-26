import { Route } from '@angular/router';
import { LandingViewComponent } from './views/landing-view/landing-view.component';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'landing', pathMatch: 'full'},
    { path: 'landing', component: LandingViewComponent  },
];
