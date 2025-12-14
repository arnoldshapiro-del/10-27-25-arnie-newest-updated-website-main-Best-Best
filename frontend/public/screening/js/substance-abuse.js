// Drug Abuse Screening Test (DAST-10) Implementation
const questions = [
  "Have you used drugs other than those required for medical reasons?",
  "Do you abuse more than one drug at a time?",
  "Are you unable to stop using drugs when you want to?",
  "Have you ever had blackouts or flashbacks as a result of drug use?",
  "Do you ever feel bad or guilty about your drug use?",
  "Does your spouse (or parents) ever complain about your involvement with drugs?",
  "Have you neglected your family because of your use of drugs?",
  "Have you engaged in illegal activities in order to obtain drugs?",
  "Have you ever experienced withdrawal symptoms when you stopped taking drugs?",
  "Have you had medical problems as a result of your drug use?"
];

let currentScore = 0;
let currentLevel = "";

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please answer YES or NO to each question:</strong></p>';
  
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
  
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) { score += parseInt(selected.value); answered++; }
  }
  
  if (answered < questions.length) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  currentScore = score;
  let level, color, recommendation;
  
  if (score === 0) {
    level = "No problems reported";
    color = "#10b981";
    recommendation = "Your responses suggest no drug-related problems. Continue maintaining healthy habits.";
  } else if (score <= 2) {
    level = "Low level problems";
    color = "#f59e0b";
    recommendation = "Your responses suggest low level drug-related issues. Consider monitoring your use and seeking information.";
  } else if (score <= 5) {
    level = "Moderate level problems";
    color = "#f97316";
    recommendation = "Your responses suggest moderate drug-related problems. Recommend consultation with a healthcare provider.";
  } else if (score <= 8) {
    level = "Substantial level problems";
    color = "#ef4444";
    recommendation = "Your responses suggest substantial drug-related problems. Strongly recommend professional evaluation and treatment.";
  } else {
    level = "Severe level problems";
    color = "#dc2626";
    recommendation = "Your responses suggest severe drug-related problems. Please seek professional help immediately.";
  }
  
  currentLevel = level;
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/10</strong></p>
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
  const title = "Substance Use Screening (DAST-10) Results";
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
  
  // Use blob URL method - works in sandboxed environments
  var pdfBlob = doc.output('blob');
  var blobUrl = URL.createObjectURL(pdfBlob);
  var fileName = 'substance-abuse_Results_' + new Date().toISOString().split('T')[0] + '.pdf';

  // Try to open in new tab
  var newWindow = window.open(blobUrl, '_blank');

  if (!newWindow) {
    // If popup blocked, create download link
    var link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Also try direct save as backup
  try {
    doc.save(fileName);
  } catch (e) {
    console.log('Direct save not available');
  }

  // Clean up
  setTimeout(function() { URL.revokeObjectURL(blobUrl); }, 30000);
}

document.addEventListener('DOMContentLoaded', function() {
  renderForm();
  document.getElementById('go').addEventListener('click', calculateResults);
});