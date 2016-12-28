/**
 * @overview   convert Chinese Number to alb number
 *
 * @author  ele1000
 * @version 2016/12/27
 */

var str = "一千七百二十";


function parseCnNumber(str){
    if(typeof(str) != typeof("")){
        console.log("not string!!!");
        return;
    }

    if(isNaN(str)){
        // convert chinese number to number
        var num = 0;
        var len = str.length;
        for(var i = 0; i < len; ++i){
            var weight = singleNumber(str[i]);
            // check unit number
            if(i < len - 1){
                var rate = unitNumber(str[i + 1]);
                if(rate > 0){
                    num += weight * rate;
                    i = i + 1;
                }
            }else{
                num += weight;
            }
        }
        return num;
    }else{
        return Number(str);
    }
}

function unitNumber(character){
    switch(character){
        case "十":
        case "拾":
            return 10;

        case "百":
        case "佰":
            return 100;

        case "千":
        case "仟":
            return 1000;
        case "万":
        case "萬":
            return 10000;
    }
    return 0;
}

function singleNumber(character){
    if( typeof(character) != typeof("")){
        return 0;
    }

    switch(character){
        case '一' :
        case '壹' : 
            return 1;
        case '二' :
        case '贰' : 
            return 2;
        case '三' :
        case '叁' : 
            return 3;
        case '四' :
        case '肆' : 
            return 4;
        case '五' :
        case '伍' : 
            return 5;
        case '六' :
        case '陸' : 
            return 6;
        case '七' :
        case '柒' : 
            return 7;
        case '八' :
        case '捌' : 
            return 8;
        case '九' :
        case '玖' : 
            return 9;
    }
    return 0;
}
