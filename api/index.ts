import { hello } from './utils.ts'
import "https://deno.land/x/dotenv@v0.4.1/load.ts"

console.log(hello("john"));
console.log(hello("Sarah"));
console.log(hello("kai"));

const name = Deno.args[0];

console.log(hello(name));

console.log(Deno.env.get('JWT_KEY'))
