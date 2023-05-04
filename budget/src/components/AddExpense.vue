<template>
    <div class="image-bg">
        <img src="../assets/expense.jpeg"/>
    </div>
    <div class="container">
        <h2> Add Expense </h2>
        <form @submit="onSubmit" class="add-form">

            <div class="form-control">
                <label>Expense <i class="fas fa-asterisk required"></i></label>
                <input type="text" v-model="text" name="text" placeholder="Add Expense" :style="{'margin-left':'0'}" required="true"/>
            </div>

            <div class="form-control">
                <label>Day <i class="fas fa-asterisk required"></i></label>
                <input type="date" v-model="day" name="day" placeholder="Add Date" :style="{'margin-left':'0'}" required="true"/>
            </div>

            <div class="form-control">
                <label>Amount <i class="fas fa-asterisk required"></i> </label>
                <input type="number" v-model="amount" name="amount" :style="{'margin-left':'0'}" required="true"/>
            </div>
        
            <input type="submit" value="Save Expense" class="btn btn-block" />
        </form>
    </div>
</template>

<script>
    import {expenses} from  '../data/ExpensesData.js';

    export default{
        name : 'AddExpense-Component',
        data() {
            return{
                text : '',
                day : '',
                amount : ''
            }
        },
        created(){
            const existingExpenseData = expenses.find(expense => expense.id === this.$route.params.id)
            if(existingExpenseData){
                this.text = existingExpenseData.text;
                this.day = existingExpenseData.day;
                this.amount = existingExpenseData.amount
            }
        },
        methods:{
            onSubmit(e){
                e.preventDefault();

                if(!this.text){
                    alert('Please add a task!')
                    return
                }
                // updating the existing data
                if(this.$route.params.id){
                    const existingExpenseIndex = expenses.findIndex(expense => expense.id === this.$route.params.id)
                    expenses[existingExpenseIndex].text = this.text;
                    expenses[existingExpenseIndex].day = this.day;
                    expenses[existingExpenseIndex].amount = this.amount;
                }

                // adding new data
                else{
                    const newExpense = {
                        id : Math.floor(Math.random() * 100000),
                        text : this.text,
                        day : this.day,
                        amount : this.amount
                    }
                    
                    expenses.push(newExpense);
                    // localStorage.setItem('expenses', JSON.stringify(expenses));
                }

                this.text = ''
                this.day = ''
                this.amount = ''

                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

h2 {
    text-align: center;
    color: rgb(251, 137, 123);
    font-weight: bold;
}
.image-bg{
    position: absolute;
    opacity: 0.2;
    left: 33%;
    top: 33%;
}
.required{
    font-size: 0.5em;
    color: red;
}
.add-form {
    margin-bottom: 20px;
  }
  .container {
    position: relative;
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
  }

  .form-control {
    margin: 20px 20px 0 0;
  }
  .form-control label {
    display: block;
  }
  .form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
  .form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form-control-check label {
    flex: 1;
  }
  .form-control-check input {
    flex: 2;
    height: 20px;
  }

  .btn {
    display: inline-block;
    background: #71D6C0;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
    font-weight: bold;
  }
  .btn:focus {
    outline: none;
  }
  .btn:active {
    transform: scale(0.98);
  }
  .btn-block {
    display: block;
    width: 50%;
    margin: 40px 120px 10px;
  }
</style>