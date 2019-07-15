function metricFormatter(metricValue, metricName) {
    switch (metricType[metricName]) {
        case "currency":
            return parseCurrency(metricValue);
        case "ratio":
            return +metricValue;
        case "percent":
            return Math.floor(metricValue * 1000) / 10 + "%";
        case "number":
            return parseNumber(metricValue);
        case "price":
            return "$" + Math.floor(metricValue * 100) / 100;
        case "date":
            return metricValue;
        default:
            return metricValue;
    }
}

function parseCurrency(value) {
    let counter = 0;
    let divider = Math.abs(value);
    let suffix = ""
    while (divider >= 1000) {
        divider /= 1000;
        counter++
    }
    divider = Math.floor(divider * 100) / 100;
    switch (counter) {
        case 1: suffix = "K"; break;
        case 2: suffix = "M"; break;
        case 3: suffix = "B"; break;
        case 4: suffix = "T"; break;
        case 5: suffix = "Q"; break;
        default: suffix = ""; break;
    }
    if (value < 0) divider = divider * -1
    const result = "$" + divider + " " + suffix
    console.log(value + "parsed into " + result);)
    return result;
}
function parseNumber(value) {
    let counter = 0;
    let divider = Math.abs(value);
    let suffix = ""
    while (divider >= 1000) {
        divider /= 1000;
        counter++
    }
    divider = Math.floor(divider * 100) / 100;
    switch (counter) {
        case 1: suffix = "K"; break;
        case 2: suffix = "M"; break;
        case 3: suffix = "B"; break;
        case 4: suffix = "T"; break;
        case 5: suffix = "Q"; break;
        default: suffix = ""; break;
    }

    if (value < 0) divider = divider * -1
    const result = divider + " " + suffix
    console.log(value + "parsed into " + result);
    return result;
}

const metricType = {
    currentDebt: "currency",
    debtToEquity: "ratio",
    EBITDA: "ratio",
    enterpriseValue: "currency",
    enterpriseValueToRevenue: "ratio",
    forwardPERatio: "ratio",
    pegRatio: "ratio",
    peHigh: "ratio",
    peLow: "ratio",
    priceToBook: "ratio",
    priceToSales: "ratio",
    profitMargin: "percent",
    revenue: "currency",
    revenuePerEmployee: "currency",
    revenuePerShare: "currency",
    totalCash: "currency",
    accountsPayable: "currency",
    capitalSurplus: "currency",
    commonStock: "number",
    currentAssets: "currency",
    currentCash: "currency",
    currentLongTermDebt: "currency",
    goodwill: "currency",
    intangibleAssets: "currency",
    inventory: "currency",
    longTermDebt: "currency",
    longTermInvestments: "currency",
    netTangibleAsset: "currency",
    otherAssets: "currency",
    otherCurrentAssets: "currency",
    otherCurrentLiabilities: "currency",
    otherLiabilities: "currency",
    propertyPlantEquipment: "currency",
    receivables: "currency",
    retainedEarnings: "currency",
    shareholderEquity: "currency",
    shortTermInvestments: "currency",
    totalAssets: "currency",
    totalCurrentLiabilities: "currency",
    totalLiabilities: "currency",
    treasuryStock: "number",
    capitalExpenditures: "currency",
    cashChange: "currency",
    cashFlow: "currency",
    netBorrowings: "currency",
    otherFinancingCashFlows: "currency",
    totalInvestingCashFlows: "currency",
    consensusEPS: "ratio",
    operatingRevenue: "currency",
    shortTermDebt: "currency",
    totalDebt: "currency",
    costOfRevenue: "currency",
    ebit: "ratio",
    grossProfit: "currency",
    incomeTax: "currency",
    minorityInterest: "currency",
    netIncome: "currency",
    netIncomeBasic: "currency",
    operatingExpense: "currency",
    operatingIncome: "currency",
    otherIncomeExpenseNet: "currency",
    pretaxIncome: "currency",
    researchAndDevelopment: "currency",
    sellingGeneralAndAdmin: "currency",
    totalRevenue: "currency",
    avg10Volume: "number",
    avg30Volume: "number",
    beta: "ratio",
    day200MovingAvg: "price",
    day30ChangePercent: "price",
    day50MovingAvg: "price",
    day5ChangePercent: "price",
    dividendYield: "percent",
    employees: "number",
    float: "ratio",
    marketcap: "currency",
    maxChangePercent: "percent",
    month1ChangePercent: "percent",
    month3ChangePercent: "percent",
    month6ChangePercent: "percent",
    nextDividendDate: "date",
    nextEarningsDate: "date",
    peRatio: "ratio",
    sharesOutstanding: "number",
    ttmDividendRate: "currency",
    ttmEPS: "ratio",
    week52change: "percent",
    week52high: "price",
    week52low: "price",
    year1ChangePercent: "percent",
    year2ChangePercent: "percent",
    year5ChangePercent: "percent",
    ytdChangePercent: "percent",
    priceTargetAverage: "price",
    priceTargetHigh: "price",
    priceTargetLow: "price"
};