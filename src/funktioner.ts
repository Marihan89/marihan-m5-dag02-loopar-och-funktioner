// Dag 2, del 2: Funktioner. Gör ALLA tester gröna på tests.html.
// Regler: skriv funktionerna själv, i den här filen. Ändra inte tests.ts.
// Röda understrykningar tills du skrivit return är normalt: TypeScript vet att funktionen ska ge ett värde.

// 1. Ska returnera priset som text med " kr".
//    Heltal utan decimaler: formateraPris(35) ger "35 kr".
//    Decimaltal med två decimaler och komma: formateraPris(91.8) ger "91,80 kr".
export function formateraPris(pris: number): string {
    // TODO
    if (Number.isInteger(pris)) return `${pris} kr`
    else {
        return `${pris.toFixed(2).replace('.', ',')} kr`
    }
}

// 2. Momsdelen av ett pris med 12 % moms (fiktiv sats)
// , avrundad till två decimaler.
//    momsDel(112) ger 12.
export function momsDel(pris: number): number {
    return Math.round(((pris * 12) / 112) * 100) / 100
    // TODO
}

// 3. Priset efter rabatt i procent. medRabatt(100, 10) ger 90.
export function medRabatt(pris: number, procent: number): number {
    // TODO
    return (pris * (100 - procent)) / 100

    //orrrrrrrrrrrrrrrrrrr
    //  return pris-pris*procent/100
}

// 4. Är kaféet öppet? Vardagar 7–18, helger (lördag, söndag) 9–16.
//    Öppnar vid starttimmen, stänger vid sluttimmen (18 är stängt).
export function ärÖppet(veckodag: string, klockslag: number): boolean {
    let weekdays = ['MÅNDAG', 'TISDAG', 'ONSDAG', 'TORSDAG', 'FREDAG']
    if (
        (weekdays.includes(veckodag.toUpperCase()) &&
            klockslag >= 7 &&
            klockslag <= 17) ||
        (!weekdays.includes(veckodag.toUpperCase()) &&
            klockslag >= 9 &&
            klockslag <= 15)
    )
        return true
    else return false
    // TODO
}

// 5. Summan av alla tal i listan, med en loop. summa([1, 2, 3]) ger 6.
export function summa(tal: number[]): number {
    let sum: number = 0
    // TODO
    if (tal.length > 0) {
        for (const t of tal) sum += t
    }
    return sum
}

// 6. Medelvärdet. snitt([2, 4, 6]) ger 4. Tom lista ger 0.
export function snitt(tal: number[]): number {
    // TODO
    let sum: number = 0
    if (tal.length > 0) {
        for (let i = 0; i < tal.length; i++) {
            sum += tal[i]
        }
        return sum / tal.length
    } else return sum
}

//orrrrrrrrrrrrrrrrrrrrrr

/*
   let sum: number = 0
  for (let i = 0; i < tal.length; i++) {
            sum += tal[i]
        }
        return tal.length  > 0 ?  sum/  tal.length : sum

*/

// 7. Det största talet, med en loop. största([3, 9, 4]) ger 9. Tom lista ger undefined.
export function största(tal: number[]): number | undefined {
    if (tal.length === 0) return undefined
    else {
        let m: number = tal[0]
        for (const t of tal) {
            if (t > m) m = t
        }

        return m
        // TODO
    }
}

// 8. Upprepa en text. upprepa("ab", 3) ger "ababab". Använd en loop.
export function upprepa(text: string, antal: number): string {
    // TODO
    return text.repeat(antal)
}

// 9. En kvittorad. kvittorad("Kaffe", 2, 32) ger "2 x Kaffe: 64 kr".
//    Använd formateraPris från uppgift 1.
export function kvittorad(namn: string, antal: number, pris: number): string {
    // TODO
    let total: number = antal * pris
    return `${antal} x ${namn}: ${formateraPris(total)}`
}

// 10. Pilfunktioner. Skriv dem själv med const och =>.
//     dubbla(4) ger 8. ärJämnt(4) ger true.
export const dubbla = (n: number): number => {
    // TODO
    return n * 2
}
//const dubbla = (n: number): number => n * 2
const double = (n: number): number => n * 2

export const ärJämnt = (n: number): boolean => {
    // TODO
    return n % 2 === 0 ? true : false
}
//const ärJämnt = (n: number): boolean => (n % 2 === 0 ? true : false)
const isEven = (n: number): boolean => (n % 2 === 0 ? true : false)

//Arrow function is shorter and also asign the return value directly
//without using a return keyword

//Extras
export function Reciept(name: string, price: number, num: number): string {
    let total: number = num * price
    let vat: number = total * 0.12
    let ordertotal: number = total + vat
    let recp = `${num} X ${name}        ${formateraPris(total)}
=================================================
SubTotal :              ${total}
Tax :                   ${vat}
Total :                 ${formateraPris(ordertotal)}`

    return recp
}
