$(document).ready(function () {
  let interval;
  let seconds = 0;

  const updateLabel = () => {
      const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
      const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
      const secs = (seconds % 60).toString().padStart(2, '0');
      $('#time').text(`${hours}:${minutes}:${secs}`);
  };

  const startTimer = () => {
      const deferred = $.Deferred();

      interval = setInterval(() => {
          seconds++;
          updateLabel();
      }, 1000);

      $('#stop').click(() => {
          clearInterval(interval);
          deferred.resolve();
      });

      return deferred.promise();
  };

  const resetTimer = () => {
      const deferred = $.Deferred();

      clearInterval(interval);
      seconds = 0;
      updateLabel();
      deferred.resolve();

      return deferred.promise();
  };

  $('#start').click(function () {
      startTimer().then(() => {
          console.log('Timer stopped');
      });
  });

  $('#reset').click(function () {
      resetTimer().then(() => {
          console.log('Timer reset');
      });
  });

  $('#date-picker').datepicker({
      dateFormat: 'yy-mm-dd'
  });

  // Set date picker to current date
  const today = new Date().toISOString().split('T')[0];
  $('#date-picker').val(today);

  updateLabel();
});
