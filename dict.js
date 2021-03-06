$(document).ready(function () {
    const lookupButton = $("#lookup");
    const searchBox = $("#searchBox");
    const listBox = $("#search-list");
    listBox.append(`<p> No Data Available. Please type the term and click lookup button.</p>`);

    lookupButton.click(function () {
        const searchedValue = searchBox.val();
        $.ajax({
            url: `/search-word?searchWord=${searchedValue}`,
            type: "GET",
            dataType: 'json',
            success: function (result) {
                const list = result.data;
                listBox.empty();
                if (list.length > 0) {
                    for (let i = 0; i < list.length; i++) {
                        const listVal = list[i];
                        listBox.append(`<p>
                    ${i + 1}(${listVal.wordtype})
                    :: 
                    ${listVal.definition}</p> <br>`);
                    }
                }
                else{
                    listBox.append(`<p> No Data Found ! </p>`);
                }
            },
        })

    })
})