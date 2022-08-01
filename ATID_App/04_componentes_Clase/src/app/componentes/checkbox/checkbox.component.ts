import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {

  form = [
    {
      val: "Mario Duron",
      isChecked: false
    },
    {
      val: "Francisco Davila",
      isChecked: true
    },
    {
      val: "Cristian Guerrero",
      isChecked: false
    },
    {
      val: "Lazaro Salinas",
      isChecked: true
    },
    {
      val: "Josue Coria",
      isChecked: true
    },
    {
      val: "Abraham Ramirez",
      isChecked: true
    },
    {
      val: "Giovanni Reta",
      isChecked: true
    },

  ]

  constructor() { }

  ngOnInit() { }

}
