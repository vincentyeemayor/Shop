function UpdateCartCount(userid, count) {

    if (localStorage.getItem(userid) != null)
        localStorage.setItem(userid, count);

    document.getElementById("countcart").innerHTML = count;
}

$(document).ready(function () {
    //document.getElementById("countcart").textContent = "5";
    //document.getElementById("countcart").innerHTML = "<?php echo $_SESSION['cart']; ?>"

    /*
    var sessionValue = sessionStorage.getItem("cart");
    alert(sessionValue);*/

    if (localStorage.getItem(userid) != null)
        document.getElementById("countcart").textContent = localStorage.getItem(userid);
    else
        document.getElementById("countcart").textContent = "0";
});

//document.getElementById("countcart").textContent = "newtext";