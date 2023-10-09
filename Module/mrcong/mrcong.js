function myFunction(){
    // 使用document.getElementsByTagName方法获取到所有的iframe标签，并将其存储在一个NodeList中
const iframes = document.getElementsByTagName('iframe');
// 将NodeList转换为数组，并遍历删除每个iframe标签
Array.from(iframes).forEach((iframe) => {
  iframe.remove();
});
}