import { Component, OnInit } from '@angular/core';
import { BatarangService } from '../batarang.service';

@Component({
  selector: 'app-batcave',
  templateUrl: './batcave.component.html',
  styleUrls: ['./batcave.component.sass'],
  providers: [BatarangService]
})
export class BatcaveComponent implements OnInit {

  MoviesArray: any[] = [];
  decadeFilters = [
    {
      label: "2000's",
      min: 2000,
      max: 2009,
	  active: false
    },
    {
      label: "1990's",
      min: 1990,
      max: 1999,
	  active: false,
    }
  ];
  private allFilter = {
      min: 1800,
      max: 2200,
	  active: true,
  };
  activeFilter = this.allFilter;

  constructor(private batarangService: BatarangService) { }

  updateActiveFilter(filter: any) {
    
    if (filter.active) { // Toggle off if already active
      filter.active = false;
      this.activeFilter = this.allFilter;
    } else { // Otherwise activate it
      if (this.activeFilter) this.activeFilter.active = false;
      filter.active = true;
      this.activeFilter = filter;
    }
  }

  ngOnInit() {
    this.batarangService.getMovies().subscribe((moviesearch: any)=>{ // Get list of movies
      this.MoviesArray = moviesearch.Search;
	  for (let i = 0; i < this.MoviesArray.length ; i++){
		this.batarangService.getMovie(this.MoviesArray[i].imdbID).subscribe((batmovie: any)=>{ // Get details for each movie
		  this.MoviesArray[i] = batmovie;
		})  
	  }
    })
  }

}