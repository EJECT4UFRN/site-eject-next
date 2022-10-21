import { useState, useEffect } from 'react';

export function usePlayer(videoPlayerEl) {
  const [playerState, setPlayerState] = useState({
    playing: false,
    percentage: 0,
  });

  useEffect(() => {
    if (playerState.playing) {
      videoPlayerEl.current.play();
    } else {
      videoPlayerEl.current.pause();
    }
  }, [playerState.playing]);

  function handleToggleVideo() {
    setPlayerState({
      ...playerState,
      playing: !playerState.playing,
    });
  }

  function handleControlUpdate() {
    const currentPercentage =
      (videoPlayerEl.current.currentTime / videoPlayerEl.current.duration) *
      100;

    setPlayerState({
      ...playerState,
      percentage: currentPercentage,
    });
  }

  function handleChangeVideoPercentage(event) {
    const currentPercentageValue = event.target.value;
    videoPlayerEl.current.currentTime =
      (videoPlayerEl.current.duration / 100) * currentPercentageValue;

    setPlayerState({
      ...playerState,
      percentage: currentPercentageValue,
    });
  }

  return {
    playerState,
    handleToggleVideo,
    handleControlUpdate,
    handleChangeVideoPercentage,
  };
}
