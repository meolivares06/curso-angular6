import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  item_list: string[] = ["Cras justo odio", "Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac","Vestibulum at eros"];
  constructor() { }

  ngOnInit() {
  }

}
