import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Achievements } from './pages/achievements/achievements';
import { Contact } from './pages/contact/contact';
import { Faq } from './pages/faq/faq';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { TermsOfUse } from './pages/terms-of-use/terms-of-use';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'achievements', component: Achievements },
  { path: 'contact', component: Contact },
  { path: 'faq', component: Faq },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'terms-of-use', component: TermsOfUse },
  { path: '**', redirectTo: 'home' }
];
