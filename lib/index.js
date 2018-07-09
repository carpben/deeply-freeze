const isAnObject = something => (typeof something === "object" && something !== null)
const forVal = obj => fun => Object.keys(obj).forEach(key => fun(obj[key]))

const _IS_DEEPLY_FROZEN = "_isDeeplyFrozen"

const deepFreeze = obj => {
	if (!isAnObject(obj)) return
	forVal(obj)(
		propVal => { 
			if (!isAnObject(propVal)) return
			if (propVal.hasOwnProperty(_IS_DEEPLY_FROZEN)) return
			deepFreeze(propVal)
		})
	Object.defineProperty(obj, _IS_DEEPLY_FROZEN, {
		enumerable: false,
		writable: false,
	})
	return Object.freeze(obj)
}

export default deepFreeze 