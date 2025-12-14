// Psychosis Risk Screening (PRIME based) Implementation
const questions = [
  "I think that I have felt that there are odd or unusual things going on that I can't explain",
  "I think that I might be able to predict the future",
  "I may have felt that there could possibly be something interrupting or controlling my thoughts, feelings, or actions",
  "I have had the experience of doing something differently because of my superstitions",
  "I think that I may get confused at times whether something I experience or perceive may be real or may be just part of my imagination or dreams",
  "I have thought that it might be possible that other people can read my mind, or that I can read others' minds",
  "I wonder if people may be planning to hurt me or even may be hurting me",
  "I believe that I have special natural or supernatural gifts beyond my talents and natural strengths",
  "I think I may hear my own thoughts being said out loud",
  "I have been concerned that I might be 'going crazy'",
  "I think that I may sometimes feel that something is happening to my body or the way I see things and hear things",
  "I have thought that I might feel like my mind is 'playing tricks' on me"
];

const options = ["Definitely Disagree", "Somewhat Disagree", "Slightly Disagree", "Not Sure", "Slightly Agree", "Somewhat Agree", "Definitely Agree"];
let currentScore = 0;
let currentLevel = "";

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please indicate how much you agree or disagree with each statement:</strong></p>';
  
  questions.forEach((question, index) => {
    html += `<div class="card"><p><strong>${index + 1}. ${question}</strong></p>`;
    options.forEach((option, optIndex) => {
      html += `<label style="display:block;margin:8px 0;"><input type="radio" name="q${index}" value="${optIndex}" style="margin-right:8px;">${option}</label>`;
    });
    html += '</div>';
  });
  
  formDiv.innerHTML = html;
}

function calculateResults() {
  let score = 0;
  let answered = 0;
  let highItems = 0;
  
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      const val = parseInt(selected.value);
      score += val;
      if (val >= 5) highItems++;
      answered++;
    }
  }
  
  if (answered < questions.length) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  currentScore = score;
  let level, color, recommendation;
  
  if (score < 24 && highItems < 2) {
    level = "Low risk - Below clinical threshold";
    color = "#10b981";
    recommendation = "Your responses are below the clinical threshold for psychosis risk. Continue monitoring and maintain healthy habits.";
  } else {
    level = "Elevated risk - Professional evaluation recommended";
    color = "#ef4444";
    recommendation = "Your score suggests elevated risk that warrants further evaluation. This is not a diagnosis - professional assessment is important.";
  }
  
  currentLevel = level;
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/72</strong></p>
      <p><strong>High-agreement items: ${highItems}</strong></p>
      <p><strong>Assessment: ${level}</strong></p>
      <p>${recommendation}</p>
      <div style="margin-top:20px; text-align:center;">
        <button onclick="downloadPDF()" style="background-color: #2563eb; color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600;">📥 Download PDF Report</button>
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
  const title = "Psychosis Risk Screening (PRIME) Results";
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, 210, 40, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
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
  doc.text('Total Score: ' + currentScore + '/72', 105, yPos + 12, { align: 'center' });
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
    const answer = selected ? options[parseInt(selected.value)] : 'Not answered';
    const points = selected ? parseInt(selected.value) : 0;
    doc.setFont('helvetica', 'bold');
    const qLines = doc.splitTextToSize((index + 1) + '. ' + question, 170);
    doc.text(qLines, 20, yPos);
    yPos += qLines.length * 5;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(37, 99, 235);
    doc.text('   Answer: "' + answer + '" (' + points + ' points)', 20, yPos);
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
  
  // Generate PDF as base64 data URI
  var pdfBase64 = doc.output('datauristring');
  var fileName = 'schizophrenia_Results_' + new Date().toISOString().split('T')[0] + '.pdf';

  // Create a link and trigger download
  var link = document.createElement('a');
  link.href = pdfBase64;
  link.download = fileName;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  console.log('PDF download triggered:', fileName);
}

document.addEventListener('DOMContentLoaded', function() {
  renderForm();
  document.getElementById('go').addEventListener('click', calculateResults);
});