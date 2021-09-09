function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    
    return {
      total,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const minutes = clock.querySelector('.minutes');
    const seconds= clock.querySelector('.seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      minutes.innerHTML = ('0' + t.minutes).slice(-2);
      seconds.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
        location.reload();
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = new Date(Date.parse(new Date()) + 102 * 1000);
  initializeClock('timer', deadline);