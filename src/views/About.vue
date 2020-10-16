<template>
<button @click="increment" title="click to increment">
  Counter is {{ state.count}}
</button>
  <p>
    Mouse position : {{ x }} {{ y }}
  </p>

</template>
<script>
import {reactive, computed} from "vue";
import { useMousePosition } from "../composable/useMousePosition";
export default {
  setup() {
    const state = reactive({
      count:0,
      double: computed(() => state.count * 2),
    });
    const { x, y } = useMousePosition();
    function increment() {
      state.count++
    }
    return {
      state,increment,x,y
    }
  }
}
</script>