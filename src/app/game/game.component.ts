import { Component, Input, OnInit } from '@angular/core';
import { Piece } from '../piece';
import { Location } from '../location'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() name: string;

  alphabet: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

  numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8]

  location: Location[][];

  selectedLocation: Location;

  constructor() { }

  ngOnInit(): void {

    this.location = new Array<Array<Location>>()

    for (let i = 0; i < 8; i++) {
      this.location.push(new Array<Location>())
      for (let j = 0; j < 8; j++) {

        if ((i == 0 && j == 0) || (i == 0 && j == 7)) {
          this.location[i].push(new Location(new Piece('assets/images/castle.png')))
        }
        else if (i == 0 && (j == 1 || j == 6)) {
          this.location[i].push(new Location(new Piece("assets/images/knight.png")));
        }
        else if (i == 0 && (j == 2 || j == 5)) {
          this.location[i].push(new Location(new Piece("assets/images/bishop.png")));
        }
        else if (i == 0 && j == 3) {
          this.location[i].push(new Location(new Piece("assets/images/check.png")));
        }
        else if (i == 0 && j == 4) {
          this.location[i].push(new Location(new Piece("assets/images/king.png")));
        }
        else if (i == 1) {
          this.location[i].push(new Location(new Piece("assets/images/pawn.png")));
        }
        else if (i == 7 && (j == 0 || j == 7)) {
          this.location[i].push(new Location(new Piece("assets/images/castle-w.png")));
        }
        else if (i == 7 && (j == 1 || j == 6)) {
          this.location[i].push(new Location(new Piece("assets/images/knight-w.png")));
        }
        else if (i == 7 && (j == 2 || j == 5)) {
          this.location[i].push(new Location(new Piece("assets/images/bishop-w.png")));
        }
        else if (i == 7 && j == 3) {
          this.location[i].push(new Location(new Piece("assets/images/check-w.png")));
        }
        else if (i == 7 && j == 4) {
          this.location[i].push(new Location(new Piece("assets/images/king-w.png")));
        }
        else if (i == 6) {
          this.location[i].push(new Location(new Piece("assets/images/pawn-w.png")));
        }
        else { this.location[i].push(new Location(new Piece(""))); }
      }

    }
    console.log(this.location);

  }

  select(i,j){
    if (this.selectedLocation) {
      this.selectedLocation.highlight = false      
    }
    this.selectedLocation = this.location[i][j]
    this.selectedLocation.highlight=true    
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("img");
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("img", ev.target.id);
  }

}
