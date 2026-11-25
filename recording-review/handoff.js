const driver = document.getElementById('driver-result');
const customer = document.getElementById('customer-result');
const screen = document.getElementById('customer-screen');
const submit = document.getElementById('submit-proof');
const openOrder = document.getElementById('open-order');
const replay = document.getElementById('replay');
const controls = document.getElementById('story-controls');
const cue = controls.querySelector('[role=status]');

function start() {
  driver.hidden = true;
  customer.hidden = true;
  replay.hidden = true;
  submit.hidden = false;
  submit.disabled = false;
  submit.textContent = 'Submit POD';
  screen.textContent = 'My orders';
  openOrder.hidden = false;
  openOrder.disabled = true;
  cue.textContent = 'Storyboard · Start on the driver phone.';
}

submit.addEventListener('click', () => {
  submit.disabled = true;
  submit.textContent = 'Awaiting confirmation';
  cue.textContent = 'Waiting for confirmation.';
  window.setTimeout(() => {
    submit.hidden = true;
    driver.hidden = false;
    openOrder.disabled = false;
    cue.textContent = 'Proof accepted. Open the same order on the customer phone.';
  }, 1500);
});

openOrder.addEventListener('click', () => {
  screen.textContent = 'Order details';
  customer.hidden = false;
  openOrder.hidden = true;
  replay.hidden = false;
  cue.textContent = 'The customer sees the completed order.';
});

replay.addEventListener('click', start);
controls.hidden = false;
start();
