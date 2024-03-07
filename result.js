function get_median_of_first_week_expenses(expenses) {
    let totalExpenses = [];

    for (const month in expenses) {
        for (const day in expenses[month]) {
            const date = new Date(`${month}-${day}`);
            if (date.getDay() <= 6) { // Sprawdzamy czy dzień jest w pierwszym tygodniu (od poniedziałku do niedzieli)
                for (const category in expenses[month][day]) {
                    totalExpenses = totalExpenses.concat(expenses[month][day][category]);
                }
            }
        }
    }

    if (totalExpenses.length > 0) {
        totalExpenses.sort((a, b) => a - b);
        const middle = Math.floor(totalExpenses.length / 2);
        if (totalExpenses.length % 2 === 0) {
            return (totalExpenses[middle - 1] + totalExpenses[middle]) / 2;
        } else {
            return totalExpenses[middle];
        }
    } else {
        return null;
    }
}

const expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
};

print(get_median_of_first_week_expenses(expenses));

