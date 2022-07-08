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
  {name:"Anu",age:"20",photo:"https://depositphotos.com/vector-images/female-avatar.html"},
  {name:"Anoop",age:"29",photo:"https://www.shutterstock.com/search/male-avatar"},
  {name:"Ananya",age:"22",photo:"https://www.vecteezy.com/free-vector/woman-avatar"},
  {name:"Dahya",age:"21",photo:"https://depositphotos.com/128525738/stock-illustration-woman-female-avatar-isolated.html"},
  {name:"Majunu",age:"27",photo:"https://pixabay.com/images/search/male%20avatar/"},
  {name:"Diya",age:"25",photo:"https://www.dreamstime.com/stock-illustration-female-avatar-icon-flat-style-female-user-icon-cartoon-woman-avatar-pink-hair-vector-stock-image91462795"},
  {name:"Laya",age:"25",photo:"https://pngtree.com/so/female-avatar"}

]
}
