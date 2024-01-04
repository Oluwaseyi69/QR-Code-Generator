const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const showSpinner = () => {
  document.getElementById('spinner').style.display = 'block';
};

const hideSpinner = () => {
  document.getElementById('spinner').style.display = 'none';
};


function generateQRCode() {
  var dataToEncode = "";
  var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: 128,
      height: 128
  });
}

generateQRCode();



const onGenerateSubmit = (e) => {
  e.preventDefault();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  console.log(url, size);

  if (url === '') {
    alert('Please enter a URL');
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();

      generateQRCode(url, size);

    }, 1000);
  }
};



form.addEventListener('submit', onGenerateSubmit);
