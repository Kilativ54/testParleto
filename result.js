function get_median_of_first_week_expenses(expenses) {
    const medians = {};

    for (const yearMonth in expenses) {
        const foodExpenses = [];
        for (const date in expenses[yearMonth]) {
            if (expenses[yearMonth][date].food) {
                foodExpenses.push(...expenses[yearMonth][date].food);
            }
        }

        const median = foodExpenses.length > 0 ? calculateMedian(foodExpenses) : 0;
        medians[yearMonth] = median;
    }

    return medians;
}

function calculateMedian(array) {
    array.sort((a, b) => a - b);
    const mid = Math.floor(array.length / 2);
    return array.length % 2 !== 0 ? array[mid] : (array[mid - 1] + array[mid]) / 2;
}


const expenses = {
    "2023-01": {
        "01": {
            "food": [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
            "fuel": [210.22]
        },
        "09": {
            "food": [11.9],
            "fuel": [190.22]
        }
    },
    "2023-03": {
        "07": {
            "food": [20, 11.9, 30.20, 11.9]
        },
        "04": {
            "food": [10.20, 11.50, 2.5],
            "fuel": []
        }
    },
    "2023-04": {}
};

function getDatesUntilFirstSunday(year, month) {
    const dates = [];
    for (let day = 1; day <= 7; day++) {
        const currentDate = new Date(year, month - 1, day);
        if (currentDate.getDay() === 0) {
            dates.push(currentDate);
            break;
        }
    }
    return dates;
}

const result = get_median_of_first_week_expenses(expenses);
console.log(result);

function averageSum(obj) {
	let sum = 0;
	let count = 0;
  
	for (let key in obj) {
	  if (typeof obj[key] === 'number') {
		sum += obj[key];
		count++;
	  }
	}
  
	if (count === 0) {
	  return 0; 
	}
  
	return sum / count;
  }

  
  console.log(averageSum(result));

  print(averageSum(result))