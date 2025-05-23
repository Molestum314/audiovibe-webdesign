jQuery(document).ready(function($) {
  "use strict";

  /* Banner Player */
  $('#header_player').each(function() {
    var myPlaylist = new jPlayerPlaylist({
      jPlayer: "#main_player",
      cssSelectorAncestor: "#header_player"
    }, [{
        title: 'Save Me',
        artist: 'NURKO, Kyle Hume',
        mp3: 'media/audio/Save Me (From Myself) (feat. Kyle Hume).mp3',
        poster: "media/audio/1.jpg",
      },
      {
        title: 'Delilah',
        artist: 'MIKOLAS, Mark Neve',
        mp3: 'media/audio/Delilah.mp3',
        poster: "media/audio/2.jpg",
      },
      {
        title: 'Faded',
        artist: 'Alan Walker',
        mp3: 'media/audio/Faded.mp3',
        poster: "media/audio/3.jpg"
      },
      {
        title: 'Alone',
        artist: 'Alan Walker',
        mp3: 'media/audio/Alone.mp3',
        poster: "media/audio/4.jpg"
      },
      {
        title: 'Sideways',
        artist: 'ILLENIUM, Valerie Broussard, NURKO',
        mp3: 'media/audio/Sideways.mp3',
        poster: "media/audio/5.jpg"
      },
      {
        title: 'Wake Me Up',
        artist: 'Avicii',
        mp3: 'media/audio/Wake Me Up.mp3',
        poster: "media/audio/6.jpg"
      },
      {
        title: 'Whatever',
        artist: 'Kygo, Ava Max',
        mp3: 'media/audio/Whatever.mp3',
        poster: "media/audio/7.jpg"
      }
    ], {
      playlistOptions: {
        enableRemoveControls: true,
        html: '.play',
        // autoPlay: true,
      },
      swfPath: "dependencies/jPlayer/js",
      supplied: "oga, mp3",
      wmode: "window",
      useStateClassSkin: true,
      toggleDuration: true,
      autoBlur: false,
      smoothPlayBar: true,
      keyEnabled: true,
      displayTime: 'slow',
    });



    // Show The Current Track !!
    $("#main_player").on(
      $.jPlayer.event.ready + ' ' + $.jPlayer.event.play,
      function(event) {
        var current = myPlaylist.current;
        var playlist = myPlaylist.playlist;
        $.each(playlist, function(index, obj) {
          if (index == current) {
            $("#nowPlaying .track-name").html(obj.title);
            $("#nowPlaying .artist-name").html(obj.artist);
          }
        });
      });
  });


  new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"
  }, [{
      title: "Cro Magnon Man",
      mp3: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
      oga: "http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
    },
    {
      title: "Your Face",
      mp3: "http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
      oga: "http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
    },
    {
      title: "Cyber Sonnet",
      mp3: "http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
      oga: "http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
    },
    {
      title: "Tempered Song",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
    },
    {
      title: "Hidden",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
    },
    {
      title: "Lentement",
      free: true,
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
    },
    {
      title: "Lismore",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
    },
    {
      title: "The Separation",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
    },
    {
      title: "Beside Me",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg"
    },
    {
      title: "Bubble",
      free: true,
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
    },
    {
      title: "Stirring of a Fool",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
    },
    {
      title: "Partir",
      free: true,
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg"
    },
    {
      title: "Thin Ice",
      mp3: "http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
    }
  ], {
    swfPath: "../../dist/jplayer",
    supplied: "oga, mp3",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true
  });

});