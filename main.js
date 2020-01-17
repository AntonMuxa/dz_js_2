let appartment = prompt('Введите номер квартиры');

const count_flat = 4;
const count_floor = 9;

let sum_count = count_flat * count_floor;
let num = parseInt(appartment / sum_count); 
if(appartment % sum_count != 0){
 num++;
}
 let except = num - 1;
 appartment = appartment - except * sum_count;
 appartment = Math.ceil(appartment / count_flat);

alert('номер подъезда: ' + num + ', номер этажа: ' + appartment);