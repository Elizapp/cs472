$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = (res) => {
        $("#question").val(res);
        $("#question").focus();
        setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        setTimeout(clearMsg, 10000);
    }

    $("#add").submit(() => {
        const data = {
            fname: $("#question").val(),
        };
        $.post({
            url: "/8ball",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});