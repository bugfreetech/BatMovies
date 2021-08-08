import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
	name: 'byDecade',
	pure: false
})
export class FilterPipe implements PipeTransform {
  transform(movies: any, years: any) {
    return movies.filter(function (movie:any) {
      return (
		(typeof years.min !== 'number' || movie.Year >= years.min) && 
		(typeof years.max !== 'number' || movie.Year <= years.max)
	  )
    })
  }
}