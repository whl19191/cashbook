<template>
    <div class="event-add">
        <span 
            v-for="type in types" 
            :class="{active:type.isActive}"
            @click="choose(type)"
            v-model="type.msg"
        >{{type.msg}}</span>
        <input type="text" class="n-input" @keyup.enter="submit" v-model="content" placeholder="又要剁手了">
        <button class="add-btn" @click="submit">提交</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                content:'',
                types:[
                    { id:1, msg:'饭钱',isActive:true},
                    { id:2,msg:'车钱',isActive:false},
                    { id:3,msg:'衣服',isActive:false},
                    { id:4,msg:'零食',isActive:false},
                ],
            }
        },
        computed:{

        },
        methods: {
            choose(type){
                let set = new Set(this.types);
                set.forEach(( value) => value.isActive = false)
                type.isActive = true;
            },
            submit(){
                let index = this.types.filter(function(item){
                            return item.isActive
                        })
                if(index.length && this.content){
                    let list = {
                        id:0,
                        type:index[0].msg,
                        num:this.content,
                        time:''
                    }
                    this.$store.dispatch('submit',list);
                    this.content = '';
                    
                }
            },
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .event-add{
        position: relative;
        padding:30px 90px 30px 0;
        font-size: 16px;
        span{
            display: inline-block;
            padding:5px 20px;
            margin:0 10px 10px 0;
            border:1px solid #c0ccda;
            border-radius: 4px;
            cursor:pointer;
            background: #fff;
            color:#999;
            &.active{
                border:1px solid #db4c3f;
                color:#333;
            }
        }
        .n-input{
            width:100%;
            height:40px;
            padding:7px 10px;
            line-height: 26px;
            border:1px solid #c0ccda;
            border-radius:4px;
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            box-sizing: border-box;
            font-size:inherit;
            &:focus {
                outline: none;
            }
        }
        .add-btn{
            position: absolute;
            right:0;
            bottom:30px;
            width:80px;
            height:40px;
            line-height: 26px;
            color: #fff;
            background:#db4c3f;
            /*transition: background .3s ease-in;*/
            &:hover{
                background:#b54136;
            }
        }
    }
</style>