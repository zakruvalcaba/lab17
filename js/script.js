/*eslint-env browser*/

//CREATE A JUKEBOX CLASS
var Jukebox = function () {
    "use strict";
    var albums = [], self;
    self = {
        //ADD EACH ALBUM TO THE ALBUMS ARRAY
        addAlbum: function (album) {
            albums.push(album);
        },
        //RETURN THE ALBUM THAT'S BEEN PLAYED THE MOST
        favoriteAlbum: function () {
            var max = 0, fav, i;
            
            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};
//CREATE AN ALBUM CLASS
var Album = function (artist, album) {
    "use strict";
    var self = {
        played: 0,
        //INCREASE THE AMOUNT OF TIMES AN ALBUM HAS BEEN PLAYED
        play: function () {
            this.played += 1;
        },
        //DISPLAY THE AMOUNT OF TIMES ALBUM HAS BEEN PLAYED
        display: function () {
            return artist + " \"" + album + "\". It's been played " + this.played + " times.";
        }
    };
    return self;
};
//CREATE JUKEBOX
var jukebox = new Jukebox();
//CREATE 3 ALBUMS
var album1 = new Album("Shakira", "Knock on my Door");
var album2 = new Album("A Tribe Called Quest", "The Low End Theory");
var album3 = new Album("Imagine Dragons", "Hell and Silence");
//ADD ALL 3 ALBUMS TO JUKEBOX
jukebox.addAlbum(album1);
jukebox.addAlbum(album2);
jukebox.addAlbum(album3);
//PLAY ALBUMS
album1.play();
album1.play();
album1.play();
album2.play();
album3.play();
album1.play();
album3.play();
//DISPLAY FAVORITE ALBUM BASED ON PLAYS
window.console.log("Your favorite album is: " + jukebox.favoriteAlbum());