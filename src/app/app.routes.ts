import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    //HOME
    {
        path: '',
        component: MainComponent
    },
    //NOT FOUND
    {
        path: '**',
        component: MainComponent
    }
];
