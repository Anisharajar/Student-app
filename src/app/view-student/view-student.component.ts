import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
data=[
  {name:"Anu",age:"20"}
  {name:"Anoop",age:"29"}
  {name:"Ananya",age:"22"}
  {name:"Dahya",age:"21"}
  {name:"Majunu",age:"27"}
  {name:"Diya",age:"25"}
  {name:"Laya",age:"25"}

]
}
