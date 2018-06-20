
var isAnObject = something => (typeof something === 'object' && something !== null);
Object.forVal = obj => fun => Object.keys(obj).forEach(key => fun(obj[key]));

const _IS_DEEPLY_FROZEN = "_isDeeplyFrozen"

export const deepFreeze = obj => {
   if (!isAnObject(obj)) return
   Object.forVal(obj)(
      propVal => {
         if (!isAnObject(propVal)) return
         if (propVal.hasOwnProperty(_IS_DEEPLY_FROZEN)) return
         deepFreeze(propVal);
      });
   Object.defineProperty(obj, _IS_DEEPLY_FROZEN, {
      enumerable: false,
      writable: false,
   });
   return Object.freeze(obj);
}

export default deepFreeze; 