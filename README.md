# ETpl.js
基于ejs语法的简单模板

## 兼容
* IE8+

## 提供引入方法
* `dist/etpl.min.js` 普通浏览器js引入
* `dist/etpl.umd.js` 浏览器umd引入方式
* `dist/etpl.cjs.js` node引入方式
* `dist/etpl.es.js`  ES6模块引入方式

## 基本用法

在html中引入js
```html
<script src="../dist/etpl.min.js"></script>
```

书写模板
```html
<div id="tmpdiv">

</div>
<script type="text/template" id="tmp">
  <ul>
    <% list.forEach((val,index)=>{ %>
      <li class="li-<%= index %>"><%= val %></li>
    <% }) %>
  </ul>
</script>
```

执行方法
```js
var tpl = etpl(document.getElementById('tmp').innerHTML);
document.getElementById('tmpdiv').innerHTML = tpl({list:[1,2,3]});
```

效果
```html
<div id="tmpdiv">
  <ul>
    <li class="li-0">1</li>
    <li class="li-1">2</li>
    <li class="li-2">3</li>
  </ul>
</div>
```