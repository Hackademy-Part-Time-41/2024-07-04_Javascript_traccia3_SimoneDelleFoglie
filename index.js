console.log('Inizio');
var temperature= prompt('Inserisci la temperatura');
if (temperature< -10) {
    console.log(temperature);
    console.log('copriti...ancora ti raffreddi!');
} else {
    if (temperature < 0 && temperature >= -10) {
        console.log(temperature);
        console.log("non è tanto il freddo quanto l'umidità");
    } else {
        if (temperature <20 && temperature >= 0) {
            console.log(temperature);
            console.log('non ci sono più le mezze stagioni');
        } else {
            if (temperature<30 && temperature>= 20) {
                console.log(temperature);
                console.log('mi dia una peroni sudata');
            } else {
                if (temperature>= 30) {
                    console.log(temperature);
                    console.log('lu mare, lu sole, lu ientu');
                }
            }
        }
    }
}
console.log('Fine');
