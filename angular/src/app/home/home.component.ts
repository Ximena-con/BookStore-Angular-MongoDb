import { AuthService,ConfigStateService} from '@abp/ng.core';
import { Component,OnInit,ChangeDetectorRef} from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { SessionStateService } from '@abp/ng.core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  //private _changeDetectionRef : ChangeDetectorRef

  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  // constructor(private oAuthService: OAuthService, private authService: AuthService,private config: ConfigStateService,private applicationConfigurationService: ApplicationConfigurationService) 
  // {
  //   //  this.applicationConfigurationService.getConfiguration().subscribe(myconfig => {
  //   //  console.log("11111111111");
  //   //  console.log(myconfig);
  //   //   myconfig.localization.currentCulture.cultureName="en";
  //   //   this.config.setState(myconfig);
  //   // })
  // }

  
  login() {
    this.authService.initLogin();
    
  }

  constructor(private oAuthService: OAuthService, private authService: AuthService, private sessionState: SessionStateService,private config: ConfigStateService) { }

  

  ngOnInit() : void {
    //const config = this.config.getAll();
    this.onChangeLang("en");
    // this._changeDetectionRef.detectChanges();
    
  }

  onChangeLang(cultureName: string) {
    this.sessionState.setLanguage(cultureName);
    
    }

}
