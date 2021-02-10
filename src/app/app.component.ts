
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Component, ChangeDetectorRef } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  template: `
  <amplify-authenticator *ngIf="authState !== 'signedin'"></amplify-authenticator>



  <div *ngIf="authState === 'signedin' && user" class="App">
  <nav class="navbar navbar-expand-md d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
      <h5 class="my-0 mr-md-auto font-weight-normal">{{title}}</h5>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              
            </li>
        </ul>
    </div>
    <div class="mx-auto order-0">
      <span>{{user.username}}</span>
  
    </div>
  
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              
              <a class="nav-link" routerLink="/" routerLinkActive="active">Home</a>
            </li>
            <li class="nav-item">
              <button class="btn btn-warning text-white" (click)="signOut()">SignOut</button>
                <!-- <a class="nav-link" href="#">Link</a> -->
            </li>
        </ul>
    </div>
  </nav>
  `,
  styles: []
})
export class AppComponent {
  title = 'amplify-angular-auth';
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
      console.log('this',this);
    })
  }

  public signOut = () => {
    console.log('sign out');
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
