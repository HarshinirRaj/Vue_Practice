<template>
          <div class="ag-courses_item">
            <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>
      
              <div class="ag-courses-item_title">
                {{ expense.text }}
              </div>
              <div class="ag-courses-item_date-box">
                <span class="ag-courses-item_date">
                 {{expense.day}}
                </span>
              </div>
              <div class="ag-courses-item_date-box">
                Amount:
                <span class="ag-courses-item_date">
                 ${{expense.amount}}
                 <span>
                    <i class="fas fa-trash" title="Delete" @click="$emit('delete-expense',expense.id)"></i>
                </span>
                    <span>
                      <router-link :to="{ name: 'edit-expense', params: { id: expense.id }}" class="link">
                        <i class="fas fa-pencil-alt" title="Edit"></i>
                      </router-link>
                    </span>
                </span>
              </div>
            </div>
          </div>
</template>

<script>
    export default{
        name:'ExpenseItem-Component',
        props:{
            expense : Object
        }
    }
</script>

<style scoped>
    .fas {
        color: #71D6C0;
        float : right; 
        padding-right:20px
    }
      body {
        background-color: #000;
      }
      
      .ag-courses_item {
        -ms-flex-preferred-size: calc(33.33333% - 30px);
        flex-basis: calc(33.33333% - 30px);
      
        margin: 0 15px 30px;
      
        overflow: hidden;
      
        border-radius: 28px;
      }
      .ag-courses-item_link {
        display: block;
        padding: 30px 20px;
        background-color: #2c3e50;
      
        overflow: hidden;
      
        position: relative;
      }
      .ag-courses-item_link:hover,
      .ag-courses-item_link:hover .ag-courses-item_date {
        text-decoration: none;
        color: #FFF;
      }
      .ag-courses-item_link:hover .ag-courses-item_bg {
        -webkit-transform: scale(10);
        -ms-transform: scale(10);
        transform: scale(10);
      }
      .ag-courses-item_title {
        min-height: 40px;
        margin: 0 0 25px;
      
        overflow: hidden;
      
        font-weight: bold;
        font-size: 30px;
        color: #FFF;
      
        z-index: 2;
        position: relative;
      }
      .ag-courses-item_date-box {
        font-size: 18px;
        color: #FFF;
      
        z-index: 2;
        position: relative;
      }
      .ag-courses-item_date {
        font-weight: bold;
        color: #71D6C0;
      
        -webkit-transition: color .5s ease;
        -o-transition: color .5s ease;
        transition: color .5s ease
      }
      .ag-courses-item_bg {
        height: 128px;
        width: 128px;
        background-color: rgb(251, 137, 123);
      
        z-index: 1;
        position: absolute;
        top: -75px;
        right: -75px;
      
        border-radius: 50%;
      
        -webkit-transition: all .5s ease;
        -o-transition: all .5s ease;
        transition: all .5s ease;
      } 
      
      @media only screen and (max-width: 979px) {
        .ag-courses_item {
          -ms-flex-preferred-size: calc(50% - 30px);
          flex-basis: calc(50% - 30px);
        }
        .ag-courses-item_title {
          font-size: 24px;
        }
      }
      
      @media only screen and (max-width: 767px) {
        .ag-format-container {
          width: 96%;
        }
      
      }
      @media only screen and (max-width: 639px) {
        .ag-courses_item {
          -ms-flex-preferred-size: 100%;
          flex-basis: 100%;
        }
        .ag-courses-item_title {
          min-height: 72px;
          line-height: 1;
      
          font-size: 24px;
        }
        .ag-courses-item_link {
          padding: 22px 40px;
        }
        .ag-courses-item_date-box {
          font-size: 16px;
        }
      }
</style>