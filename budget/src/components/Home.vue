<template>
    <div id="amounts" class="amount">
        <h3>Expenses for the Year : <span :style="{color:'#71D6C0'}">{{ currentYear }}</span> </h3>
        <DateSelect @month-selected="totalAmount"/>
        <h3>Salary : <span :style="{color:'#71D6C0'}">${{salary}}</span></h3>
        <h3>Expense : <span :class="[totalAmount >= salary ? 'overloaded':'money']">${{currentExpense}}</span></h3>
    </div>
    <div class="text-center">
        <img src="../assets/savemoney.jpeg" style="width: 50px; vertical-align: middle;"/>
        <span> Tip : Follow 50%(spend)-30%(save)-20%(invest) rule </span>
    </div>
    <ExpensesList :expenses="filteredExpenses" @delete-expense="deleteExpense"/>
    
</template>

<script>
    import ExpensesList from './ExpensesList.vue';
    import DateSelect from './UI/DateSelect.vue'
    import {expenses} from  '../data/ExpensesData.js';
    

    export default {
        name : 'Home-Component',
        data(){
            return{
                salary : 5000,
                expenses : expenses,
                selectedMonth : 3,
                currentExpense : 0,
                currentYear: new Date().getFullYear()
            }
        },
        components :{
            ExpensesList,
            DateSelect,
            
        },
        mounted(){
            this.totalAmount(this.selectedMonth);
        }, 
        methods: {
            totalAmount(month) {
                this.selectedMonth = month
                this.currentExpense = this.expenses
                    .filter(expense => Number(expense.day.split('-')[1]) === this.selectedMonth) // filter by selected month
                    .reduce((acc, expense) => acc + expense.amount, 0);
                
            },

            deleteExpense(id){
                if(confirm('Are you sure?')){
                    this.expenses = this.expenses.filter((expense) => expense.id !== id)
                }
            }
        },
        computed: {
            filteredExpenses() {
                return this.expenses.filter(expense => Number(expense.day.split('-')[1]) === this.selectedMonth);
            }
    },
    }   
</script>

<style scoped>
    .amount{
        display: flex;
        justify-content: space-evenly;
    }
    .money{
        color:#71D6C0
    }
    .overloaded{
        color: rgb(251, 137, 123);
    }
    .text-center {
        text-align: center;
    }
</style>