$(function () {
    
    $("#shop").fullpage({
        
        navigation:true,
        sectionsColor: ["#ffdd66",'#84a2d4','#ef674d','#ffeedd','#cf4759','#85d9ed','#8ac060','#8402d4',],
        afterLoad: function (a,index) {
            //初始化状态
            //第二页的初始状态
            $('.section2>div div,.section2>div img').attr('style','');
            $('.section2 .search').attr('src','./images/02/search01.png')

            //初始状态
            $('.section').removeClass('animation');
            $('.section4 .keyboard').css('opacity','0')
            $('.section4 .carBox').css('marginLeft','0')

            //第二页
            if( index == 2 ){
                console.log(index);
                $('.section2 .search').animate({
                    marginRight: 650
                },800,'easeOutBounce',function () {
                    $('.section2 .search').attr('src','images/02/search02.png')
                    
                    //搜索框动画
                    $('.section2 .search').delay(500).animate({
                        marginRight:500,
                        marginTop: -5,
                        height: 30
                    },800)

                    //沙发动画
                    $('.section2 .sofas').delay(500).animate({
                        width:441,
                        height:218
                    },800)
                })
            }

            //第三页
            if(index == 3){
                console.log(index);
                // 添加动画类选择器
                $('.section3').addClass('animation');
            }
            
            
            //第四页
            if(index == 4){
                $('.section4 .carBox').animate({
                    marginLeft: 1500
                },2500,'easeInElastic',function () {
                    
                    $('.section4 .keyboard').animate({
                        opacity:1
                    },800)
                })
            }

            //第五页
            if(index == 5){
                console.log(index);
                $('.section5').addClass('animation')
            }

            //第六页
            if(index == 6){
                console.log(index);
                //掉下商品
                $('.section6 .box').animate({
                    top:0
                },800,function () {
                    $('.section6 .box').hide()
                    
                })

                //小车移动
                $('.section6').delay(800).animate({
                    backgroundPositionX: -1200
                },1000,'linear')
                
                //人送货
                $('.section6 .carBox .man').delay(1800).animate({
                    height:140
                },500,function () {
                    $('.section6 .carBox .man').animate({
                        right: -180
                    },500,function () {
                        //开门
                        $('.section6 .door').show();
                        setTimeout(function () {
                            $('.section6 .girl').show();
                        },200)
                    })
                })
            }

            if(index == 7){
                // console.log(index);
                $('.section7').addClass('animation')
            }

            if(index == 8){
                $('.section8').mousemove(function (e) {
                    // console.log(e);
                    $('.section8 .hand').css('left',e.pageX - 70)
                    var y = e.pageY < 170 ? 170 : e.pageY;
                    $('.section8 .hand').css('top',y)

                    //一入一出事件
                    $('.section8 .begin').mouseover(function () {
                        $(this).attr('src','images/08/begin.gif')
                    })
                    $('.section8 .begin').mouseout(function () {
                        $(this).attr('src','images/08/begin.png')
                    })

                    
                })
                        $('.section8 .again').click(function () {
                            $.fn.fullpage.moveTo(1,0)
                        })
            }

        }
    })

})