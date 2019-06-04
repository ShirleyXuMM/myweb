$(function() {
    var shop = cookie.get('shop');
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
            success: function(response) {
                var template = "";
                response.forEach(function(elm) {
                    console.log(elm.id);
                    var pic = JSON.parse(elm.pic);
                    var arr = shop.filter((val, i) => {
                        return val.id === elm.id;
                    });
                    template = `
                            <div class="items-list">
                                <div class="items_form clearfix">
                                    <div class="sell p_checkbox">
                                        <input type="checkbox" name="cart_id">
                                    </div>
                                    <div class="sell p_goods">
                                        <div class="goods_items clearfix">
                                            <div class="p_img">
                                                <a href="#" target="_blank">
                                                    <img src="${pic[0].src}">
                                                </a>
                                            </div>
                                            <div class="item_msg">
                                                <div class="p_name">
                                                    <a href="#" target="_blank"> ${elm.title}</a>
                                                </div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sell p_price">
                                        <p>${elm.price}</p>
                                    </div>
                                    <div class="sell p_quantity">
                                        <div class="quantity-form">
                                            <a href="javascript:;" class="decrease">-</a>
                                            <input type="text" maxlength="3" value="${arr[0].num}" name="number">
                                            <a href="javascript:;" class="added">+</a>
                                        </div>
                                    </div>
                                    <div class="sell p_sum">
                                        <strong>
                                            ￥
                                            <em>${(arr[0].num*elm.price).toFixed(2)}</em>
                                        </strong>
                                    </div>
                                    <div class="sell p_del">
                                        <a href="#" goods_id="${elm.id}" class="delete_goods">删除</a>
                                    </div>
                                </div>
                            </div>
                    `
                    $('.shop_list').append(template);
                });

                // $('.delete_goods').on('click', function(e) {
                //     deleteGoods(e.target.attributes[1].nodeValue)
                // });

                // function deleteGoods(id) {
                //     // 写删除逻辑
                // }
            }
        });
    }
})