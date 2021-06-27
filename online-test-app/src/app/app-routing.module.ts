import { AddQuestionsComponent } from './components/add-questions/add-questions.component';
import { AdminComponent } from './components/admin/admin.component';
import { ResultComponent } from './components/result/result.component';
import { ReviewComponent } from './components/review/review.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  // {path:'blog',component:BlogComponent,canActivate:[AuthGuard]},
  {path:'quiz',component:QuizComponent},
  {path:'review',component:ReviewComponent},
  {path:'result',component:ResultComponent},
  {path:'quiz/admin',component:AdminComponent},
  {path:'quiz/admin/addQuestions',component:AddQuestionsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
