$(function() {
    $.ajax({
        type: "get",
        url: "../../data/getproduct.php",
        dataType: "json",
        success: function(response) {
            // console.log(response);
            var prolist = $('.prolist');
            var template = '';
            response.forEach(function(elm, i) {
                console.log(elm.title)
                var pic = JSON.parse(elm.pic);
                template = `
                        <li>
                            <a href="../html/product.html?id=${elm.id}" target="_blank id=${elm.id}">
                                <div class="time">
                                    <i class="iconfont"></i> 16:16
                                </div>
                                <div class="order">
                                    <div class="order-now">
                                        <div>下单可减10元</div>
                                    </div>
                                    <img src="${pic[0].src}">
                                </div>
                                <div class="product-title">
                                    <div>
                                        <span> ${elm.title}</span>
                                    </div>
                                </div>
                                <div class="now-price">
                                    <div class="price-bar">
                                        <span>
                                            <span>￥</span>
                                        <span>${elm.price}</span>
                                        </span>
                                        <span>
                                            <del>￥199</del>
                                        </span>
                                    </div>
                                </div>
                                <div class="btn-buy">立即订购</div>
                            </a>
                        </li>
                `
                prolist.append(template);
            });

        }
    });
    $.ajax({
        type: "get",
        url: "../../data/getproduct1.php",
        dataType: "json",
        success: function(response) {
            var newproint = $('.newpro-int');
            var template = '';
            response.forEach(function(elm, i) {
                var pic = JSON.parse(elm.pic);
                template = `
                <li>
                    <a href="../html/product.html?id=${elm.id}" class="newpro-a" target="_blank">
                        <div class="list-pic">
                            <p>
                                <img src="${pic[0].src}" alt="${pic[0].title}>
                            </p>
                        </div>
                        <div class="pro-title">
                            <p class="p-info">亲肤体验 纵享舒适</p>
                            <p class="p-title"> ${elm.title}</p>
                        </div>
                        <div class="price-list">
                            <span class="price1">￥
                                <span>${elm.price}</span>
                            </span>
                            <span class="price2">
                                <del>￥388</del>
                            </span>
                        </div>
                    </a>
                </li>
                `
                newproint.append(template);
            });

        }
    });
});