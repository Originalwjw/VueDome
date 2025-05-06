<template>
  <div>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <hr>
    <select v-model="selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br />
    <span>Selected: {{ selected }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: "true",
      checkedNames: [],
      selected:''
    };
  },
};
</script>
