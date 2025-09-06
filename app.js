let selected = {};
function openModal(network, size, price) {
  selected = {network, size, price};
  document.getElementById('bundleTitle').innerText = `${network} ${size} - GHS ${price}`;
  if (network === 'MTN') {
    document.getElementById('instructions').innerText = 'MTN Users: Dial *170# → Send Money → Other Network → Vodafone → Enter 0502376541';
  } else {
    document.getElementById('instructions').innerText = 'Vodafone Users: Dial *110# → Send Money → Enter 0502376541';
  }
  document.getElementById('paymentModal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('paymentModal').style.display = 'none';
}
function copyNumber() {
  navigator.clipboard.writeText('0502376541');
  alert('MoMo number copied!');
}
function submitPayment() {
  const id = document.getElementById('transactionId').value;
  if (!id) {
    alert('Please enter Transaction ID');
    return;
  }
  alert(`Payment submitted!\n${selected.network} ${selected.size} for GHS ${selected.price}\nTransaction ID: ${id}`);
  document.getElementById('transactionId').value = '';
  closeModal();
}
