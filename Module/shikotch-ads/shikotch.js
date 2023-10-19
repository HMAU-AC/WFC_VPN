// 根据scripts中的scr“”中的链接来循环定位删除scripts标签
// 由于在循环过程中删除元素可能会导致索引问题，你可能需要从后向前遍历<script>标签
var scripts = document.getElementsByTagName('script');
var regex = /https:\/\/js\.boost-next\.co\.jp\/.*/;

for (var i = scripts.length - 1; i >= 0; i--) {
    if (regex.test(scripts[i].src)) {
        scripts[i].parentNode.removeChild(scripts[i]);
    }
}
