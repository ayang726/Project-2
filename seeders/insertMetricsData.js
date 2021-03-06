module.exports = function (db) {
    db.Metric.bulkCreate([
        { name: 'accountsPayable', category: 'balance-sheet', metricDescription: 'Account Payable', categoryDescription: 'Balance Sheet' },
        { name: 'currentDebt', category: 'advanced-stats', metricDescription: 'Current Debt', categoryDescription: 'Advanced Stats' },
        { name: 'avg10Volume', category: 'stats', metricDescription: '10 Day Average Volume', categoryDescription: 'Key Stats' },
        { name: 'debtToEquity', category: 'advanced-stats', metricDescription: 'Debt To Equity', categoryDescription: 'Advanced Stats' },
        { name: 'avg30Volume', category: 'stats', metricDescription: '30 Day Average Volume', categoryDescription: 'Key Stats' },
        { name: 'EBITDA', category: 'advanced-stats', metricDescription: 'EBITDA', categoryDescription: 'Advanced Stats' },
        { name: 'beta', category: 'stats', metricDescription: 'Beta', categoryDescription: 'Key Stats' },
        { name: 'capitalExpenditures', category: 'cash-flow', metricDescription: 'Capital Expenditures', categoryDescription: 'Cash Flow Statement' },
        { name: 'capitalSurplus', category: 'balance-sheet', metricDescription: 'Capital Surplus', categoryDescription: 'Balance Sheet' },
        { name: 'cashChange', category: 'cash-flow', metricDescription: 'Cash Change', categoryDescription: 'Cash Flow Statement' },
        { name: 'cashFlow', category: 'cash-flow', metricDescription: 'Cash Flow', categoryDescription: 'Cash Flow Statement' },
        { name: 'commonStock', category: 'balance-sheet', metricDescription: 'Common Stock', categoryDescription: 'Balance Sheet' },
        { name: 'enterpriseValue', category: 'advanced-stats', metricDescription: 'Enterprise Value', categoryDescription: 'Advanced Stats' },
        { name: 'consensusEPS', category: 'estimates', metricDescription: 'Consensus EPS Estimates', categoryDescription: 'Estimates' },
        { name: 'costOfRevenue', category: 'income', metricDescription: 'Cost of Revenu', categoryDescription: 'Income Statement' },
        { name: 'currentAssets', category: 'balance-sheet', metricDescription: 'Current Assets', categoryDescription: 'Balance Sheet' },
        { name: 'currentCash', category: 'balance-sheet', metricDescription: 'Current Cash', categoryDescription: 'Balance Sheet' },
        { name: 'enterpriseValueToRevenue', category: 'advanced-stats', metricDescription: 'Enterprice Value to Revenu', categoryDescription: 'Advanced Stats' },
        { name: 'currentLongTermDebt', category: 'balance-sheet', metricDescription: 'Curernt Long Term Debt', categoryDescription: 'Balance Sheet' },
        { name: 'forwardPERatio', category: 'advanced-stats', metricDescription: 'Forward PE Ratio', categoryDescription: 'Advanced Stats' },
        { name: 'day200MovingAvg', category: 'stats', metricDescription: '200 Day Moving Average', categoryDescription: 'Key Stats' },
        { name: 'pegRatio', category: 'advanced-stats', metricDescription: 'PEG Ratio', categoryDescription: 'Advanced Stats' },
        { name: 'day30ChangePercent', category: 'stats', metricDescription: '30 Day Change Percentage', categoryDescription: 'Key Stats' },
        { name: 'peHigh', category: 'advanced-stats', metricDescription: 'PE High', categoryDescription: 'Advanced Stats' },
        { name: 'day50MovingAvg', category: 'stats', metricDescription: '50 Day Moving Average', categoryDescription: 'Key Stats' },
        { name: 'peLow', category: 'advanced-stats', metricDescription: 'PE Low', categoryDescription: 'Advanced Stats' },
        { name: 'day5ChangePercent', category: 'stats', metricDescription: '5 Day Change Percent', categoryDescription: 'Key Stats' },
        { name: 'priceToBook', category: 'advanced-stats', metricDescription: 'Price to Book Value', categoryDescription: 'Advanced Stats' },
        { name: 'priceToSales', category: 'advanced-stats', metricDescription: 'Price to Sales', categoryDescription: 'Advanced Stats' },
        { name: 'dividendYield', category: 'stats', metricDescription: 'Divident Yield', categoryDescription: 'Key Stats' },
        { name: 'ebit', category: 'income', metricDescription: 'EBIT', categoryDescription: 'Income Statement' },
        { name: 'profitMargin', category: 'advanced-stats', metricDescription: 'Profit Margin', categoryDescription: 'Advanced Stats' },
        { name: 'revenue', category: 'advanced-stats', metricDescription: 'Revenu', categoryDescription: 'Advanced Stats' },
        { name: 'employees', category: 'stats', metricDescription: 'Number of Employees', categoryDescription: 'Key Stats' },
        { name: 'revenuePerEmployee', category: 'advanced-stats', metricDescription: 'Revenu Per Exployee', categoryDescription: 'Advanced Stats' },
        { name: 'revenuePerShare', category: 'advanced-stats', metricDescription: 'Revenu Per Share', categoryDescription: 'Advanced Stats' },
        { name: 'totalCash', category: 'advanced-stats', metricDescription: 'Total Cash', categoryDescription: 'Advanced Stats' },
        { name: 'float', category: 'stats', metricDescription: 'Float', categoryDescription: 'Key Stats' },
        { name: 'goodwill', category: 'balance-sheet', metricDescription: 'Good Will', categoryDescription: 'Balance Sheet' },
        { name: 'grossProfit', category: 'income', metricDescription: 'Gross Profit ', categoryDescription: 'Income Statement' },
        { name: 'incomeTax', category: 'income', metricDescription: 'Income Tax', categoryDescription: 'Income Statement' },
        { name: 'intangibleAssets', category: 'balance-sheet', metricDescription: 'Intangible Assets', categoryDescription: 'Balance Sheet' },
        { name: 'inventory', category: 'balance-sheet', metricDescription: 'Inventory', categoryDescription: 'Balance Sheet' },
        { name: 'longTermDebt', category: 'balance-sheet', metricDescription: 'Long Term Debt', categoryDescription: 'Balance Sheet' },
        { name: 'longTermInvestments', category: 'balance-sheet', metricDescription: 'Long Term Investments', categoryDescription: 'Balance Sheet' },
        { name: 'marketcap', category: 'stats', metricDescription: 'Market Cap', categoryDescription: 'Key Stats' },
        { name: 'maxChangePercent', category: 'stats', metricDescription: 'Max Change Percent', categoryDescription: 'Key Stats' },
        { name: 'minorityInterest', category: 'income', metricDescription: 'Minority Interest', categoryDescription: 'Income Statement' },
        { name: 'month1ChangePercent', category: 'stats', metricDescription: '1 Month Change Percent', categoryDescription: 'Key Stats' },
        { name: 'month3ChangePercent', category: 'stats', metricDescription: '3 Month Change Percent', categoryDescription: 'Key Stats' },
        { name: 'month6ChangePercent', category: 'stats', metricDescription: '6 Month Change Percent', categoryDescription: 'Key Stats' },
        { name: 'netBorrowings', category: 'cash-flow', metricDescription: 'Net Borrowings', categoryDescription: 'Cash Flow Statement' },
        { name: 'netIncome', category: 'income', metricDescription: 'Net Income', categoryDescription: 'Income Statement' },
        { name: 'netIncomeBasic', category: 'income', metricDescription: 'Basic Net Income', categoryDescription: 'Income Statement' },
        { name: 'netTangibleAsset', category: 'balance-sheet', metricDescription: 'Net Tangible Asset', categoryDescription: 'Balance Sheet' },
        { name: 'nextDividendDate', category: 'stats', metricDescription: 'Next Dividend Date', categoryDescription: 'Key Stats' },
        { name: 'nextEarningsDate', category: 'stats', metricDescription: 'Next Earnings Date', categoryDescription: 'Key Stats' },
        { name: 'operatingExpense', category: 'income', metricDescription: 'Operating Expense', categoryDescription: 'Income Statement' },
        { name: 'operatingIncome', category: 'income', metricDescription: 'Operating Income', categoryDescription: 'Income Statement' },
        { name: 'operatingRevenue', category: 'financials', metricDescription: 'Operating Revenue', categoryDescription: 'Financial Statements' },
        { name: 'otherAssets', category: 'balance-sheet', metricDescription: 'Other Assets', categoryDescription: 'Balance Sheet' },
        { name: 'otherCurrentAssets', category: 'balance-sheet', metricDescription: 'Other Current Assets', categoryDescription: 'Balance Sheet' },
        { name: 'otherCurrentLiabilities', category: 'balance-sheet', metricDescription: 'Other Current Liabilities', categoryDescription: 'Balance Sheet' },
        { name: 'otherFinancingCashFlows', category: 'cash-flow', metricDescription: 'Other Financing Cash Flows', categoryDescription: 'Cash Flow Statement' },
        { name: 'otherIncomeExpenseNet', category: 'income', metricDescription: 'Other Income Expense Net', categoryDescription: 'Income Statement' },
        { name: 'otherLiabilities', category: 'balance-sheet', metricDescription: 'Other Liabilities', categoryDescription: 'Balance Sheet' },
        { name: 'peRatio', category: 'stats', metricDescription: 'PR Ratio', categoryDescription: 'Key Stats' },
        { name: 'pretaxIncome', category: 'income', metricDescription: 'Pretax Income', categoryDescription: 'Income Statement' },
        { name: 'priceTargetAverage', category: 'price-target', metricDescription: 'Average Price Target', categoryDescription: 'Price Target' },
        { name: 'priceTargetHigh', category: 'price-target', metricDescription: 'Price Target High', categoryDescription: 'Price Target' },
        { name: 'priceTargetLow', category: 'price-target', metricDescription: 'Price Target Low', categoryDescription: 'Price Target' },
        { name: 'propertyPlantEquipment', category: 'balance-sheet', metricDescription: 'Property Plant Equipment', categoryDescription: 'Balance Sheet' },
        { name: 'receivables', category: 'balance-sheet', metricDescription: 'Receivables', categoryDescription: 'Balance Sheet' },
        { name: 'researchAndDevelopment', category: 'income', metricDescription: 'Research And Development', categoryDescription: 'Income Statement' },
        { name: 'retainedEarnings', category: 'balance-sheet', metricDescription: 'Retained Earnings', categoryDescription: 'Balance Sheet' },
        { name: 'sellingGeneralAndAdmin', category: 'income', metricDescription: 'SG&A', categoryDescription: 'Income Statement' },
        { name: 'shareholderEquity', category: 'balance-sheet', metricDescription: "Shareholder's Equity", categoryDescription: 'Balance Sheet' },
        { name: 'sharesOutstanding', category: 'stats', metricDescription: 'Outstanding Shares', categoryDescription: 'Key Stats' },
        { name: 'shortTermDebt', category: 'financials', metricDescription: 'Short Term Debt', categoryDescription: 'Financial Statements' },
        { name: 'shortTermInvestments', category: 'balance-sheet', metricDescription: 'Short Term Investments', categoryDescription: 'Balance Sheet' },
        { name: 'totalAssets', category: 'balance-sheet', metricDescription: 'Total Assets', categoryDescription: 'Balance Sheet' },
        { name: 'totalCurrentLiabilities', category: 'balance-sheet', metricDescription: 'Total Current Liabilities', categoryDescription: 'Balance Sheet' },
        { name: 'totalDebt', category: 'financials', metricDescription: 'Total Debt', categoryDescription: 'Financial Statements' },
        { name: 'totalInvestingCashFlows', category: 'cash-flow', metricDescription: 'Total Investment Cash Flow', categoryDescription: 'Cash Flow Statement' },
        { name: 'totalLiabilities', category: 'balance-sheet', metricDescription: 'Total Liabilities', categoryDescription: 'Balance Sheet' },
        { name: 'totalRevenue', category: 'income', metricDescription: 'Total Revenu', categoryDescription: 'Income Statement' },
        { name: 'treasuryStock', category: 'balance-sheet', metricDescription: 'Treasury Stock', categoryDescription: 'Balance Sheet' },
        { name: 'ttmDividendRate', category: 'stats', metricDescription: 'TTM Dividend Rate', categoryDescription: 'Key Stats' },
        { name: 'ttmEPS', category: 'stats', metricDescription: 'TTM EPS', categoryDescription: 'Key Stats' },
        { name: 'week52change', category: 'stats', metricDescription: '52 Week Change', categoryDescription: 'Key Stats' },
        { name: 'week52high', category: 'stats', metricDescription: '52 Week High', categoryDescription: 'Key Stats' },
        { name: 'week52low', category: 'stats', metricDescription: '52 Week Low', categoryDescription: 'Key Stats' },
        { name: 'year1ChangePercent', category: 'stats', metricDescription: '1 Year Change Percent', categoryDescription: 'Key Stats' },
        { name: 'year2ChangePercent', category: 'stats', metricDescription: '2 Year Change Percent', categoryDescription: 'Key Stats' },
        { name: 'year5ChangePercent', category: 'stats', metricDescription: '5 Year Change Percent', categoryDescription: 'Key Stats' },
        { name: 'ytdChangePercent', category: 'stats', metricDescription: 'YTD Year Change Percent', categoryDescription: 'Key Stats' }
    ]).then(response => {
        if (response) console.log("Metrics data imported successfully 110");
    });
}

