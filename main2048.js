/**
 * 是该游戏的主要功能的实现文档。包括开始游戏、初始化数据、随机生成数字、键盘上下左右的响应、数字移动的变化、游戏结束。
 */

var board=new Array();
var score=0;

$(document).ready(function () {
    newGame();

});

function newGame() {
    init();//初始化棋盘格

    score=0;

}

function init() {
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            var gridCell=$("#grid-cell-"+i+"-"+j);
            gridCell.css('top',getPosTop(i,j));
            gridCell.css('left',getPosLeft(i,j));
        }
    }
}

