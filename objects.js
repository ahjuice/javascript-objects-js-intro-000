var playlist = new Object({['Jane Zhang']: 'Dust My Shoulders Off'});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
