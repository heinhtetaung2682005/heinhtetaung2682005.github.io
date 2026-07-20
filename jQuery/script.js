$(document).ready(function() {
    function updateCartCount() {
        let itemString = localStorage.getItem('itShop');
        let itemArray = itemString ? JSON.parse(itemString) : [];
        let count = 0;

        $.each(itemArray, function(i, v) {
            count += Number(v.qty);
        });

        $('#cartCount').text(count);
    }

    $('.addToCart').click(function() {
        let id = $(this).data('id');
        let name = $(this).data('name');
        let price = $(this).data('price');
        console.log(id, name, price);

        let item = {
            id: id,
            name: name,
            price: price,
            qty: 1
        };

        let itemString = localStorage.getItem('itShop');
        let itemArray = itemString ? JSON.parse(itemString) : [];
        let status = false;

        $.each(itemArray, function(i, v) {
            if (id == v.id) {
                v.qty++;
                status = true;
                return false;
            }
        });

        if (!status) {
            itemArray.push(item);
        }

        localStorage.setItem('itShop', JSON.stringify(itemArray));
        alert('Item Added to Cart');
        updateCartCount();
    });

    updateCartCount();
});
