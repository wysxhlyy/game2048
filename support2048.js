/**
 * 是该游戏的一些小细节处理的实现文档。可以理解为对 main2048.js 中常用函数的封装，方便多次调用此类函数。
 * 包括获取单元格的坐标、设置数字的颜色、判断格子是否为空、判断数字能否移动等。
 */

function getPosTop(i,j) {
    return 20+120*j;
}

function getPosLeft(i,j) {
    return 20+120*i;
}
