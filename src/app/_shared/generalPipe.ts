import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'bsbFormat'
})
export class BsbFormatPipe implements PipeTransform {
    transform(value: string) {
        return `${value}1`
    }
}