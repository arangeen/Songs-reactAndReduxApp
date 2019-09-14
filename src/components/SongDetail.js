import React from "react";

const SongDetail = props => {
  return <div>Song Detail</div>;
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
