<template>
    <div class="event-content" v-if="allList.length">
        <div class="event-box" v-if="todayList.length" >
            <div class="event-tab" @click.self="beforeEnter">
                今天
                <span :class="{'close-span': !collapse[0].show}"></span>
            </div>
            <ul :class="{'close-ul': !collapse[0].show}" >
                <li class="event-list" v-for="item in todayList">
                    <input type="text" class="edit">
                    <div class="price">
                        <span class="price-type">{{item.type}}</span>
                        <span class="price-num">{{item.num}}元</span>
                    </div>
                    <button class="cancel-btn" @click="delList(item)">删除</button>
                </li>
            </ul>
        </div>
        <div class="event-box" v-if="otherList.length">
            <div class="event-tab"  @click.self="change(1)">
                历史花销
                <span :class="{'close-span': !collapse[1].show}"></span>
            </div>
            <ul :class="{'close-ul': !collapse[1].show}">
                <li class="event-list" v-for="item in otherList">
                    <input type="text" class="edit">
                    <div class="price">
                        <span class="price-type">{{item.type}}</span>
                        <span class="price-num">{{item.num}}元</span>
                        <span class="price-time">{{item.time}}</span>
                    </div>
                    <button class="cancel-btn" @click="delList(item)">删除</button>
                </li>
            </ul>
        </div>
    </div>
    <img src="../assets/zanwu.gif" alt="" v-else width="100%">
</template>     

<script>
    export default {
        data(){
            return {
                collapse:[
                    {
                        show: true,
                    },
                    {
                        show: false,
                    }
                ]
            }
        },
        computed: {
            todayList (){ return this.$store.getters.todayList},
            allList(){ return this.$store.state.allList},
            otherList(){ return this.$store.getters.otherList }
        },
        methods: {
            delList(item) {
                this.$store.dispatch('delList',item);
            },
            change(num){
                const show = this.collapse[num].show;
                this.collapse[num].show = !show;
            },
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .event-content {
        .event-tab {
            position: relative;
            height: 34px;
            line-height: 34px;
            font-size: 16px;
            padding-left: 20px;
            border-bottom: 1px solid #fff;
            box-sizing: border-box;
            color: #fff;
            cursor: pointer;
            span {
                position: absolute;
                right: 20px;
                top: 8px;
                width: 10px;
                height: 10px;
                content: '';
                border: {
                    top: 2px solid #fff;
                    right: 2px solid #fff;
                }
                transform: rotate(135deg);
                transition: transform .3s;
                &.close-span {
                    transform: rotate(45deg);
                }
            }
        }
        .event-box {
            list-style: none;
            overflow: hidden;
            border: {
                left: 1px solid #eee;
                right: 1px solid #eee;
            }
            transition: height .3s;
            ul{
                display:block;
                height:auto;
                transition: height .3s;
                &.close-ul{
                    display: none;
                    height:0px;
                }

            }
            .event-list {
                position: relative;
                min-height: 44px;
                line-height: 25px;
                padding: 10px 100px 10px 20px;
                box-sizing: border-box;
                border-bottom: 1px solid #eee;
                color: #373e40;
                input[type=checkbox] {
                    position: absolute;
                    left: 15px;
                    top: 12px;
                    width: 20px;
                    height: 20px;
                }
                .price-type{
                    display: inline-block;
                    width:80px;
                }
                .price-time{
                    float:right;
                }
                .edit{
                    display: none;
                }
                .cancel-btn {
                    position: absolute;
                    right: 10px;
                    top: 7px;
                    width: 50px;
                    height: 30px;
                    line-height: 30px;
                    padding: 0;
                    background: #fff;
                    border: 1px solid #c0ccda;
                    color: #666;
                    font-size: 12px;
                }
                .event-time {
                    position: absolute;
                    right: 10px;
                    top: 0;
                    line-height: 44px;
                    font-size: 12px;
                    color: #aaa;
                }
                .event-delete {
                    text-decoration: line-through;
                    color: #999;
                }
            }
        }
    }
</style>