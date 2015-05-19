

var song1 = document.getElementsByTagName('i')[0];
var song2 = document.getElementsByTagName('i')[1];
var song3 = document.getElementsByTagName('i')[2];
var song4 = document.getElementsByTagName('i')[3];
var player = document.getElementById('player');
var header = document.getElementById('header');
var isPlaying = false;

song1.addEventListener('click', function(){
    player.src = "tracks/favourite-food.mp3";
    if (isPlaying === true) {
      isPlaying = false;
      player.pause();
      song1.classList.add("fa-play");
      song1.classList.remove("fa-stop");
      header.innerHTML = "Select a song!";

    }
    else {
      player.play();
      isPlaying = true;
      song1.classList.remove("fa-play");
      song1.classList.add("fa-stop");
      header.innerHTML = "Now Playing:  Favorite food";
    }
});
song2.addEventListener('click', function(){
    player.src = "tracks/thrill-of-the-hunt.mp3";
    if (isPlaying === true) {
      isPlaying = false;
      player.pause();
      song2.classList.add("fa-play");
      song2.classList.remove("fa-stop");
      header.innerHTML = "Select a song!";
    }
    else {
      player.play();
      isPlaying = true;
      song2.classList.remove("fa-play");
      song2.classList.add("fa-stop");
      header.innerHTML = "Now Playing:  Thrill of the hung";
    }
    });

song3.addEventListener('click', function(){
    player.src = "tracks/transgender-dysphoria-blues.mp3";
    if (isPlaying === true) {
      isPlaying = false;
      player.pause();
      song3.classList.add("fa-play");
      song3.classList.remove("fa-stop");
      header.innerHTML = "Select a song!";
    }
    else {
      player.play();
      isPlaying = true;
      song3.classList.remove("fa-play");
      song3.classList.add("fa-stop");
      header.innerHTML = "Now Playing:  Transgender dysphoria blues";
    }});
song4.addEventListener('click', function(){
    player.src = "tracks/where-im-from.mp3";
    if (isPlaying === true) {
      isPlaying = false;
      player.pause();
      song4.classList.add("fa-play");
      song4.classList.remove("fa-stop");
      header.innerHTML = "Select a song!";
    }
    else {
      player.play();
      isPlaying = true;
      song4.classList.remove("fa-play");
      song4.classList.add("fa-stop");
      header.innerHTML = "Now Playing:  Where I'm from";
    }});
