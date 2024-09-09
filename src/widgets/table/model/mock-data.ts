export interface dataParams {
    id: number;
    indicator: string;
    today: number;
    yesterday: number;
    sevenSeptember?: number;
    sixSeptember?: number;
    fiveSeptember?: number;
    week: number;
}

export const data: dataParams[] = [
    {
        id: 1,
        indicator: 'Выручка, руб',
        today: 500521,
        yesterday: 480521,
        sevenSeptember: 321000,
        sixSeptember: 321000,
        fiveSeptember: 140002,
        week: 4805121,
    },
    {
        id: 2,
        indicator: 'Наличные',
        today: 300000,
        yesterday: 300000,
        sevenSeptember: 202000,
        sixSeptember: 192000,
        fiveSeptember: 140002,
        week: 300000,
    },
    {
        id: 3,
        indicator: 'Безналичный расчет',
        today: 100000,
        yesterday: 100000,
        sevenSeptember: 68000,
        sixSeptember: 122000,
        fiveSeptember: 140002,
        week: 100000,
    },
    {
        id: 4,
        indicator: 'Кредитные карты',
        today: 100521,
        yesterday: 100521,
        sevenSeptember: 98000,
        sixSeptember: 72000,
        fiveSeptember: 115000,
        week: 100521,
    },
    {
        id: 5,
        indicator: 'Средний чек, руб',
        today: 1300,
        yesterday: 900,
        sevenSeptember: 1300,
        sixSeptember: 3100,
        fiveSeptember: 2200,
        week: 900,
    },
    {
        id: 6,
        indicator: 'Средний гость, руб',
        today: 1200,
        yesterday: 800,
        sevenSeptember: 1300,
        sixSeptember: 3100,
        fiveSeptember: 2200,
        week: 800,
    },
    {
        id: 7,
        indicator: 'Удаления из чека (после оплаты), руб',
        today: 1000,
        yesterday: 1100,
        sevenSeptember: 980,
        sixSeptember: 120,
        fiveSeptember: 900,
        week: 900,
    },
    {
        id: 8,
        indicator: 'Удаления из чека (до оплаты), руб',
        today: 1300,
        yesterday: 1300,
        sevenSeptember: 1100,
        sixSeptember: 1450,
        fiveSeptember: 800,
        week: 900,
    },
    {
        id: 9,
        indicator: 'Количество чеков',
        today: 34,
        yesterday: 36,
        sevenSeptember: 31,
        sixSeptember: 32,
        fiveSeptember: 42,
        week: 34,
    },
    {
        id: 10,
        indicator: 'Количество гостей',
        today: 34,
        yesterday: 36,
        sevenSeptember: 31,
        sixSeptember: 32,
        fiveSeptember: 42,
        week: 32,
    }
]