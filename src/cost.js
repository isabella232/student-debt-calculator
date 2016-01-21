'use strict';

 /**
  * calculate borrowing total and out of pocket costs
  * @param { object } data - the data object
  * @returns { object } the data object with cost
  */
function cost( data ) {

  // cost of attendance
  data.costOfAttendance = data.tuitionFees +
                        data.roomBoard +
                        data.books +
                        data.otherExpenses +
                        data.transportation;

  // Borrowing Total
  data.borrowingTotal = data.privateInstitutionalTotal + data.federalTotal;

  // Money for College Total
  data.moneyForCollege = data.grantsSavingsTotal + data.borrowingTotal;

  // remainingCost -- "Left to Pay"
  data.remainingCost = data.firstYearNetCost - data.grantsSavingsTotal;
  if ( data.remainingCost < 0 ) {
    data.remainingCost = 0;
  }

  return data;
}

module.exports = cost;
