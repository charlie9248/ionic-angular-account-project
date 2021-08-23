import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../account.service';
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.page.html',
  styleUrls: ['./account-list.page.scss'],
})
export class AccountListPage implements OnInit {

  accounts = [];
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.getAllAccountDetails();
  }

  getAllAccountDetails(){
    this.accountService.getAccount().subscribe(data => {
      this.accounts = data;
      console.log(this.accounts);
    });
  }

  addAcount(){

    this.accountService.addUserAccount().subscribe(data => {
      console.log('diya duma');
      console.log(data);
    },err=>{
      console.log(err);
    });
  }

}
