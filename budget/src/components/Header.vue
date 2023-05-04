<template>
    <header>
        <h1>
            <i class="fa fa-money-bill"></i>
            Budget Buddy
        </h1>
        <nav>
            <router-link to="/" class="link">Home</router-link>
            <router-link to="/add-expense" class="link">Add Expense</router-link>
          </nav>
    </header>
</template>

<script>
export default{
    name: 'Header-component',
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 83px;
        background-color: rgb(251, 137, 123);
    }
    h1{
        margin-left: 50px;
    }
     .link{
        margin-right: 20px;
        text-decoration: none;
        color: #2c3e50;
        font-size: larger;
    }

    .link:hover, .link:active{
        text-decoration: underline;
    } 
</style>