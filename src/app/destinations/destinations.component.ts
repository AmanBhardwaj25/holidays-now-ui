import { Component, OnInit } from '@angular/core';
import {DestinationsService} from './destinations.service'
import { Destination } from './destinations.model';


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor(private service: DestinationsService) { }
  destinationList: Destination[];
  ngOnInit(): void {
    this.service.getDestinations().subscribe(data =>{
      this.destinationList = data;
    });

  }

}
