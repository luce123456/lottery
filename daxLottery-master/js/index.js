$(function () {
    //初始化
    var selfModuleName = 'slotmachine';
    var scrollTime = 200; //滚动速度
    var IntervalTimer = parseInt(Math.random() * 300);//间隔时间
    var scrollNumber = 1;//滚动列数,默认有5个
    var isLotteryArray = []; //中奖用户
    var lotteryId;
    var userArray = [
                     {"Id": "0", "NickName": "Mike" , "photo": "./images/S/mike.png" , "base": "S"},
                     {"Id": "1", "NickName": "Alily", "photo": "./images/S/Alily.png", "base": "S"},
                     {"Id": "2", "NickName": "Lucy",  "photo": "./images/C/lucy.png", "base": "C"},
                     {"Id": "3", "NickName": "Jhon",  "photo": "./images/C/Jhon.png", "base": "C"},
                     {"Id": "4", "NickName": "Coco",  "photo": "./images/S/coco.png", "base": "S"},
                     {"Id": "5", "NickName": "Coust",  "photo": "./images/C/Coust.png", "base": "C"},
                     {"Id": "6", "NickName": "zed",  "photo": "./images/C/zed.png", "base": "C"},
                     {"Id": "7", "NickName": "honly",  "photo": "./images/C/honly.png", "base": "C"},
                     {"Id": "8", "NickName": "Jack",  "photo": "./images/S/Jack.png", "base": "S"},
                     {"Id": "9", "NickName": "lux",  "photo": "./images/S/lux.png", "base": "S"},
                     {"Id": "10", "NickName": "Mike1" , "photo": "./images/S/mike.png" , "base": "S"},
                     {"Id": "11", "NickName": "Alily1", "photo": "./images/S/Alily.png", "base": "S"},
                     {"Id": "12", "NickName": "Lucy1",  "photo": "./images/C/lucy.png", "base": "C"},
                     {"Id": "13", "NickName": "Jhon1",  "photo": "./images/C/Jhon.png", "base": "C"},
                     {"Id": "14", "NickName": "Coco1",  "photo": "./images/S/coco.png", "base": "S"},
                     {"Id": "15", "NickName": "Coust1",  "photo": "./images/C/Coust.png", "base": "C"},
                     {"Id": "16", "NickName": "zed1",  "photo": "./images/C/zed.png", "base": "C"},
                     {"Id": "17", "NickName": "honly1",  "photo": "./images/C/honly.png", "base": "C"},
                     {"Id": "18", "NickName": "Jack1",  "photo": "./images/S/Jack.png", "base": "S"},
                     {"Id": "19", "NickName": "lux1",  "photo": "./images/S/lux.png", "base": "S"},
                     {"Id": "20", "NickName": "Mike2" , "photo": "./images/S/mike.png" , "base": "S"},
                     {"Id": "21", "NickName": "Alily2", "photo": "./images/S/Alily.png", "base": "S"},
                     {"Id": "22", "NickName": "Lucy2",  "photo": "./images/C/lucy.png", "base": "C"},
                     {"Id": "23", "NickName": "Jhon2",  "photo": "./images/C/Jhon.png", "base": "C"},
                     {"Id": "24", "NickName": "Coco2",  "photo": "./images/S/coco.png", "base": "S"},
                     {"Id": "25", "NickName": "Coust2",  "photo": "./images/C/Coust.png", "base": "C"},
                     {"Id": "26", "NickName": "zed2",  "photo": "./images/C/zed.png", "base": "C"},
                     {"Id": "27", "NickName": "honly2",  "photo": "./images/C/honly.png", "base": "C"},
                     {"Id": "28", "NickName": "Jack2",  "photo": "./images/S/Jack.png", "base": "S"},
                     {"Id": "29", "NickName": "lux2",  "photo": "./images/S/lux.png", "base": "S"},
                     {"Id": "30", "NickName": "Mike3" , "photo": "./images/S/mike.png" , "base": "S"},
                     {"Id": "31", "NickName": "Alily3", "photo": "./images/S/Alily.png", "base": "S"},
                     {"Id": "32", "NickName": "Lucy3",  "photo": "./images/C/lucy.png", "base": "C"},
                     {"Id": "33", "NickName": "Jhon3",  "photo": "./images/C/Jhon.png", "base": "C"},
                     {"Id": "34", "NickName": "Coco3",  "photo": "./images/S/coco.png", "base": "S"},
                     {"Id": "35", "NickName": "Coust3",  "photo": "./images/C/Coust.png", "base": "C"},
                     {"Id": "36", "NickName": "zed3",  "photo": "./images/C/zed.png", "base": "C"},
                     {"Id": "37", "NickName": "honly3",  "photo": "./images/C/honly.png", "base": "C"},
                     {"Id": "38", "NickName": "Jack3",  "photo": "./images/S/Jack.png", "base": "S"},
                     {"Id": "39", "NickName": "lux3",  "photo": "./images/S/lux.png", "base": "S"},
                    ] //用户列表
    var ulHeight = 600;
    var ulHeightHalf = 300;
    var isSH = true;
    var ulHTML;
    var firstStart = true;
    var count = 0;

    window.οnlοad=function(){ 
        // 初始化内容 
        setScrollDiv();
    }

    $("ul>li>button").on('click', function () {
        console.log(this);
        console.log($(this).css("background-color"));
        if($(this).css("background-color") == "rgb(239, 239, 239)"){
            $(this).css("background-color","rgb(117 235 124)");
        }else{
            $(this).css("background-color","rgb(239, 239, 239)");
        }
    });

    //绑定开启活动按钮的点击事件
    $('#index>.clickBtn').on('click', function () {
        //移除活动准备开始界面
        $("#index").remove();
        //在body上触发active事件
        $('body').triggerHandler('active');
        //在body上触发modulechange事件
        $('body').triggerHandler('modulechange', ["slotmachine"]);

    });
    //slotmachineInit
    $('body').on('active', function () {
        $('.beginTiger').click(function () {
            if (!$(this).hasClass('beginTiger_on')) {
                beginTiger();
            } else {
                stopTiger();
            }
        });
    });
    $('body').on('modulechange', function (e, moduleName) {
        if (moduleName == selfModuleName) {
            $('#slotmachine').show();
            GetFans();
        } else {
            $('#slotmachine').hide();
        }
    });

    //初始化滚动界面
    var setScrollDiv = function () {
        scrollNumber = 1;
        $('.tigerMain').addClass('oneTiger');
        $('.tigerMain').html('');   //添加列
        for (var i = 0; i < scrollNumber; i++) {
            $('.tigerMain').append('<div class="tigerList"><div></div></div>');
        }
        if(firstStart){
            ulHTML = createHTML();
            firstStart = false;
        }
        $('.tigerList').html(ulHTML);
        $(".tigerList").addClass("wait");
        $('.tigerList').each(function () {  //复制列表，循环滚动
            var ul = $($(this).find('ul'));
            if (ul.children().size() > 1) {
                ul.append(ul.html());
                ul.css('top', -ul.height() + ulHeight + 'px');
            } else {
                ul.css('top', '0');
            }
        });
    };

    //开始摇奖
    var beginTiger = function () {
        $("ul>li>button").css("background-color","rgb(239, 239, 239)");
        $('#name').text('');
        console.log(isLotteryArray);
        setScrollDiv();
        $('.beginTiger').html('Stop').addClass('beginTiger_on');
        $('.tigerList').each(function (i) {
            var ulBox = $(this).find('ul');
            var _height = ulBox.children().size() * ulHeightHalf;
            ulBox.height(_height);
            if (ulBox.children().size() > 1) { //本列人数大于1的时候才滚动
                setTimeout(function () {
                    $(".tigerList").removeClass("wait");
                    beginScroll(ulBox, _height, scrollTime * (scrollNumber / 2));
                }, IntervalTimer * i);
            } else if (ulBox.children().size() == 0) { //本列人数等于0的时候移除
                ulBox.parent().remove();
            }
        });
    };

    //滚动
    var beginScroll = function (obj, height, timer) {
        obj.animate({'top': -height / 4 + ulHeightHalf + 'px'}, timer, 'linear', function () {
            obj.css('top', -(height - ulHeight) + 'px');
            beginScroll(obj, height, timer);
        });
    };

    var stopTiger = function () {
        $('.beginTiger').html('Start').removeClass('beginTiger_on');
        isLotteryArray = [];
        $('.tigerList').each(function (i) {
            var ulBox = $(this).find('ul');
            setTimeout(function () {
                ulBox.stop();
                var _top = Math.ceil(parseInt(ulBox.css('top')) / ulHeightHalf) * ulHeightHalf; //向上取整，让它滚动到正确位置;
                ulBox.animate({'top': _top}, function () {
                    var userID; //中奖人信息
                    var userNickName;
                    ulBox.children('li').each(function () {
                        var add = parseInt($(this).position().top) + _top;
                        if (add < 2 && add>-2) {
                            userID = $(this).data('userid');
                            userNickName = $(this).data('nickname');
                            console.log("1:"+userID);
                            isLotteryArray.push(userID);
                            lotteryId=userID
                            console.log("isLotteryArray:"+isLotteryArray);
                            $('#name').text(userNickName);
                        }                
                    });
                    $('.beginTiger').removeClass('beginTiger_on'); //改变摇杆样式
                    }
                );
            }, IntervalTimer * (i + 3));
        });
        userArray.forEach(function(user, index, arr) {       
            if(user.Id==lotteryId) {
              arr.splice(index, 1);
            }
        });
        ulHTML = createHTML();
    };

    var createHTML = function(){
        var div = document.createElement("div");
        var UL = document.createElement("ul");
        div.appendChild(UL);
        if (count>=4) {isSH=true;}
        for (var i = 0; i < userArray.length; i++) { //把用户列表装入列
            if(isSH){
                if(userArray[i].base == "S"){
                    var li = document.createElement("li");
                    UL.appendChild(li);
                    var img = document.createElement("img");
                    li.appendChild(img);
                    li.setAttribute("data-userid",userArray[i].Id);
                    li.setAttribute("data-nickname",userArray[i].NickName);
                    li.setAttribute("data-base",userArray[i].base);
                    li.setAttribute("data-userid",userArray[i].Id);
                    img.setAttribute("class","NickName");
                    img.setAttribute("src", userArray[i].photo);
                }
            }
            if(!isSH){
                if(userArray[i].base == "C"){
                    var li = document.createElement("li");
                    UL.appendChild(li);
                    var img = document.createElement("img");
                    li.appendChild(img);
                    li.setAttribute("data-userid",userArray[i].Id);
                    li.setAttribute("data-nickname",userArray[i].NickName);
                    li.setAttribute("data-base",userArray[i].base);
                    li.setAttribute("data-userid",userArray[i].Id);
                    img.setAttribute("class","NickName");
                    img.setAttribute("src", userArray[i].photo);
                }
            }
        }
        isSH = !isSH;
        count++;
        return div;
    }
})
