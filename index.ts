import {getAll, getById} from "./products"

function main() {
    const todosLosProducts = getAll();
    
    const productSegunId = getById(2);
    
    console.log(todosLosProducts);
    
    console.log(productSegunId);
}
main();