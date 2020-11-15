import methods from "./mixins/methods"
import computed from "./mixins/computed"
import beforeUnmount from "./mixins/before-destroy"

export default function() {
  return {
    methods,
    computed,
    beforeUnmount
  };
}
