<template>
    <div class="event-content" v-if="allList.length">
        <div class="event-box" >
            <!--<div class="event-tab" @click.self="change(0)">
                今天
                <span :class="{'close-span': !collapse[0].show}"></span>
            </div>-->
            <el-collapse v-model="activeNames"  >
                <el-collapse-item title="今天" name="1" @click='change(0)'>
                     <ul v-if="todayList.length" >
                        <li class="event-list" v-for="item in todayList">
                            <input type="text" class="edit">
                            <div class="price">
                                <span class="price-type">{{item.type}}</span>
                                <span class="price-num">{{item.num}}元</span>
                            </div>
                            <button class="cancel-btn" @click="delList(item)">删除</button>
                        </li>
                    </ul>
                </el-collapse-item>
                <el-collapse-item title="历史花销" name="2">
                     <ul >
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
                </el-collapse-item>
            </el-collapse>
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
                        show: false,
                    },
                    {
                        show: false,
                    }
                ],
                activeNames: ['1']
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
        .event-tab,.el-collapse-item__header {
            position: relative;
            height: 34px;
            line-height: 34px;
            font-size: 16px;
            padding-left: 20px;
            border-bottom: 1px solid #fff;
            box-sizing: border-box;
            color: #fff;
            cursor: pointer;
            span,i {
                position: absolute;
                right: 20px;
                top: 8px;
                width: 10px;
                height: 10px;
                content: '';
                // transform: rotate(45deg);
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
            .el-collapse-item__wrap{
                transition: all .5s;
            }

            ul{
                display:block;
                // height:auto;
                transition: all 1s ease-in;
                &.move-enter-active{
                    animation: move-in 1s;
                }
                &.move-leave-active{
                    animation: move-out 1s;
                }
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