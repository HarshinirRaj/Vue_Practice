<template>
    <div class="ag-format-container">
        <div :key="expense.id" v-for="expense in expenses" class="ag-courses_box">
            <ExpenseItem :expense="expense" @delete-expense="$emit('delete-expense',expense.id)"></ExpenseItem>
        </div>
    </div>
</template>

<script>
import ExpenseItem from './ExpenseItem.vue';

    export default{
        name:'ExpensesList-Component',
        props:{
            expenses : Array
        },
        components :{
            ExpenseItem,
        },
    }
</script>

<style scoped>
.ag-format-container {
    width: 1142px;
    margin: 10px 115px auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .ag-courses_box {
    width: 33%;
  }
</style>