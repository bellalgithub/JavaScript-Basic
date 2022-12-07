
let name = 'A quick Brown Fox Jumps Over the lazy dog ';

console.log(name.toLowerCase());
console.log(name.toUpperCase());

console.log(name.indexOf('Jumps')); // To know the index position ----Output: 18


console.log(name.indexOf('jumps'));// To know the index position ----Output: -1 [not exist]

console.log(name.split('Fox')); // Spliting and creaing a new array

/* Output: 

[ 'A quick Brown ', ' Jumps Over the lazy dog ' ]

 */


console.log(name.split(' '));     // Creating a new array with spliting with space------

/* Output: 
[
    'A',     'quick',
    'Brown', 'Fox',
    'Jumps', 'Over',
    'the',   'lazy',
    'dog',   ''
  ]
 */
