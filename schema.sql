Drop database if exists Stocker;
create database Stocker;

Use Stocker;
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('accountsPayable', 'Account Payable', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('currentDebt', 'Current Debt', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('avg10Volume', '10 Day Average Volume', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('debtToEquity', 'Debt To Equity', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('avg30Volume', '30 Day Average Volume', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('EBITDA', 'EBITDA', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('beta', 'Beta', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('capitalExpenditures', 'Capital Expenditures', 'Cash Flow Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('capitalSurplus', 'Capital Surplus', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('cashChange', 'Cash Change', 'Cash Flow Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('cashFlow', 'Cash Flow', 'Cash Flow Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('commonStock', 'Common Stock', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('enterpriseValue', 'Enterprise Value', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('consensusEPS', 'Consensus EPS Estimates', 'Estimates', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('costOfRevenue', 'Cost of Revenu', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('currentAssets', 'Current Assets', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('currentCash', 'Current Cash', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('enterpriseValueToRevenue', 'Enterprice Value to Revenu', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('currentLongTermDebt', 'Curernt Long Term Debt', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('forwardPERatio', 'Forward PE Ratio', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('day200MovingAvg', '200 Day Moving Average', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('pegRatio', 'PEG Ratio', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('day30ChangePercent', '30 Day Change Percentage', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('peHigh', 'PE High', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('day50MovingAvg', '50 Day Moving Average', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('peLow', 'PE Low', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('day5ChangePercent', '5 Day Change Percent', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('priceToBook', 'Price to Book Value', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('priceToSales', 'Price to Sales', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('dividendYield', 'Divident Yield', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('ebit', 'EBIT', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('profitMargin', 'Profit Margin', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('revenue', 'Revenu', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('employees', 'Number of Employees', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('revenuePerEmployee', 'Revenu Per Exployee', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('revenuePerShare', 'Revenu Per Share', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('totalCash', 'Total Cash', 'Advanced Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('float', 'Float', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('goodwill', 'Good Will', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('grossProfit', 'Gross Profit ', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('incomeTax', 'Income Tax', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('intangibleAssets', 'Intangible Assets', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('inventory', 'Inventory', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('longTermDebt', 'Long Term Debt', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('longTermInvestments', 'Long Term Investments', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('marketcap', 'Market Cap', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('maxChangePercent', 'Max Change Percent', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('minorityInterest', 'Minority Interest', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('month1ChangePercent', '1 Month Change Percent', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('month3ChangePercent', '3 Month Change Percent', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('month6ChangePercent', '6 Month Change Percent', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('netBorrowings', 'Net Borrowings', 'Cash Flow Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('netIncome', 'Net Income', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('netIncomeBasic', 'Basic Net Income', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('netTangibleAsset', 'Net Tangible Asset', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('nextDividendDate', 'Next Dividend Date', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('nextEarningsDate', 'Next Earnings Date', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('operatingExpense', 'Operating Expense', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('operatingIncome', 'Operating Income', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('operatingRevenue', 'Operating Revenue', 'Financial Statements', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('otherAssets', 'Other Assets', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('otherCurrentAssets', 'Other Current Assets', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('otherCurrentLiabilities', 'Other Current Liabilities', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('otherFinancingCashFlows', 'Other Financing Cash Flows', 'Cash Flow Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('otherIncomeExpenseNet', 'Other Income Expense Net', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('otherLiabilities', 'Other Liabilities', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('peRatio', 'PR Ratio', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('pretaxIncome', 'Pretax Income', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('priceTargetAverage', 'Average Price Target', 'Price Target', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('priceTargetHigh', 'Price Target High', 'Price Target', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('priceTargetLow', 'Price Target Low', 'Price Target', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('propertyPlantEquipment', 'Property Plant Equipment', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('receivables', 'Receivables', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('researchAndDevelopment', 'Research And Development', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('retainedEarnings', 'Retained Earnings', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('sellingGeneralAndAdmin', 'SG&A', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('shareholderEquity', 'Shareholder''s Equity', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('sharesOutstanding', 'Outstanding Shares', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('shortTermDebt', 'Short Term Debt', 'Financial Statements', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('shortTermInvestments', 'Short Term Investments', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('totalAssets', 'Total Assets', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('totalCurrentLiabilities', 'Total Current Liabilities', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('totalDebt', 'Total Debt', 'Financial Statements', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('totalInvestingCashFlows', 'Total Investment Cash Flow', 'Cash Flow Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('totalLiabilities', 'Total Liabilities', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('totalRevenue', 'Total Revenu', 'Income Statement', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('treasuryStock', 'Treasury Stock', 'Balance Sheet', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('ttmDividendRate', 'TTM Dividend Rate', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('ttmEPS', 'TTM EPS', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('week52change', '52 Week Change', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('week52high', '52 Week High', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('week52low', '52 Week Low', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('year1ChangePercent', '1 Year Change Percent', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('year2ChangePercent', '2 Year Change Percent', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('year5ChangePercent', '5 Year Change Percent', 'Key Stats', 'Daily', now(), now());
INSERT INTO METRICS
    (Metric, Description, Category, Period, createdAt, updatedAt)
Values
    ('ytdChangePercent', 'YTD Year Change Percent', 'Key Stats', 'Daily', now(), now());