import { PipeTransform, Pipe } from '@angular/core';
import { AntiqueModel } from './Antique.model';

@Pipe({
    name: 'antiqueitemFilter'
})
export class AntiqueFilterPipe implements PipeTransform {
    transform(newAntiqueItem: AntiqueModel[], searchTerm: string): AntiqueModel[] {
        if (!newAntiqueItem || !searchTerm) {
            return newAntiqueItem;
        }

        return newAntiqueItem.filter(newAntiqueItem =>
            newAntiqueItem.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
