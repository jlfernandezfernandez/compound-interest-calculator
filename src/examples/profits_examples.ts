const globalYearlyTotals = [
    {
        "year": 1,
        "totalContribution": 5400,
        "totalGenerated": 8686.591877836603,
        "totalInterest": 286.59187783660286,
        "totalInitialAmount": 3000
    },
    {
        "year": 2,
        "totalContribution": 10800,
        "totalGenerated": 14721.193666667536,
        "totalInterest": 921.1936666675356,
        "totalInitialAmount": 3000
    },
    {
        "year": 3,
        "totalContribution": 16200,
        "totalGenerated": 21133.435975551813,
        "totalInterest": 1933.4359755518135,
        "totalInitialAmount": 3000
    },
    {
        "year": 4,
        "totalContribution": 21600,
        "totalGenerated": 27955.796477403823,
        "totalInterest": 3355.7964774038196,
        "totalInitialAmount": 3000
    },
    {
        "year": 5,
        "totalContribution": 27000,
        "totalGenerated": 35223.88481973963,
        "totalInterest": 5223.884819739633,
        "totalInitialAmount": 3000
    },
    {
        "year": 6,
        "totalContribution": 32400,
        "totalGenerated": 42976.756419681864,
        "totalInterest": 7576.756419681861,
        "totalInitialAmount": 3000
    },
    {
        "year": 7,
        "totalContribution": 37800,
        "totalGenerated": 51257.25808341207,
        "totalInterest": 10457.25808341207,
        "totalInitialAmount": 3000
    },
    {
        "year": 8,
        "totalContribution": 43200,
        "totalGenerated": 60112.408689924174,
        "totalInterest": 13912.408689924177,
        "totalInitialAmount": 3000
    },
    {
        "year": 9,
        "totalContribution": 48600,
        "totalGenerated": 69593.81850914995,
        "totalInterest": 17993.818509149947,
        "totalInitialAmount": 3000
    },
    {
        "year": 10,
        "totalContribution": 54000,
        "totalGenerated": 79758.1510884149,
        "totalInterest": 22758.151088414903,
        "totalInitialAmount": 3000
    },
    {
        "year": 11,
        "totalContribution": 59400,
        "totalGenerated": 90667.63204217236,
        "totalInterest": 28267.63204217238,
        "totalInitialAmount": 3000
    },
    {
        "year": 12,
        "totalContribution": 64800,
        "totalGenerated": 102390.60952183933,
        "totalInterest": 34590.609521839346,
        "totalInitialAmount": 3000
    },
    {
        "year": 13,
        "totalContribution": 70200,
        "totalGenerated": 115002.17162948848,
        "totalInterest": 41802.17162948848,
        "totalInitialAmount": 3000
    },
    {
        "year": 14,
        "totalContribution": 75600,
        "totalGenerated": 128584.8265757314,
        "totalInterest": 49984.8265757314,
        "totalInitialAmount": 3000
    },
    {
        "year": 15,
        "totalContribution": 81000,
        "totalGenerated": 143229.2519734215,
        "totalInterest": 59229.251973421495,
        "totalInitialAmount": 3000
    },
    {
        "year": 16,
        "totalContribution": 86400,
        "totalGenerated": 159035.12031038947,
        "totalInterest": 69635.12031038947,
        "totalInitialAmount": 3000
    },
    {
        "year": 17,
        "totalContribution": 91800,
        "totalGenerated": 176112.00836245055,
        "totalInterest": 81312.00836245055,
        "totalInitialAmount": 3000
    },
    {
        "year": 18,
        "totalContribution": 97200,
        "totalGenerated": 194580.39909916217,
        "totalInterest": 94380.39909916217,
        "totalInitialAmount": 3000
    },
    {
        "year": 19,
        "totalContribution": 102600,
        "totalGenerated": 214572.7855067326,
        "totalInterest": 108972.78550673259,
        "totalInitialAmount": 3000
    },
    {
        "year": 20,
        "totalContribution": 108000,
        "totalGenerated": 236234.88671331177,
        "totalInterest": 125234.8867133118,
        "totalInitialAmount": 3000
    },
    {
        "year": 21,
        "totalContribution": 113400,
        "totalGenerated": 259726.9878607014,
        "totalInterest": 143326.9878607014,
        "totalInitialAmount": 3000
    },
    {
        "year": 22,
        "totalContribution": 118800,
        "totalGenerated": 285225.4163332914,
        "totalInterest": 163425.4163332914,
        "totalInitialAmount": 3000
    },
    {
        "year": 23,
        "totalContribution": 124200,
        "totalGenerated": 312924.16824078094,
        "totalInterest": 185724.1682407809,
        "totalInitialAmount": 3000
    },
    {
        "year": 24,
        "totalContribution": 129600,
        "totalGenerated": 343036.70046809374,
        "totalInterest": 210436.70046809368,
        "totalInitialAmount": 3000
    },
    {
        "year": 25,
        "totalContribution": 135000,
        "totalGenerated": 375797.9051672367,
        "totalInterest": 237797.9051672367,
        "totalInitialAmount": 3000
    }
];

export const barChartData = {
    labels: globalYearlyTotals.map(item => `${item.year}`),
    datasets: [
        {
            label: 'Total Contribuido',
            data: globalYearlyTotals.map(item => item.totalContribution),
            backgroundColor: '#B784B7',
        },
        {
            label: 'Total Intereses Generados',
            data: globalYearlyTotals.map(item => item.totalInterest),
            backgroundColor: '#E493B3',
        },
        {
            label: 'Balance Inicial',
            data: globalYearlyTotals.map(item => item.totalInitialAmount),
            backgroundColor: '#EEA5A6',
        },
    ],
};