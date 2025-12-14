// Insomnia Severity Index (ISI) Implementation
const questions = [
  "Difficulty falling asleep",
  "Difficulty staying asleep",
  "Problem waking up too early",
  "How satisfied/dissatisfied are you with your current sleep pattern?",
  "How noticeable to others do you think your sleep problem is in terms of impairing the quality of your life?",
  "How worried/distressed are you about your current sleep problem?",
  "To what extent do you consider your sleep problem to interfere with your daily functioning?"
];

const options = ["None", "Mild", "Moderate", "Severe", "Very Severe"];
let currentScore = 0;
let currentLevel = "";

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please rate the current severity of your insomnia problem(s):</strong></p>';
  
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
  
  if (score <= 7) {
    level = "No clinically significant insomnia";
    color = "#10b981";
    recommendation = "Your responses suggest no clinically significant insomnia. Continue practicing good sleep hygiene.";
  } else if (score <= 14) {
    level = "Subthreshold insomnia";
    color = "#f59e0b";
    recommendation = "Your responses suggest subthreshold insomnia. Consider improving sleep habits and consulting a professional if symptoms persist.";
  } else if (score <= 21) {
    level = "Clinical insomnia (moderate severity)";
    color = "#f97316";
    recommendation = "Your responses suggest moderate clinical insomnia. Recommend evaluation with a healthcare provider.";
  } else {
    level = "Clinical insomnia (severe)";
    color = "#ef4444";
    recommendation = "Your responses suggest severe clinical insomnia. Strongly recommend professional evaluation and treatment.";
  }
  
  currentLevel = level;
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/28</strong></p>
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
  const title = "Sleep Disorder Screening (ISI) Results";
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
  doc.text('Total Score: ' + currentScore + '/28', 105, yPos + 12, { align: 'center' });
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
  
  // Use blob URL method - works in sandboxed environments
  var pdfBlob = doc.output('blob');
  var blobUrl = URL.createObjectURL(pdfBlob);
  var fileName = 'sleep-disorder_Results_' + new Date().toISOString().split('T')[0] + '.pdf';

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