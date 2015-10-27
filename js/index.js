function showSlide(current, di)
{
    $("#node" + current).show("slide", {direction: di}, 1000);

}

$(document).ready(function()
        {

            var currentNode = 0;
            $("#left-arrow").click(function()
            {
                $("#node" + currentNode).hide("slide", {direction: "right"}, 1000, showSlide((currentNode + 2) % 3, "left"));
                currentNode = (currentNode + 2) % 3;
                console.log(currentNode);
            });

            $("#right-arrow").click(function()
            {
                $("#node" + currentNode).hide("slide", {direction: "left"}, 1000, showSlide((currentNode + 1) % 3, "right"));
                currentNode = (currentNode + 1) % 3;
                console.log(currentNode);
            });

        });


