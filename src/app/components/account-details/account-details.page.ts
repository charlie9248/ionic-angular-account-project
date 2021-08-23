import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccountService} from '../../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
})
export class AccountDetailsPage implements OnInit {

  amount;
  singleAccount;

  constructor(private router: ActivatedRoute , private accountService: AccountService) {}

  ngOnInit() {
    this.router.paramMap.subscribe(paraMap => {
      if(!paraMap.has('accountId')){
        return;
      }
      this.accountService.getSingleAccount(paraMap.get('accountId')).subscribe(data => {
        this.singleAccount = data;
        console.log(data);
      });
    });
  }


  onDepsitSubmit(id: string , amount: number){
    console.log(id ,  amount);
    this.accountService.depositToAccount(id , amount).subscribe(data=>{
      console.log('-----');
      console.log(data);
    } , err=>{
      console.log(err.message);
    });
  }

  onWithDraw(id: string , amount: number){
    this.accountService.withdraFromAccount(id , amount).subscribe(data =>{
      console.log('-----dddd');
      console.log(data);
    } , errr =>{

    });
  }

}
