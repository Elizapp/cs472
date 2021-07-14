$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = (res) => {
        $("aside").html(res);
        console.log(res)
        setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        setTimeout(clearMsg, 10000);
    }

    $(".addProduct").submit(function (e){
        e.preventDefault();
        const data = {
            id: $(this)[0].id.value,
            name: $(this)[0].name.value,
            price: $(this)[0].price.value,
            description: $(this)[0].description.value,
        };
        $.post({
            url: "/addToCart/prod/" + data.id,
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});