// $(document).ready(() => {
const searchResult = $(".searchResult");
const searchResultList = $(".searchResultList");
const searchBar = $("#searchBar");
// we might not need the following line
const searchForm = searchBar.parent();

let searchSymbols = { allTickers: [], recentSearches: [] };

searchBar.focus(search);
searchBar.keyup(search);

searchBar.blur(() => {
    searchResult.animate({ opacity: 0 }, 300, () => searchResult.addClass("d-none"));
    // searchResultList.empty();
});

searchForm.on("submit", e => {
    e.preventDefault();
    // Change this to push the Actual symbol of the search into the searchSymbols.recentSearches, upon clicking a result list item
    searchSymbols.recentSearches.shift(searchBar.val());
});

function search() {
    loadAllTickers();
    loadRecentSearchData();

    searchResultList.empty();
    let resultList = [];
    if (searchBar.val() === "") {
        resultList = searchSymbols.recentSearches;
    }
    else {
        resultList = searchSymbols.allTickers.filter(ticker =>
            ticker.symbol.toLowerCase().includes(searchBar.val())
            || ticker.name.toLowerCase().includes(searchBar.val())
        );
    }

    resultList.forEach(search => {
        let html = `<li class="searchResultListItem"><a href="#" onclick="saveRecentSearch(search)">${search.symbol}</a></li>`;
        searchResultList.append(html);
    });
    searchResult.animate({ opacity: 1 }, 100, () => searchResult.removeClass("d-none"));

}
function loadAllTickers() {
    if (searchSymbols.allTickers.length === 0) {
        $.get("/api/symbols", response => {
            searchSymbols.allTickers = response.data;
        });
    }
}
function loadRecentSearchData() {

    if (searchSymbols.recentSearches.length === 0) {
        $.get(`/api/users/:${currentUser}/recentSearches`, response => {
            response.forEach(ticker => {
                searchSymbols.recentSearches.push({ symbol: ticker.symbol, name: ticker.name })
            })
        });
    }
}
function saveRecentSearch(ticker) {
    console.log(ticker);
    $.post("/api/recentSearches",
        { uid: currentUser, name: ticker.name, symbol: ticker.symbol },
        response => console.log(response)
    );
}
// });