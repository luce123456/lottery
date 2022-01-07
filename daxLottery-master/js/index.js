/**
 * Created by wugy on 2016/12/19.
 */
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
                     {"Id": "9", "NickName": "lux",  "photo": "./images/S/lux.png", "base": "S"}
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
            $('.tigerMain').append('<div class="tigerList"><div><ul></ul></div></div>');
        }
        var maxNumber = 0;//要装进去的列
        for (var i = 0; i < userArray.length; i++) { //把用户列表装入列
            if (maxNumber == scrollNumber) {
                maxNumber = 0;
            }
            console.log(isSH)
            if(isSH){
                if(userArray[i].base == "S"){
                    $('.tigerList').eq(maxNumber).find('ul').append(
                        '<li data-userid="' + userArray[i].Id + '" data-nickname="' + userArray[i].NickName + '" data-base="'+ userArray[i].base +'"><img class="NickName" src="'+ userArray[i].photo + '"></li>');
                    maxNumber++;
                
                }
            }
            if(!isSH){
                if(userArray[i].base == "C"){
                    $('.tigerList').eq(maxNumber).find('ul').append(
                        '<li data-userid="' + userArray[i].Id + '" data-nickname="' + userArray[i].NickName + '" data-base="'+ userArray[i].base +'"><img class="NickName" src="'+ userArray[i].photo + '"></li>');
                    maxNumber++;
                }
            }
            // $('.tigerList').eq(maxNumber).find('ul').append(
            //     '<li data-userid="' + userArray[i].Id + '" data-nickname="' + userArray[i].NickName + '" data-base="'+ userArray[i].base +'"><img class="NickName" src="'+ userArray[i].photo + '"></li>');
            // maxNumber++;
        }
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
        isSH = !isSH
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
        
    };

    var selectLotteryNumber = function (v) {
        $(v).parent().prev().find("a").html($(v).find("div").html());
        $(v).parent().prev().find("a").attr({"data-number": $(v).data("number")});
        prizeNumber = $(v).data("number");
        setScrollDiv();
    }

    //显示抽奖动画
    var showLuckAnimate = function () {
        FireworkShow();
        var className = '';
        $('body').append('<div class="light"></div>');
        if (prizeNumber <= 3) {
            className = 'bigImg';
        } else if (prizeNumber > 3 && prizeNumber < 7) {
            className = 'normalImg';
        }
        $('body').append('<div id="showPrizeUser"><ul class="' + className + '">' + prizeUserStr + '</ul></div>');
        $('#showPrizeUser li').each(function () {
            $('body').append('<div data-level="' + $(this).data('level') + '" data-nickname="' + $(this).data('nickname') + '" data-isluck="' + $(this).data('isluck') + '" style="left:' + $(this).offset().left + 'px;top:' + $(this).offset().top + 'px" class="tigerUser ' + className + '">' + $(this).html() + '</div>');
            $(this).css('opacity', 0);
        });
        $("#slotmachineFlash").css('opacity', 1).show();
        var _left = $('#tigerUserBox').offset().left;
        var _top = $('#tigerUserBox').offset().top;

        setTimeout(function () {
            $('.tigerUser').each(function (index) {
                var _this = $(this);
                setTimeout(function () {
                    _this.animate({
                        'left': _left + 'px',
                        'top': _top + 'px',
                        'width': '70px',
                        'height': '70px'
                    }, 'slow', function () {
                        $('#tigerUserBox ul').prepend('<li data-level="' + _this.data('level') + '" data-headpath="' + _this.data('headpath') + '" data-nickname="' + _this.data('nickname') + '" data-isluck="' + _this.data('isluck') + '" >' + _this.html() + '</li>');
                        $('#tigerUserBox ul').width($('#tigerUserBox ul li').size() * tigerUserLiWidth).css('left', 0);
                        _this.remove();
                    });
                }, index * 100);
            });
        }, 5000);
        setTimeout(function () {
            FireworkHide();
            $(".light").animate({"opacity": "0"}, "slow", function () {
                $(".light").remove();
            });
            $('#showPrizeUser').animate({'opacity': '0'}, 'slow', function () {
                $('#showPrizeUser').remove();
            });
        }, 5500);
        if (isLotteryArray.length > 0) { //移除已中奖人
            for (var i = 0; i < isLotteryArray.length; i++) {
                $('.tigerMain li[data-userid=' + isLotteryArray[i] + ']').remove();
                for (var j = 0; j < userArray.length; j++) {
                    if (isLotteryArray[i] == userArray[j].Id) {
                        userArray.splice(j, 1);

                    }
                }
            }
            userArray = userArray.sort(randomsort);
            localStorage.DaxFans=JSON.stringify(userArray);
        }
        // setScrollDiv();
    }

    
})