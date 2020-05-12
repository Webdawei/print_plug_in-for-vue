# print_plug_in-for-vue
该js适用于vue项目中局部打印功能  
**一、下载js导入到项目中并在vue页面中引入如下语句:**  
```
$emsp;$emsp;import Print from '@/assets/js/print_plug.js';  
$emsp;$emsp;Vue.use(Print);  
```
**二、在页面元素中添加属性:**  
```
$emsp;$emsp;ref="print"  
```
**三、点击触发方法调用:**  
```
$emsp;$emsp;this.$print(this.$refs.print);  
```
