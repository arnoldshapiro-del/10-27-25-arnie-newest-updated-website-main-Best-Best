// PHQ-9 Depression Screening Implementation
const questions = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless", 
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself or that you are a failure or have let yourself or your family down",
  "Trouble concentrating on things, such as reading the newspaper or watching television",
  "Moving or speaking so slowly that other people could have noticed, or being so fidgety or restless that you have been moving around a lot more than usual",
  "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way"
];

const options = ["Not at all", "Several days", "More than half the days", "Nearly every day"];

let currentScore = 0;
let currentLevel = "";

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Over the last 2 weeks, how often have you been bothered by any of the following problems?</strong></p>';
  
  questions.forEach((question, index) => {
    html += `<div class="card">
      <p><strong>${index + 1}. ${question}</strong></p>`;
    
    options.forEach((option, optIndex) => {
      html += `<label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="${optIndex}" style="margin-right:8px;">
        ${option}
      </label>`;
    });
    
    html += '</div>';
  });
  
  formDiv.innerHTML = html;
}

function calculateResults() {
  let score = 0;
  let answered = 0;
  let suicidalThoughts = false;
  
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      const value = parseInt(selected.value);
      score += value;
      answered++;
      
      if (i === 8 && value > 0) {
        suicidalThoughts = true;
      }
    }
  }
  
  if (answered < questions.length) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  currentScore = score;
  let level, color, recommendation;
  
  if (score <= 4) {
    level = "Minimal depression";
    color = "#10b981";
    recommendation = "Your responses suggest minimal depression symptoms. Continue monitoring your mood and practice self-care.";
  } else if (score <= 9) {
    level = "Mild depression";
    color = "#f59e0b";
    recommendation = "Your responses suggest mild depression symptoms. Consider discussing your mood with a mental health professional.";
  } else if (score <= 14) {
    level = "Moderate depression";
    color = "#f97316";
    recommendation = "Your responses suggest moderate depression symptoms. Recommend evaluation with a mental health professional for treatment options.";
  } else if (score <= 19) {
    level = "Moderately severe depression";
    color = "#ef4444";
    recommendation = "Your responses suggest moderately severe depression. Strongly recommend immediate evaluation with a mental health professional.";
  } else {
    level = "Severe depression";
    color = "#dc2626";
    recommendation = "Your responses suggest severe depression. Please contact a mental health professional immediately for urgent evaluation and treatment.";
  }
  
  currentLevel = level;
  
  let crisisAlert = '';
  if (suicidalThoughts) {
    crisisAlert = `
      <div class="banner" style="background:#fee2e2;border:2px solid #fecaca;margin-bottom:16px;">
        <strong>⚠️ CRISIS ALERT:</strong> You indicated thoughts of self-harm. Please reach out for immediate help:
        <br><strong>Crisis Lifeline: Call or Text 988</strong>
        <br><strong>Emergency: Call 911</strong>
      </div>
    `;
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    ${crisisAlert}
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/27</strong></p>
      <p><strong>Assessment: ${level}</strong></p>
      <p>${recommendation}</p>
      <div style="margin-top:20px; text-align:center;">
        <button onclick="downloadPDF()" style="background-color: #2563eb; color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600;">
          📥 Download PDF Report
        </button>
      </div>
    </div>
    <div class="small" style="margin-top:16px;">
      <p><strong>Disclaimer:</strong> This screening tool is for educational purposes only and does not constitute a medical diagnosis. Please consult with a qualified healthcare provider for proper evaluation and treatment.</p>
    </div>
  `;
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  const title = "PHQ-9 Depression Screening Results";
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  // Header
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 105, 18, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Date: ' + today, 105, 32, { align: 'center' });
  
  // Score section
  doc.setTextColor(0, 0, 0);
  let yPos = 55;
  
  doc.setFillColor(240, 249, 255);
  doc.setDrawColor(37, 99, 235);
  doc.roundedRect(20, yPos, 170, 30, 3, 3, 'FD');
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Total Score: ' + currentScore + '/27', 105, yPos + 12, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text('Assessment: ' + currentLevel, 105, yPos + 24, { align: 'center' });
  
  // Questions and answers
  yPos = 100;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Your Responses:', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  questions.forEach((question, index) => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    
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
  
  // Disclaimer
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }
  yPos += 10;
  
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(20, yPos, 170, 20, 3, 3, 'F');
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(146, 64, 14);
  doc.text('DISCLAIMER: This screening tool is for informational purposes only and is not a diagnosis.', 105, yPos + 8, { align: 'center' });
  doc.text('Please consult a licensed mental health professional for proper evaluation.', 105, yPos + 14, { align: 'center' });
  
  // Footer on all pages
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text('Mental Health Screening Assessment - Confidential', 105, 290, { align: 'center' });
    doc.text('Page ' + i + ' of ' + pageCount, 190, 290, { align: 'right' });
  }
  
  // Save
  doc.save('PHQ9_Depression_Results_' + new Date().toISOString().split('T')[0] + '.pdf');
}

document.addEventListener('DOMContentLoaded', function() {
  renderForm();
  document.getElementById('go').addEventListener('click', calculateResults);
});
