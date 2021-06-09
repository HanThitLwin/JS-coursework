singerName = prompt('What is your favourite singer?' , '');

function taylor_swift(params) {
    alert (' name : Taylor Swift');
    alert ('Born : December 13, 1989');
    alert ('Net worth : US$365 million');
    alert ('Genres : Pop,Country,Rock,Folk,Alternative');
}

function lady_gaga(params) {
    alert ('Name : Lady Gaga');
    alert ('Born : March 28, 1986');
    alert ('Net worth : US$275 million');
    alert ('Genres : Pop,Dance,Electronic');
}

if (singerName = 'Taylor Swift') {
    taylor_swift()
}

else if (singerName = 'Lady Gaga') {
    lady_gaga()
}

else {
    alert('Data not found');
}