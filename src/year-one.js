'use strict';

var yearOne = module.exports = {};

/**
 * calculate the cost of the first year of school
 * @param { object } data - the data object
 * @returns { object } the data object with first year cost total
 */
yearOne.cost = function( data ) {
  data.costOfAttendance = data.tuitionFees +
                      data.roomBoard +
                      data.books +
                      data.otherExpenses +
                      data.transportation;

  return data.costOfAttendance;
};

/**
 * calculate debt after the first year of school
 * @param { object } data - the data object
 * @returns { object } the data object with first year cost total
 */
yearOne.debt = function( data ) {
  data.loanDebtYearOne = data.perkins +
                        data.directSubsidized +
                        data.directUnsubsidized +
                        data.gradPlus +
                        data.privateLoan +
                        data.institutionalLoan +
                        data.homeEquity;

  return data.loanDebtYearOne;
};
