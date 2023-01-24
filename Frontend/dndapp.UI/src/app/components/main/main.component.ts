import { Component, OnInit } from '@angular/core';
import { RolldiceService } from '../../services/rolldice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  d4values: any;
  d4total: number = 0;
  d6values: any;
  d6total: number = 0;
  d8values: any;
  d8total: number = 0;
  d10values: any;
  d10total: number = 0;
  d12values: any;
  d12total: number = 0;
  d20values: any;
  d20total: number = 0;
  d100values: any;
  d100total: number = 0;

  constructor(private diceservice:RolldiceService){

  }

  ngOnInit(): void {
  }

  rolld4(numofdice: any){
    this.d4total = 0;
    this.diceservice.rolld4(Number(numofdice)).subscribe(
      (resp) =>{
        this.d4values = resp
        console.log(this.d4values)
        this.d4values.forEach((element: number) => {
      this.d4total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  rolld6(numofdice: any){
    this.d6total = 0;
    this.diceservice.rolld6(Number(numofdice)).subscribe(
      (resp) =>{
        this.d6values = resp
        console.log(this.d6values)
        this.d6values.forEach((element: number) => {
      this.d6total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  rolld8(numofdice: any){
    this.d8total = 0;
    this.diceservice.rolld8(Number(numofdice)).subscribe(
      (resp) =>{
        this.d8values = resp
        console.log(this.d8values)
        this.d8values.forEach((element: number) => {
      this.d8total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  rolld10(numofdice: any){
    this.d10total = 0;
    this.diceservice.rolld10(Number(numofdice)).subscribe(
      (resp) =>{
        this.d10values = resp
        console.log(this.d10values)
        this.d10values.forEach((element: number) => {
      this.d10total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  rolld12(numofdice: any){
    this.d12total = 0;
    this.diceservice.rolld12(Number(numofdice)).subscribe(
      (resp) =>{
        this.d12values = resp
        console.log(this.d12values)
        this.d12values.forEach((element: number) => {
      this.d12total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  rolld20(numofdice: any){
    this.d20total = 0;
    this.diceservice.rolld20(Number(numofdice)).subscribe(
      (resp) =>{
        this.d20values = resp
        console.log(this.d20values)
        this.d20values.forEach((element: number) => {
      this.d20total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  rolld100(numofdice: any){
    this.d100total = 0;
    this.diceservice.rolld100(Number(numofdice)).subscribe(
      (resp) =>{
        this.d100values = resp
        console.log(this.d100values)
        this.d100values.forEach((element: number) => {
      this.d100total += element
    });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}