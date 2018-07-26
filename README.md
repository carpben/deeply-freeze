# Deeply-Freeze

### Description 
Deeply freezes JS objects (and arrays) effeciently. 

### Usage 
```
import df from 'deeply-freeze';
const obj = df({
	a: "hello", 
	b: {
		a: "world", 
		b: [1,2,[3,4]]
	}
})
```
This creates object 'obj' that is deeply frozen. Neither the object, neither any of the properties (and their properties etc.) can be changed. Trying to mutate the object will not effect the object, and under 'strict mode' will return an error. 

### How it works 
The main function calls itself recursively for each of the properties. It ignores primitives and objects that have already been deeply-frozen. after that it feezes the object itself, and leaves a trace so it can recognize that this object has been deeply frozen in the future. 
