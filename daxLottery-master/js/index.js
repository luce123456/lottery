$(function () {
    //初始化
    var selfModuleName = 'slotmachine';
    var scrollTime = 200; //滚动速度
    var IntervalTimer = parseInt(Math.random() * 300);//间隔时间
    var scrollNumber = 1;//滚动列数,默认有5个
    var prizeID = 0; //奖品ID
    var prizeNumber = 10; //抽奖人数
    var isLotteryArray = []; //中奖用户
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
    // var userArray2 = [
    //                 //{"Id": "0", "NickName": "Mike" , "photo": "./images/mike.png"},
    //                 //{"Id": "1", "NickName": "Alily", "photo": "./images/Alily.png"},
    //                 //{"Id": "2", "NickName": "Lucy",  "photo": "./images/lucy.png"},
    //                 {"Id": "0", "NickName": "Jhon",  "photo": "./images/Jhon.png"},
    //                 {"Id": "1", "NickName": "Coco",  "photo": "./images/coco.png"}
    //                 ] 
    var isLotteryScrollID = 0; //中奖名单滚动设置
    var sotpTime = 1000; //停止抽奖时间
    var prizeUserStr = '';
    var tigerUserLiWidth = 120;
    var tigerUserUlWidth = 513;
    var ulHeight = 600;
    var ulHeightHalf = 300;
    var isSH = true;
    var ulHTML;
    var firstStart = true;

    window.οnlοad=function(){ 
        // 初始化内容 
        setScrollDiv();
    }

    var choose = function(){
        //element.style.color = "#ff0000";
        console.log("aaa");
        
    };



    var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
    if (!isChrome) {
        $("body").prepend('<div id="nohtml5"><div>由于您正在使用非chrome浏览器,大屏幕的体验处于不佳状态,建议您立刻更换浏览器,以获得更好的用户体验。下载浏览器:<a href="http://www.chromeliulanqi.com/" target="blank"><img src="images/chrome.jpg"> chrome浏览器</a></div><span class="delnohtml5">X</span></div>');
        $(".delnohtml5").click(function () {
            $("#nohtml5").remove();
        })
    }

    $("ul>li>button").on('click', function () {
        console.log(this);
        console.log($(this).css("background-color"));
        if($(this).css("background-color") == "rgb(239, 239, 239)"){
            $(this).css("background-color","rgb(117 235 124)");
        }else{
            $(this).css("background-color","rgb(239, 239, 239)");
        }
        //移除活动准备开始界面
        // $("#index").remove();
        // //在body上触发active事件
        // $('body').triggerHandler('active');
        // //在body上触发modulechange事件
        // $('body').triggerHandler('modulechange', ["slotmachine"]);

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
        //选择人数时
        $('#option_slotNumber a').click(function () {
            selectLotteryNumber($(this));
        });
        
        //点击开始按钮
        $('.beginTiger').click(function () {
            if (!$(this).hasClass('beginTiger_on')) {
                beginTiger();
            } else {
                stopTiger();
                // if (isLotteryArray.length > 0) { //移除已中奖人
                //     for (var i = 0; i < isLotteryArray.length; i++) {
                //         $('.tigerMain li[data-userid=' + isLotteryArray[i] + ']').remove();
                //         userArray.forEach(function(user, index, arr) {
                //             if(user.Id==isLotteryArray[i]) {
                //               arr.splice(index, 1);
                //             }
                //         });
                        
                //     }
                // }
                // console.log(userArray);
                // setScrollDiv();
            }
        });
        $('.tiger_hidden').click(function () {
            if ($(this).hasClass('on')) {
                $('#tigerUser').show();
                $(this).removeClass('on');
            } else {
                $('#tigerUser').hide();
                $(this).addClass('on');
            }
        });
        //点击左箭头
        $('#tigerUser a.left').mousedown(function () {
            isLotteryScrollID = Math.max(0, isLotteryScrollID - 1);
            $('#tigerUserBox ul').stop().animate({'left': Math.min(0, -isLotteryScrollID * tigerUserUlWidth)});
        });
        //点击右箭头
        $('#tigerUser a.right').click(function () {
            isLotteryScrollID = Math.min(Math.ceil($("#tigerUserBox ul").width() / tigerUserUlWidth) - 1, isLotteryScrollID + 1);
            $('#tigerUserBox ul').stop().animate({'left': -tigerUserUlWidth * isLotteryScrollID});

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

    //获取用户
    var GetFans = function () {
        CommonLoading('数据加载中,请稍后');
        // setScrollDiv();
        CommonLoaded();
    }

 


    function randomsort(a, b) {
        return Math.random()>.5 ? -1 : 1;
        //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
    }

    //初始化滚动界面
    var setScrollDiv = function () {
        scrollNumber = 1;
        $('.tigerMain').addClass('oneTiger');
        $('.tigerMain').html('');   //添加列
        for (var i = 0; i < scrollNumber; i++) {
            $('.tigerMain').append('<div class="tigerList"><div></div></div>');
        }
        
        //$('#id').html("修改内容")
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
                //ul.css('top', -ul.height()/2 + 'px');
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
        if (isLotteryArray.length > 0) { //移除已中奖人
            for (var i = 0; i < isLotteryArray.length; i++) {
                $('.tigerMain li[data-userid=' + isLotteryArray[i] + ']').remove();
                userArray.forEach(function(user, index, arr) {
                    if(user.Id==isLotteryArray[i]) {
                      arr.splice(index, 1);
                    }
                });
            }
        }
        console.log(userArray);
        setScrollDiv();
        // if(isLotteryArray[0].base=="S"){
        //     $('.tigerMain li[data-userid=' + isLotteryArray[i] + ']').remove();
        // }
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
        obj.animate({'top': -height / 2 + ulHeightHalf + 'px'}, timer, 'linear', function () {
            obj.css('top', -(height - ulHeight) + 'px');
            beginScroll(obj, height, timer);
        });
    };

    var stopTiger = function () {
        $('.beginTiger').html('Start').removeClass('beginTiger_on');
        isLotteryArray = [];
        $('.tigerList').each(function (i) {
            var ulBox = $(this).find('ul');
            var _height = ulBox.height();
            setTimeout(function () {
                ulBox.stop();
                var _top = Math.ceil(parseInt(ulBox.css('top')) / ulHeightHalf) * ulHeightHalf; //向上取整，让它滚动到正确位置;
                console.log("_top: "+_top)
                ulBox.animate({'top': _top}, function () {
                    var userID; //中奖人信息
                    var userNickName;
                    ulBox.children('li').each(function () {
                        console.log("li position:"+ -$(this).position().top)
                        var add = parseInt($(this).position().top) + _top;
                        if (add < 2 && add>-2) {
                            userID = $(this).data('userid');
                            userNickName = $(this).data('nickname');
                            console.log("1:"+userID);
                            isLotteryArray.push(userID);
                            $('#name').text(userNickName);
                                // '<li data-userid="' + userArray[i].Id + '" data-nickname="' + userArray[i].NickName + '" data-base="'+ userArray[i].base +'"><img class="NickName" src="'+ userArray[i].photo + '"></li>');        
                            //$(this).append(
                              //  '<div style="position: absolute; top:-6px ;font-size: 26px; margin-left: -45px">'+ userNickName + '</div>');
                        }
    //                     if($(this).data('userid')==userID){
    //                         $(this).append(
    // '<div style="position: absolute; top:-6px ;font-size: 26px; margin-left: -45px">'+ userArray[i].NickName + '</div>'); }                  
                    });
                    
                    $('.beginTiger').removeClass('beginTiger_on'); //改变摇杆样式
                    }
                );
            }, IntervalTimer * (i + 3));
        });
        ulHTML = createHTML();
    };

    var selectLotteryNumber = function (v) {
        $(v).parent().prev().find("a").html($(v).find("div").html());
        $(v).parent().prev().find("a").attr({"data-number": $(v).data("number")});
        prizeNumber = $(v).data("number");
        setScrollDiv();
    }

    var createHTML = function(){
        var div = document.createElement("div");
        var UL = document.createElement("ul");
        div.appendChild(UL);
        console.log(isSH);
        for (var i = 0; i < userArray.length; i++) { //把用户列表装入列
            //console.log(isSH)
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
                    // UL.append(
                    //     '<li data-userid="' + userArray[i].Id + '" data-nickname="' + userArray[i].NickName + '" data-base="'+ userArray[i].base +'"><img class="NickName" src="'+ userArray[i].photo + '"></li>');
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
                    // UL.append(
                    //     '<li data-userid="' + userArray[i].Id + '" data-nickname="' + userArray[i].NickName + '" data-base="'+ userArray[i].base +'"><img class="NickName" src="'+ userArray[i].photo + '"></li>');
                }
            }
        }
        console.log(UL);
        isSH = !isSH;
        console.log(isSH);
        return div;
    }
})
