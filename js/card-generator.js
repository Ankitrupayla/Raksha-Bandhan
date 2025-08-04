// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('card-form');
  const previewTo = document.getElementById('preview-to');
  const previewFrom = document.getElementById('preview-from');
  const previewMessage = document.getElementById('preview-message');

  const downloadBtn = document.getElementById('download-btn');
  const shareBtn = document.getElementById('share-btn');
  const previewCard = document.querySelector('.card-preview');

  // Update preview on form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const to = document.getElementById('to').value.trim();
    const from = document.getElementById('from').value.trim();
    const message = document.getElementById('message').value.trim();

    previewTo.textContent = `To: ${to}`;
    previewFrom.textContent = `From: ${from}`;
    previewMessage.textContent = message;
  });

  // Download as image
  downloadBtn.addEventListener('click', () => {
    html2canvas(previewCard).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'raksha-bandhan-card.png';
      link.click();
    });
  });

  // Share if supported
  shareBtn.addEventListener('click', async () => {
    try {
      const canvas = await html2canvas(previewCard);
      canvas.toBlob(async (blob) => {
        const file = new File([blob], 'raksha-bandhan-card.png', { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: 'Raksha Bandhan Greeting Card',
            text: 'Check out this lovely Rakhi card I made!',
          });
        } else {
          alert("Sharing is not supported on this device. Please download the card.");
        }
      });
    } catch (error) {
      console.error('Error sharing card:', error);
    }
  });
});
