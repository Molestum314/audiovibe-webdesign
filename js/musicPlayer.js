var audio = new Audio('media/audio/Save Me (From Myself) (feat. Kyle Hume).mp3');
var isPlaying = false;
var currentSong = 0; // Menyimpan indeks lagu saat ini
var playPauseImage = document.querySelector('#play-pause-image'); // Menambahkan pemilihan elemen gambar play/pause
var progressSlider = document.querySelector('.progress-slider');



// Daftar lagu Anda
var playlist = [
    {
        title: 'Save Me',
        artist: 'NURKO, Kyle Hume',
        mp3: 'media/audio/Save Me (From Myself) (feat. Kyle Hume).mp3',
        poster: 'media/audio/1.jpg',
    },
    {
        title: 'Faded',
        artist: 'Alan Walker',
        mp3: 'media/audio/Faded.mp3',
        poster: 'media/audio/3.jpg',
    },
    {
        title: 'Alone',
        artist: 'Alan Walker',
        mp3: 'media/audio/Alone.mp3',
        poster: 'media/audio/4.jpg',
    },
    {
        title: 'Delilah',
        artist: 'MIKOLAS, Mark Neve',
        mp3: 'media/audio/Delilah.mp3',
        poster: 'media/audio/2.jpg',
    },
    {
        title: 'Sideways',
        artist: 'ILLENIUM, Valerie Broussard, NURKO',
        mp3: 'media/audio/Sideways.mp3',
        poster: 'media/audio/5.jpg',
    },
    {
        title: 'Wake Me Up',
        artist: 'Avicii',
        mp3: 'media/audio/Wake Me Up.mp3',
        poster: 'media/audio/6.jpg',
    },
    {
        title: 'Whatever',
        artist: 'Kygo, Ava Max',
        mp3: 'media/audio/Whatever.mp3',
        poster: 'media/audio/7.jpg',
    }
	
	
	
];

function playPause() {
    var playPauseButton = document.querySelector('.play-pause-button');
    var playPauseImage = document.querySelector('#play-pause-image');
    var nowPlayingText = document.getElementById('now-playing');
    
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        playPauseImage.src = 'media/image/play.png';
        playPauseImage.alt = 'Play';
        nowPlayingText.style.display = 'none'; // Sembunyikan teks "Now Playing" saat di pause
    } else {
        audio.play();
        isPlaying = true;
        playPauseImage.src = 'media/image/pause.png';
        playPauseImage.alt = 'Pause';
        if (!audio.paused) {
            nowPlayingText.style.display = 'block'; // Tampilkan teks "Now Playing" saat di play
        }
    }
}


function updatePlayPauseButton() {
    if (isPlaying) {
        playPauseImage.src = 'media/image/pause.png';
        playPauseImage.alt = 'Pause';
    } else {
        playPauseImage.src = 'media/image/play.png';
        playPauseImage.alt = 'Play';
    }
}

function stop() {
    var playPauseImage = document.querySelector('#play-pause-image');
    var nowPlayingText = document.getElementById('now-playing');
    
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    playPauseImage.src = 'media/image/pause.png'; // Ubah gambar tombol "Play" menjadi "Pause"
    playPauseImage.alt = 'Pause';
    nowPlayingText.style.display = 'none'; // Sembunyikan teks "Now Playing" saat tombol "Stop" ditekan

    // Perbarui tampilan tombol "Play/Pause" jika diperlukan
    updatePlayPauseButton();
}

function setVolume(volume) {
    audio.volume = volume / 100;
}

function playNext() {
    currentSong++;
    if (currentSong >= playlist.length) {
        currentSong = 0; // Kembali ke lagu pertama jika sudah mencapai akhir daftar
    }
    loadAndPlayCurrentSong();
    displayNowPlaying(); // Tampilkan teks "Now Playing"
    updatePlayPauseButton(); // Update gambar tombol "Play/Pause"
}

function playPrevious() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = playlist.length - 1; // Kembali ke lagu terakhir jika sudah di awal daftar
    }
    loadAndPlayCurrentSong();
    displayNowPlaying(); // Tampilkan teks "Now Playing"
    updatePlayPauseButton(); // Update gambar tombol "Play/Pause"
}

function displayNowPlaying() {
    var nowPlayingText = document.getElementById('now-playing');
    nowPlayingText.style.display = 'block';
}

function loadAndPlayCurrentSong() {
    var song = playlist[currentSong];
    audio.src = song.mp3;
    audio.load();
    audio.play();
    isPlaying = true;
    playPauseImage.src = 'media/image/pause.png';
    playPauseImage.alt = 'Pause';

    // Update informasi lagu saat ini
    updateCurrentSongInfo(song.title, song.artist);

    // Tampilkan teks "Now Playing"
    document.getElementById('now-playing').style.display = 'block';
}


function updateCurrentSongInfo(title, artist) {
    var titleElement = document.querySelector('#current-song-title');
    var artistElement = document.querySelector('#current-song-artist');
    titleElement.textContent = title;
    artistElement.textContent = `by ${artist}`;
}

// Membuat referensi ke elemen waktu mulai dan waktu akhir
var startTimeElement = document.getElementById('start-time');
var endTimeElement = document.getElementById('end-time');

// Membuat referensi ke elemen waktu mulai dan waktu akhir
var startTimeElement = document.getElementById('start-time');
var endTimeElement = document.getElementById('end-time');

// Menunggu hingga metadata audio (termasuk duration) tersedia
audio.addEventListener('loadedmetadata', function () {
    var duration = audio.duration;

    // Menghitung menit dan detik untuk waktu akhir
    var durationMinutes = Math.floor(duration / 60);
    var durationSeconds = Math.floor(duration % 60);

    // Format waktu sebagai "menit:detik" dan perbarui elemen HTML
    endTimeElement.textContent = durationMinutes + ':' + (durationSeconds < 10 ? '0' : '') + durationSeconds;
});

audio.addEventListener('timeupdate', function () {
    var currentTime = audio.currentTime;

    // Menghitung menit dan detik untuk waktu mulai
    var currentMinutes = Math.floor(currentTime / 60);
    var currentSeconds = Math.floor(currentTime % 60);

    // Format waktu sebagai "menit:detik" dan perbarui elemen HTML
    startTimeElement.textContent = currentMinutes + ':' + (currentSeconds < 10 ? '0' : '') + currentSeconds;
});



function seekTo(value) {
    var seekTime = (value / 100) * audio.duration;
    audio.currentTime = seekTime;
}

var progressSlider = document.querySelector('.progress-slider');

audio.addEventListener('timeupdate', function() {
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    var progress = (currentTime / duration) * 100;
    progressSlider.value = progress;
    progressSlider.style.setProperty('--value', progress + '%');
});

function updateProgress() {
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    var progress = (currentTime / duration) * 100;
    progressSlider.value = progress;
    progressSlider.style.setProperty('--value', progress + '%');
    requestAnimationFrame(updateProgress);
}

audio.addEventListener('play', function() {
    updateProgress();
    progressSlider.classList.add('playing'); // Menambahkan class 'playing' saat audio diputar
});
audio.addEventListener('pause', function() {
    cancelAnimationFrame(updateProgress);
    progressSlider.classList.remove('playing'); // Menghapus class 'playing' saat audio dijeda
});

audio.addEventListener('ended', function() {
    playNext();
});

document.getElementById('volume-icon').addEventListener('click', function() {
    var volumeSlider = document.querySelector('.volume-slider');
    volumeSlider.classList.toggle('active');
});
