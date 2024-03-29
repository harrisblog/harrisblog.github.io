// 文章卡片
var arr = document.getElementsByClassName("recent-post-item");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow"); //必要项，添加wow.js标记
    arr[i].classList.add("animate__zoomIn"); //必要项，添加样式动画
}
// Sticky 置顶文章轮播图
var arr = document.getElementsByClassName("sticky");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__zoomIn");
}
// GitCalendar
var arr = document.getElementsByClassName("gitcalendar");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__zoomIn");
}
// 随机文章-走路人群
var arr = document.getElementsByClassName("random_people");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__zoomIn");
}
// 首页顶部文章导航组件
var arr = document.getElementsByClassName("category_tag-group");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__zoomIn");
}
// 侧栏卡片
var arr = document.getElementsByClassName("card-widget");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__slideInRight");
}
// 友链 flexcard
var arr = document.getElementsByClassName("flink-list-card");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__flipInY");
}
// 友链 Volantis
var arr = document.getElementsByClassName("site-card");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__flipInY");
}
// 朋友圈
var arr = document.getElementsByClassName("article-sort-item");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__zoomIn");
}
// 公告栏
var arr = document.getElementsByClassName("notice");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__zoomIn");
}
// 顶部分类条
var arr = document.getElementsByClassName("category-bar");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__zoomIn");
}
// 顶部标签条
var arr = document.getElementsByClassName("tag-bar");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__zoomIn");
}
//初始化函数
wow = new WOW({
    boxClass: 'wow',
    // 当用户滚动时显示隐藏框的类名称
    animateClass: 'animate__animated',
    // 触发 CSS 动画的类名称（动画库默认为"animate.css"库）
    offset: 0,
    // 定义浏览器视口底部与隐藏框顶部之间的距离。
    // 当用户滚动并到达此距离时，将显示隐藏的框。
    mobile: false,
    // 在移动设备上打开/关闭wow.js。
    live: true
    // 在页面上检查新的 wow.js元素。
})
wow.init();