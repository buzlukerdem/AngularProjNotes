// parametreli kullanım

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// validatorerror türünden geriye nesne döndürüyoruz.
export function capitalLetterValidator2(count: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        // control değeri alındı.
        const value = control.value;

        // büyük harfler elde edildi.
        const ascii: string[] = [];
        for (let i = 65; i <= 90; i++)
            ascii.push(String.fromCharCode(i));
        
        let state: boolean = true;
        for (let c = 0; c < count; c++) {
            if (ascii.indexOf(value[c]) == -1) {
                state = false;
                break;
            }
        }
        if(!state){
            return { ilkBüyükHarfZorunlu: count}
        }
        return null;
    };
}