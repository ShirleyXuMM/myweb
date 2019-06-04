$(function() {
    getShopCar()
        //商品详情的切换效果
    $('.tabs>ul>li').on('click', function() {
        var index = $('.tabs>ul>li').index(this);
        $(this).addClass('active').siblings().removeClass('active');
        // $(this.children[0]).css("color", "red");

    });
    //右侧导航回到顶部的效果
    $('.return-pre').on('click', function() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    });


    //商品详情页获取
    var id = location.search.split('=')[1];
    $.ajax({
        type: "get",
        url: "../../data/getItem1.php",
        data: {
            id
        },
        dataType: "json",
        success: function(response) {
            var pic = JSON.parse(response.pic);
            var template = `
                            <div class="top-l">
                            <div class="top-l-pic">
                                <div class="pic_detail">
                                    <a href="#">
                                        <div class="small">
                                            <img src="${pic[0].src}" class="smallpic">
                                            <div class="movebox hide"></div>
                                        </div>
                                        <div class="big hide">
                                            <img src="${pic[0].src}" class="bigpic">
                                        </div>
                                    </a>
                                </div>
                                <div class="pic-list">
                                    <div class="pic-all">
                                        <ul class="clearfix">
                                            <li class="pic-item">
                                                <a href="javascript:;">
                                                    <img src="../img/1_main_261266_60.jpg">
                                                </a>
                                            </li>
                                            <li class="pic-item">
                                                <a href="javascript:;">
                                                    <img src="../img/1_06117542142200389_60.jpg">
                                                </a>
                                            </li>
                                            <li class="pic-item">
                                                <a href="javascript:;">
                                                    <img src="../img/1_06117542192053766_60.jpg">
                                                </a>
                                            </li>
                                            <li class="pic-item">
                                                <a href="javascript:;">
                                                    <img src="../img/1_06117542225865181_60.jpg">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="pic-btn">
                                        <a href="javacript:;" class="btn-left">L</a>
                                        <a href="javacript:;" class="btn-right">R</a>
                                    </div>
                                </div>
                            </div>
                            <div class="top-l-title">
                                <div class="Number">编号：9261266</div>
                                <div class="col-pro">
                                    <i></i> 收藏商品
                                </div>
                            </div>
                        </div>
                        <!-- 中间部分 -->
                        <div class="top-m">
                            <div class="detail-m">
                                <h1>
                                    ${response.title}
                                </h1>
                                <h2> ${response.details}</h2>
                                <div class="happy-price">
                                    <div class="price-det clearfix">
                                        <span>快乐价</span>
                                        <div class="price-box">
                                            <span>
                                                <em class="sign-p">¥</em>
                                                ${response.price}
                                            </span>
                                            <span>
                                                <del>￥1599.00</del>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="express-fee">
                                    <span>运费</span>
                                    <span>包邮</span>
                                </div>
                                <div class="detail-color">
                                    <div class="model_wrap color_wrap">
                                        <span class="dc-title">颜色</span>
                                        <ul>
                                            <li>
                                                <a href="javacript:;">默认</a>
                                                <b></b>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="model_wrap color_wrap">
                                        <span class="dc-title">尺码</span>
                                        <ul>
                                            <li>
                                                <a href="javacript:;">默认</a>
                                                <b></b>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="model_wrap count_wrap">
                                        <span class="dc-title">数量</span>
                                        <div class="wrap_input clearfix">
                                            <a href="javacript:;" class="btn-reduce">-</a><input type="text" value="1" class="text-num" id="num"><a href="javacript:;" class="btn-add">+</a>
                                        </div>
                                    </div>
                                    <div class="model_wrap">
                                        <div class="mw-content">
                                            <p>
                                                <a href="javacript:;" class="buy-now">立即购买</a>
                                                <a href="javacript:;" class="add-car">加入购物车</a>
                                            </p>
                                            <div class="detail-tips">
                                                购买最多可以获 &nbsp;
                                                <span>5</span> &nbsp; 快乐币（抵现金额 &nbsp;
                                                <span>5</span> &nbsp;元）
                                            </div>
                                            <div class="detail-tips">直播商品在线实付满199减10元</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            `;
            $('.content-top').append(template).find('.add-car').on('click', function() {
                addShopCar(response.id, response.price, $('#num').val());;
            });
            glass() // 放大镜初始化
        }
    });

    function addShopCar(id, price, num) {
        var shop = cookie.get('shop'); //从cookie获取shop
        var product = {
            "id": id,
            "price": price,
            "num": num
        };

        if (shop) {
            shop = JSON.parse(shop); // cookie中如果有数据 这个数据是json字符串 转成对象

            if (shop.some(elm => elm.id == id)) {
                shop.forEach(function(elm, i) {
                    elm.id == id ? elm.num = num : null;
                });
            } else {
                shop.push(product);
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        } else {
            shop = [];
            shop.push(product);
            cookie.set('shop', JSON.stringify(shop), 1);
        }
        getShopCar()
    }

    function glass() {
        //商品图片的放大镜效果
        var pic_detail = $('.pic_detail'),
            small = $('.small'),
            movebox = $('.movebox'),
            big = $('.big'),
            zoom = document.getElementsByClassName('pic_detail')[0],
            bigpic = $('.bigpic');
        console.log(small)
        small.on('mouseover', function() {
            movebox.removeClass('hide').addClass('show');
            big.removeClass('hide').addClass('show');

            movebox.css({
                'width': small.offset().width * big.offset().width / bigpic.offset().width + 'px',
                'height': small.offset().height * big.offset().height / bigpic.offset().height + 'px'
            });

            small.on('mousemove', function(ev) {
                ev = ev || event;
                var left = ev.clientX - pic_detail.offset().left - (movebox.width() / 2);
                var top = ev.clientY - pic_detail.offset().top + document.documentElement.scrollTop - (movebox.height() / 2);
                var prop = bigpic.width() / small.height();

                if (left < 0) {
                    left = 0;
                } else if (left > small.width() - movebox.width()) {
                    left = small.width() - movebox.width() - 2;
                }
                if (top < 0) {
                    top = 0;
                } else if (top > small.height() - movebox.height()) {
                    top = small.height() - movebox.height() - 2;
                }
                movebox.css({
                    'left': left + 'px',
                    'top': top + 'px'
                })

                bigpic.css({
                    'left': -left * prop + "px",
                    'top': -top * prop + "px"
                })
            });


        });

        small.on('mouseout', function() {
            movebox.removeClass('show').addClass('hide');
            big.removeClass('show').addClass('hide');
            small.off('mousemove')
        });
        // 详情页的数量加减
        console.log(small)
        $('.btn-add').on('click', function() {
            console.log(11111)
            var num = null;
            num = $('#num').val();
            console.log($('#num').val());
            num++;
            $('#num').val(num);
        });
        $('.btn-reduce').on('click', function() {
            var num = null;
            num = $('#num').val();
            num--;
            $('#num').val(num);
            if (num <= 1) {
                $('#num').val(1);
            }

        });
    }

    function getShopCar() {
        var shop = cookie.get('shop');
        console.log(shop);
        if (shop) {
            shop = JSON.parse(shop);
            var idList = shop.map(elm => elm.id).join();
            $.ajax({
                type: "get",
                url: "../../data/shop.php",
                data: {
                    "idList": idList
                },
                dataType: "json",
                success: function(res) {
                    const data = res || []
                    const num = data.length
                    $('.shopping-c').find('.car-a').remove()
                    const template = `
                        <a class='car-a' href="../html/shoppingcar.html">
                        <i class="iconfont icon_car"></i>
                        <div class="shop-car"> 购物车 </div>
                        <div class="car-num">${num}</div>
                        <div class="ani_num">1</div>
                    </a>`
                    $('.shopping-c').prepend(template)
                }
            });
        }
    }

})