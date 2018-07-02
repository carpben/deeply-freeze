import deepFreeze from "../lib";

const obj = deepFreeze({
  a: "hello",
  b: {
    a: "hello",
    b: "world"
  }
});

const tryToMutate = (obj, key1, key2) => {
  try {
    obj[key1][key2] = "Mars";
  } catch (e) {
    throw "couldn't mutate";
  }
};

test("try to mutate deeplyFreezedObj", 
	() => {
		expect(() => {
			tryToMutate(obj, "b", "b")
		})		
		.toThrow("couldn't mutate")
})
