document.addEventListener('DOMContentLoaded', () => {
  const surahSelect = document.getElementById('surahSelect');
  const audioPlayer = document.getElementById('audioPlayer');
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');

  // Fetch surah list from Quran API
  fetch('http://api.quran.com/api/v3/chapters')
    .then(response => response.json())
    .then(data => {
      data.chapters.forEach(surah => {
        const option = document.createElement('option');
        option.value = surah.id;
        option.textContent = `${surah.id}. ${surah.name_simple} (${surah.name_arabic})`;
        surahSelect.appendChild(option);
      });
    });

  surahSelect.addEventListener('change', () => {
    const surahId = surahSelect.value;
    if (surahId) {
      audioPlayer.src = `http://cdn.islamic.network/quran/audio/128/ar.alafasy/${surahId}/001.mp3`;
      audioPlayer.load();
    }
  });

  playBtn.addEventListener('click', () => audioPlayer.play());
  pauseBtn.addEventListener('click', () => audioPlayer.pause());
});
