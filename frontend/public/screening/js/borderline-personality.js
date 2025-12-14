// Borderline Personality (MSI-BPD) Screening Implementation
const questions = [
  "Have any of your closest relationships been troubled by a lot of arguments or repeated breakups?",
  "Have you deliberately hurt yourself physically (e.g., punched yourself, cut yourself, burned yourself)? How about made a suicide attempt?",
  "Have you had at least two other problems with impulsivity (e.g., eating binges, spending sprees, drinking too much, verbal outbursts)?",
  "Have you been extremely moody?",
  "Have you felt very angry a lot of the time? How about often acted in an angry or sarcastic manner?",
  "Have you often been distrustful of other people?",
  "Have you frequently felt unreal or as if things around you were unreal?",
  "Have you chronically felt empty?",
  "Have you often felt that you had no idea of who you are or that you have no identity?",
  "Have you made desperate efforts to avoid feeling abandoned or being abandoned?"
];

let currentScore = 0;
let currentLevel = "";

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Have you experienced the following over most of your life? Answer YES or NO:</strong></p>';
  
  questions.forEach((question, index) => {
    html += `<div class="card"><p><strong>${index + 1}. ${question}</strong></p>
      <label style="display:block;margin:8px 0;"><input type="radio" name="q${index}" value="1" style="margin-right:8px;">Yes</label>
      <label style="display:block;margin:8px 0;"><input type="radio" name="q${index}" value="0" style="margin-right:8px;">No</label>
    </div>`;
  });
  
  formDiv.innerHTML = html;
}

function calculateResults() {
  let score = 0;
  let answered = 0;
  let crisisIndicator = false;
  
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      const val = parseInt(selected.value);
      score += val;
      answered++;
      if (i === 1 && val === 1) crisisIndicator = true;
    }
  }
  
  if (answered < questions.length) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  currentScore = score;
  let level, color, recommendation;
  
  if (score >= 7) {
    level = "Positive screen - Further evaluation recommended";
    color = "#ef4444";
    recommendation = "Your score suggests features consistent with borderline personality disorder. This is not a diagnosis - professional evaluation is recommended.";
  } else {
    level = "Below clinical threshold";
    color = "#10b981";
    recommendation = "Your responses are below the clinical threshold for borderline personality. Continue practicing healthy coping strategies.";
  }
  
  currentLevel = level;
  
  let crisisAlert = '';
  if (crisisIndicator) {
    crisisAlert = `<div class="banner" style="background:#fee2e2;border:2px solid #fecaca;margin-bottom:16px;">
      <strong>⚠️ IMPORTANT:</strong> You indicated self-harm or suicide attempts. Please reach out for help:
      <br><strong>Crisis Lifeline: Call or Text 988</strong>
      <br><strong>Emergency: Call 911</strong>
    </div>`;
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    ${crisisAlert}
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/10</strong></p>
      <p><strong>Assessment: ${level}</strong></p>
      <p>${recommendation}</p>
      <div style="margin-top:20px; text-align:center;">
        <button onclick="downloadPDF()" style="background-color: #2563eb; color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600;">📄 View PDF Report</button>
      </div>
    </div>
    <div class="small" style="margin-top:16px;">
      <p><strong>Disclaimer:</strong> This screening tool is for educational purposes only and does not constitute a medical diagnosis.</p>
    </div>
  `;
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const title = "Borderline Personality Screening (MSI-BPD) Results";
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, 210, 40, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 105, 18, { align: 'center' });
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Date: ' + today, 105, 32, { align: 'center' });
  
  doc.setTextColor(0, 0, 0);
  let yPos = 55;
  doc.setFillColor(240, 249, 255);
  doc.setDrawColor(37, 99, 235);
  doc.roundedRect(20, yPos, 170, 30, 3, 3, 'FD');
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Total Score: ' + currentScore + '/10', 105, yPos + 12, { align: 'center' });
  doc.setFontSize(12);
  doc.text('Assessment: ' + currentLevel, 105, yPos + 24, { align: 'center' });
  
  yPos = 100;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Your Responses:', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  questions.forEach((question, index) => {
    if (yPos > 270) { doc.addPage(); yPos = 20; }
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const answer = selected ? (parseInt(selected.value) === 1 ? 'Yes' : 'No') : 'Not answered';
    doc.setFont('helvetica', 'bold');
    const qLines = doc.splitTextToSize((index + 1) + '. ' + question, 170);
    doc.text(qLines, 20, yPos);
    yPos += qLines.length * 5;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(37, 99, 235);
    doc.text('   Answer: ' + answer, 20, yPos);
    doc.setTextColor(0, 0, 0);
    yPos += 8;
  });
  
  if (yPos > 250) { doc.addPage(); yPos = 20; }
  yPos += 10;
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(20, yPos, 170, 20, 3, 3, 'F');
  doc.setFontSize(9);
  doc.setTextColor(146, 64, 14);
  doc.text('DISCLAIMER: This screening tool is for informational purposes only and is not a diagnosis.', 105, yPos + 8, { align: 'center' });
  doc.text('Please consult a licensed mental health professional for proper evaluation.', 105, yPos + 14, { align: 'center' });
  
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text('Mental Health Screening Assessment - Confidential', 105, 290, { align: 'center' });
    doc.text('Page ' + i + ' of ' + pageCount, 190, 290, { align: 'right' });
  }
  
  // Instead of downloading, embed PDF in an iframe on the page
  var pdfBase64 = doc.output('datauristring');

  // Create a modal/container to display the PDF
  var modal = document.createElement('div');
  modal.id = 'pdf-viewer-modal';
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10000;display:flex;flex-direction:column;align-items:center;padding:20px;';

  var closeBtn = document.createElement('button');
  closeBtn.textContent = '✕ Close';
  closeBtn.style.cssText = 'background:#fff;border:none;padding:10px 20px;margin-bottom:10px;cursor:pointer;border-radius:5px;font-size:16px;';
  closeBtn.onclick = function() { modal.remove(); };

  var instructions = document.createElement('p');
  instructions.textContent = 'Right-click on the PDF and select "Save as..." to download';
  instructions.style.cssText = 'color:#fff;margin-bottom:10px;font-size:14px;';

  var iframe = document.createElement('iframe');
  iframe.src = pdfBase64;
  iframe.style.cssText = 'width:90%;height:85%;border:none;background:#fff;';

  modal.appendChild(closeBtn);
  modal.appendChild(instructions);
  modal.appendChild(iframe);
  document.body.appendChild(modal);

  console.log('PDF displayed in viewer');
}

document.addEventListener('DOMContentLoaded', function() {
  renderForm();
  document.getElementById('go').addEventListener('click', calculateResults);
});