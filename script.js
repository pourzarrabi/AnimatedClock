// https://stellular-custard-d13aff.netlify.app/

function clock() {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.save();
  // Default
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#d885fc';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  // Face & Border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 8;
  ctx.strokeStyle = 'lightgreen';
  ctx.arc(0, 0, 142, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // Hour Lines
  ctx.save();
  ctx.strokeStyle = 'blue';
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.moveTo(110, 0);
    ctx.lineTo(130, 0);
    ctx.stroke();
    ctx.rotate(Math.PI / 6);
  }
  ctx.restore();

  // Minute Lines
  ctx.save();
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 1;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(120, 0);
      ctx.lineTo(130, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  // Hour Hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.beginPath();
  ctx.strokeStyle = 'yellow';
  ctx.lineWidth = 10;
  ctx.moveTo(0, 0);
  ctx.lineTo(60, 0);
  ctx.stroke();
  ctx.restore();

  // Minute Hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 8;
  ctx.moveTo(0, 0);
  ctx.lineTo(95, 0);
  ctx.stroke();
  ctx.restore();

  // Second Hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * sec);
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 4;
  ctx.moveTo(0, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.arc(0, 0, 10, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.restore();

  ctx.restore();
  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);
