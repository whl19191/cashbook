# cashbook

> A Vue.js project

最简单版本，只有基础功能( vue2.0 + vuex2.0 + webpack2.0)
预览[Demo](https://whl19191.github.io/cashbook/dist)

可以记录每天消费记录，保存到Local Storage里，目前只分了两个列表‘今天’和‘之前消费’。

‘之前消费’列表里按照日期排序，之后会按照每一天做一个列表，细分的更详细点。

    submit(state,obj){
     state.count++;
     obj.id = state.count;
     obj.time = getDate();
    // obj.time = '2017-3-20'; //通过修改obj.time来修改新添加的记录日期，文件在/src/store/index.js里的mutations
     state.allList.unshift(obj);
     localStorage.setItem('test',JSON.stringify(state.allList));
     localStorage.setItem('count',JSON.stringify(obj.id));
    }

以后还打算添加的功能：

~~添加了ElementUI组件Collapse~~ 

统计表

日期选择

账单修改

细分

## Build Setup

``` bash

git clone git@github.com:whl19191/cashbook.git
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
