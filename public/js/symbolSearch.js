console.log("Symbol Search loaded");

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
    populateSearchList();
}
function loadAllTickers() {
    if (!searchSymbols.allTickers.length) {
        $.get("/api/symbols", response => {
            if (response.data) {
                searchSymbols.allTickers = response.data;
                populateSearchList();
            }
        });
    }
}
function loadRecentSearchData() {
    $.get(`/api/recentSearches/${currentUser}`, response => {
        searchSymbols.recentSearches = [];
        response.forEach(ticker => {
            console.log("============\n" + JSON.stringify(ticker.Ticker.tickername));
            searchSymbols.recentSearches.push({ symbol: ticker.Ticker.symbol, tickername: ticker.Ticker.tickername });
            populateSearchList();
        })
    });
}
function saveRecentSearch(symbol, name) {
    $.post("/api/recentSearches",
        { uid: currentUser, name, symbol }
        // , response => console.log(response)
    );
}

function populateSearchList() {
    // console.log(searchSymbols.recentSearches);
    searchResultList.empty();
    let resultList = [];
    if (searchBar.val() === "") {
        resultList = searchSymbols.recentSearches;
    }
    else {
        resultList = searchSymbols.allTickers.filter(ticker =>
            ticker.symbol.toLowerCase().includes(searchBar.val())
            || ticker.tickername.toLowerCase().includes(searchBar.val())
        );
    }

    resultList.forEach(function (search, index) {
        let html = `<li class="searchResultListItem"><a href="/stock/${search.symbol}" onclick="saveRecentSearch('${search.symbol}', '${search.tickername}')"><span class="searchSymbols">${search.symbol}</span>${search.tickername}</a></li>`;
        searchResultList.append(html);
        if (index > 10) return;
    });
    searchResult.animate({ opacity: 1 }, 100, () => searchResult.removeClass("d-none"));

}
// });