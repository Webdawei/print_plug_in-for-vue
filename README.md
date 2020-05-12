# print_plug_in-for-vue
# 该js适用于vue项目中局部打印功能  
**一、下载js导入到项目中并在vue页面中引入如下语句:**  
```
import Print from '@/assets/js/print_plug.js';  
Vue.use(Print);  
```
**二、在页面元素中添加属性:**  
```
ref="print"  
```
**三、点击触发方法调用:**  
```
this.$print(this.$refs.print);  
```
