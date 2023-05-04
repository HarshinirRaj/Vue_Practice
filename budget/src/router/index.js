import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue'
import AddExpense from '../components/AddExpense.vue'

const routes = [
    {
        path : '/',
        name : 'home',
        component : Home
    },

    {
        path : '/add-expense',
        name : 'add-expense',
        component : AddExpense
    },
    { 
        path: '/edit-expense/:id', 
        name : 'edit-expense',
        component: AddExpense 
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router