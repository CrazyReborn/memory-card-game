import beetImage from '../images/beet.png';
import brocolliImage from '../images/brocolli.png';
import cucumberImage from '../images/cucumber.png';
import garlicImage from '../images/garlic.png';
import greenPeaImage from '../images/green_pea.png';
import lemonImage from '../images/lemon.png';
import onionImage from '../images/onion.png';
import orangeImage from '../images/orange.png';
import potatoImage from '../images/potato.png';
import tomatoImage from '../images/tomato.png';
import uniqid from 'uniqid';


const beet = {
    name: 'beet',
    url: beetImage,
    id: uniqid(),
}

const brocolli = {
    name: 'brocolli',
    url: brocolliImage,
    id: uniqid(),
}

const cucumber = {
    name: 'cucumber',
    url: cucumberImage,
    id: uniqid(),
}

const garlic = {
    name: 'garlic',
    url: garlicImage,
    id: uniqid(),
}

const greenPea = {
    name: 'green pea',
    url: greenPeaImage,
    id: uniqid(),
}

const lemon = {
    name: 'lemon',
    url: lemonImage,
    id: uniqid(),
}

const onion = {
    name: 'onion',
    url: onionImage,
    id: uniqid(),
}

const orange = {
    name: 'orange',
    url: orangeImage,
    id: uniqid(),
}

const potato = {
    name: 'potato',
    url: potatoImage,
    id: uniqid(),
}

const tomato = {
    name: 'tomato',
    url: tomatoImage,
    id: uniqid(),
}

const images = {
    list: [beet, brocolli, cucumber, garlic, greenPea,
           lemon, onion, orange, potato, tomato],
    shuffle: function() {
        var j, x, index;
        for (index = this.list.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = this.list[index];
        this.list[index] = this.list[j];
        this.list[j] = x;
        }
    }
}

export default images