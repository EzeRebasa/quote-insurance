export function getDifferenceYear(year) {
    return new Date().getFullYear() - year;
}

// calculate the total to pay according to the brand
export function calculateBrand(brand) {
    let increment;

    switch(brand) {
        case 'european':
            increment = 1.30;
            break;
        case 'american':
            increment = 1.15;
            break;
        case 'asiatic':
            increment = 1.05;
            break;
        default:
            break;
    }
    return increment;
}


// Calculate type of insurance
export function getPlan( plan ) {
    return ( plan === 'basic' ) ? 1.20 : 1.50;
}

// Show the first letter in capital letter
export function firstUppercase( text ) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}