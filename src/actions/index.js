//Action creator
export const selectSong = song => {
  // return an action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};

// export the action creator with a name export instead of default
