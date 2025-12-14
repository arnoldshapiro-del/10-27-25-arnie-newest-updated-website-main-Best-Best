// ADHD Self-Report Scale (ASRS-18) Implementation
const questions = [
  "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
  "How often do you have difficulty getting things in order when you have to do a task that requires organization?", 
  "How often do you have problems remembering appointments or obligations?",
  "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
  "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
  "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
  "How often do you make careless mistakes when you have to work on a boring or difficult project?",
  "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
  "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
  "How often do you misplace or have difficulty finding things at home or at work?",
  "How often are you distracted by activity or noise around you?",
  "How often do you leave your seat in meetings or other situations where you are expected to remain seated?",
  "How often do you feel restless or fidgety?",
  "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
  "How often do you find yourself talking too much when you are in social situations?",
  "When you're in a conversation, how often do you find yourself finishing the sentences of people you are talking to before they can finish them themselves?",
  "How often do you have difficulty waiting your turn in situations when turn taking is required?",
  "How often do you interrupt others when they are busy?"
];

const options = ["Never", "Rarely", "Sometimes", "Often", "Very Often"];

let currentScore = 0;
let currentLevel = "";

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Over the past 6 months, how often have you been bothered by the following problems?</strong></p>';
  
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
  
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      score += parseInt(selected.value);
      answered++;
    }
  }
  
  if (answered < questions.length) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  currentScore = score;
  let level, color, recommendation;
  
  if (score <= 24) {
    level = "Low likelihood of ADHD";
    color = "#10b981";
    recommendation = "Your responses suggest a low likelihood of ADHD. Continue monitoring your symptoms and consult a mental health professional if symptoms worsen.";
  } else if (score <= 36) {
    level = "Moderate likelihood of ADHD";
    color = "#f59e0b";
    recommendation = "Your responses suggest possible ADHD symptoms. Consider scheduling an evaluation with a mental health professional to discuss your symptoms.";
  } else {
    level = "High likelihood of ADHD";
    color = "#ef4444";
    recommendation = "Your responses suggest significant ADHD symptoms. Strongly recommend evaluation with a mental health professional for proper assessment and treatment options.";
  }
  
  currentLevel = level;
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/72</strong></p>
      <p><strong>Assessment: ${level}</strong></p>
      <p>${recommendation}</p>
      <div style="margin-top:20px; text-align:center;">
        <button onclick="downloadPDF()" style="background-color: #2563eb; color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600;">
          📄 View PDF Report
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
  
  const title = "ADHD Screening (ASRS-18) Results";
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
  doc.text('Total Score: ' + currentScore + '/72', 105, yPos + 12, { align: 'center' });
  
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
