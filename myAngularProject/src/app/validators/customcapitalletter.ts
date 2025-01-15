import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function capitalLetterValidator(control: AbstractControl): ValidationErrors | null {
    // control değeri alındı.
    const value = control.value;

    // büyük harfler elde edildi.
    const ascii: string[] = [];
    for (let i = 65; i <= 90; i++)
        ascii.push(String.fromCharCode(i));
    if (ascii.indexOf(value[0]) == -1) {
        return { BüyükHarfZorunlu: true }
    }

    return null;
}

