// problem 1 : anna to vori

function anaToVori(anna) {
  if (!(typeof anna === "number" && anna > 0))
    return "input should be greater-than 0 and not any string";
  let output;
  return (output = anna * 0.0625); // anna to vori calculation
}
// console.log(anaToVori());

// problem 2 : pandaCost

function pandaCost(singara, somucha, jilapi) {
  if (
    !(
      typeof singara === "number" &&
      typeof somucha === "number" &&
      typeof jilapi === "number" &&
      singara >= 0 &&
      somucha >= 0 &&
      jilapi >= 0
    )
  )
    return "input should be greater-than 0 and not any string";
  let totalCost = singara * 7 + somucha * 10 + jilapi * 15; //  total cost calculation
  return totalCost;
}
// console.log(pandaCost());

// problem 3 : picnicBudget

function picnicBudget(numberOfperson) {
  let totalBudget;
  let remainingPerson;
  if (!(typeof numberOfperson === "number" && numberOfperson > 0))
    return "input should be greater-than 0 and not any string";
  else if (numberOfperson <= 100) {
    return (totalBudget = numberOfperson * 5000); //budget for 0-100 person
  } else if (numberOfperson > 100 && numberOfperson <= 200) {
    remainingPerson = numberOfperson - 100;
    return (totalBudget = remainingPerson * 4000 + 100 * 5000); //budget for 100-200 person
  } else if (numberOfperson > 200) {
    remainingPerson = numberOfperson - 200;
    return (totalBudget = remainingPerson * 3000 + 100 * 4000 + 100 * 5000); //budget for more than 200 person
  }
}
// console.log(picnicBudget());
// problem 4 : oddFriend

function oddFriend(friends) {
  if (!(Array.isArray(friends) && friends.length > [""]))
    return "input should be an Array and Array element should be more than one string";
  else
    for (let friend of friends) {
      if (friend.length % 2 == 1) {
        return friend; // return the 1st odd name or undefind(if no odd name)
      }
    }
}

// let result = oddFriend();
// console.log(result);
