import Character from './../features/characters/character';
import babu from './../assets/images/babu.png';
import bianca from './../assets/images/bianca.png';
import chumbo from './../assets/images/chumbo.png';
import felipe from './../assets/images/felipe.png';
import flay from './../assets/images/flay.png';
import gabi from './../assets/images/gabi.png';
import giselly from './../assets/images/giselly.png';
import guilherme from './../assets/images/guilherme.png';
import hadson from './../assets/images/hadson.png';
import lucas from './../assets/images/lucas.png';
import manu from './../assets/images/manu.png';
import marcela from './../assets/images/marcela.png';
import mari from './../assets/images/mari.png';
import petrix from './../assets/images/petrix.png';
import pyong from './../assets/images/pyong.png';
import rafa from './../assets/images/rafa.png';
import thelma from './../assets/images/thelma.png';
import victor from './../assets/images/victor.png';
import User from '../features/user/user';
import tiago from './../assets/images/tiago_leifert.jpg';

let charactersData = [
    new Character(1, 'Giselly', [], giselly),
    new Character(2, 'Babu', [], babu),
    new Character(3, 'Flay', [], flay),
    new Character(4, 'Prior', [], felipe),
    new Character(5, 'Gabi', [], gabi),
    new Character(6, 'Bianca', [], bianca),
    new Character(7, 'Guilherme', [], guilherme),
    new Character(8, 'Pyong', [], pyong),
    new Character(9, 'Hadson', [], hadson),
    new Character(10, 'Manu', [], manu),
    new Character(11, 'Chumbo', [], chumbo),
    new Character(12, 'Marcela', [], marcela),
    new Character(13, 'Lucas', [], lucas),
    new Character(14, 'Mari', [], mari),
    new Character(15, 'Thelma', [], thelma),
    new Character(16, 'Petrix', [], petrix),
    new Character(17, 'Rafa', [], rafa),
    new Character(18, 'Victor', [], victor),
];

let user = new User('Tiago', 'Leifert', tiago);

export { charactersData, user };