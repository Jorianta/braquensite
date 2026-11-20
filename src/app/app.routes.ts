import { Routes } from '@angular/router';
import { HomePage } from './pages/Home.component';
import { GalleryPage } from './pages/Gallery.component';
import { GamesPage } from './pages/Games.component';
import { CharactersPage } from './pages/Characters.component';
import { BraqBioPage } from './pages/character-pages/braq-bio.page';
import { BraqBirdBioPage } from './pages/character-pages/braq-bird-bio.page';
import { TeenyTinyBioPage } from './pages/character-pages/teeny-tiny-bio.page';
import { DarrylBioPage } from './pages/character-pages/darryl-bio.page';
import { BigBirdBioPage } from './pages/character-pages/big-bird-bio.page';
import { FriendsPage } from './pages/Friends.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    // {
    //     path: 'Gallery',
    //     component: GalleryPage
    // },
    {
        path: 'Games',
        component: GamesPage
    },
    {
        path: 'Characters',
        component: CharactersPage,
    },
    {
        path: 'Friends',
        component: FriendsPage,
    },
    {
        path: 'Characters/Braq',
        loadComponent: () => BraqBioPage
    },
    {
        path: 'Characters/Braq_Bird',
        loadComponent: () => BraqBirdBioPage
    },
    {
        path: 'Characters/Teeny_and_Tiny',
        loadComponent: () => TeenyTinyBioPage
    },
    {
        path: 'Characters/Darryl',
        loadComponent: () => DarrylBioPage
    },
    {
        path: 'Characters/Big_Bird',
        loadComponent: () => BigBirdBioPage
    },

];
