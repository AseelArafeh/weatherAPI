import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

	transform(aroundCities, name) :any {
		if( !name )
			return aroundCities;
		return aroundCities.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
	}

}
