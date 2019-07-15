$("#addToWatchList").on("click", e => {
    // console.log("I'm clicked 800");

    let routeArr = location.href.split("/");
    let ticker = routeArr[routeArr.length - 1];
    let uid = currentUser;
    $.post(`/api/watchlist/${ticker}/${uid}`, response => {
        // console.log("added to watchlist");
    });
    location.reload();
});