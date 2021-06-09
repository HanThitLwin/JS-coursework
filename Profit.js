profit = prompt('How many products did you sell?' ,);
numProfit = Number(profit)
switch (numProfit) {

    case 1:
        alert('You get extra 20 dollars');
        break;

    case 2:
        alert('You get extra 40 dollars');
        break;

    case 3:
        alert('You get extra 60 dollars');
        break;

    case 4:
        alert('You get extra 80 dollars');
        break;

    case 5:
        alert('You get extra 100 dollars');
        break;

    default:
        alert('You have no extra money');
        break;
}