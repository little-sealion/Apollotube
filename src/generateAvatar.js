export default function generateAvatar(text) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const foregroundColor = 'white';
  const backgroundColor = random_bg_color(text);
  canvas.width = 40;
  canvas.height = 40;

  // Draw background
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text
  context.font = 'bold 20px Assistant';
  context.fillStyle = foregroundColor;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL('image/png');
}

function random_bg_color(text) {
  var x = Math.floor(((text?.toLowerCase().charCodeAt(0) - 96) / 26) * 256);
  var y = Math.floor(
    ((text?.toLowerCase().charCodeAt(0) - 96) / 26 + 0.33) * 256
  );
  var z = Math.floor(((text?.toLowerCase().charCodeAt(0) - 96) / 26) * 256);
  // var z = Math.floor(Math.random() * 256);
  var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';

  return bgColor;
}
