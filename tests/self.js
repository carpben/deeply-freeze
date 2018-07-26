//const deepFreeze = require("../lib")
import deepFreeze from "../lib"
const obj = {
	a: "hello", 
	b: {
		a: "hello", 
		b: "world"
	}
}

deepFreeze(obj)

obj.b.b = "mars"