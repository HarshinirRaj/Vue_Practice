<template>
    <div class="month-selector">
      <label for="month-dropdown">Month : </label>
      <select id="month-dropdown" v-model="selectedMonth" @change="handleMonthChange">
        <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name : 'DateSelect-Component',
    data() {
      return {
        selectedMonth: 3,
        months: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December',
        ],
      };
    },
    methods: {
        handleMonthChange() {
            this.$emit('month-selected', this.selectedMonth);
        },
    },
  };
  </script>

<style scoped>
  label{
    font-weight: bold;
  }
  .month-selector{
    margin-top: 20px;
  }
</style>
  