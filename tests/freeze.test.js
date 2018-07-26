import deepFreeze from "../lib"


const tryToMutate = (obj, key1, key2) => {
	obj[key1][key2] = "Mars"
}

test("try to mutate deeplyFreezedObj", () => {
	
	const obj = deepFreeze({
		a: "hello",
		b: {
			a: "hello",
			b: "world"
		}
	})

	expect(() => {
		tryToMutate(obj, "b", "c")
	}).toThrow("Cannot add property c, object is not extensible")

	expect(() => {
		tryToMutate(obj, "b", "b")
	}).toThrow("Cannot assign to read only property 'b' of object '#<Object>'")
})


test("try to mutate array", () => {
	
	const arr = deepFreeze([0, 7, [10], 42])

	// New property
	expect(() => {
		tryToMutate(arr, 2, 1)
	}).toThrow("Cannot add property 1, object is not extensible")

	// Modify existing property
	expect(() => {
		tryToMutate(arr, 2, 0)
	}).toThrow("Cannot assign to read only property '0' of object '[object Array]'")
})
