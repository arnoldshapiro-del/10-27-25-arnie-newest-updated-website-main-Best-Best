// Mood Disorder Questionnaire (MDQ) Implementation
const questions = [
  "You felt so good or so hyper that other people thought you were not your normal self, or you were so hyper that you got into trouble?",
  "You were so irritable that you shouted at people or started fights or arguments?",
  "You felt much more self-confident than usual?",
  "You got much less sleep than usual and found you didn't really miss it?",
  "You were much more talkative or spoke much faster than usual?",
  "Thoughts raced through your mind or you couldn't slow your mind down?",
  "You were so easily distracted by things around you that you had trouble concentrating or staying on track?",
  "You had much more energy than usual?",
  "You were much more active or did many more things than usual?",
  "You were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?",
  "You were much more interested in sex than usual?",
  "You did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?",
  "Spending money got you or your family into trouble?"
];

let currentScore = 0;
let currentLevel = "";
let samePeriodVal = 0;
let problemLevelVal = 0;

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Has there ever been a period of time when you were not your usual self and...</strong></p>';
  
  questions.forEach((question, index) => {
    html += `<div class="card">
      <p><strong>${index + 1}. ${question}</strong></p>
      <label style="display:block;margin:8px 0;"><input type="radio" name="q${index}" value="1" style="margin-right:8px;">Yes</label>
      <label style="display:block;margin:8px 0;"><input type="radio" name="q${index}" value="0" style="margin-right:8px;">No</label>
    </div>`;
  });
  
  html += `<div class="card">
    <p><strong>If you checked YES to more than one of the above, have several of these ever happened during the same period of time?</strong></p>
    <label style="display:block;margin:8px 0;"><input type="radio" name="same_period" value="1" style="margin-right:8px;">Yes</label>
    <label style="display:block;margin:8px 0;"><input type="radio" name="same_period" value="0" style="margin-right:8px;">No</label>
  </div>`;
  
  html += `<div class="card">
    <p><strong>How much of a problem did any of these cause you?</strong></p>
    <label style="display:block;margin:8px 0;"><input type="radio" name="problem_level" value="0" style="margin-right:8px;">No problem</label>
    <label style="display:block;margin:8px 0;"><input type="radio" name="problem_level" value="1" style="margin-right:8px;">Minor problem</label>
    <label style="display:block;margin:8px 0;"><input type="radio" name="problem_level" value="2" style="margin-right:8px;">Moderate problem</label>
    <label style="display:block;margin:8px 0;"><input type="radio" name="problem_level" value="3" style="margin-right:8px;">Serious problem</label>
  </div>`;
  
  formDiv.innerHTML = html;
}

function calculateResults() {
  let score = 0;
  let answered = 0;
  
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) { score += parseInt(selected.value); answered++; }
  }
  
  const samePeriod = document.querySelector('input[name="same_period"]:checked');
  const problemLevel = document.querySelector('input[name="problem_level"]:checked');
  
  if (answered < questions.length || !samePeriod || !problemLevel) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  currentScore = score;
  samePeriodVal = parseInt(samePeriod.value);
  problemLevelVal = parseInt(problemLevel.value);
  
  let level, color, recommendation;
  let isPositive = score >= 7 && samePeriodVal === 1 && problemLevelVal >= 2;
  
  if (isPositive) {
    level = "Positive screen for bipolar disorder";
    color = "#ef4444";
    recommendation = "Your responses suggest possible bipolar disorder. This screening indicates you should discuss these symptoms with a mental health professional for comprehensive evaluation and potential treatment options.";
  } else if (score >= 7 && samePeriodVal === 1) {
    level = "Possible bipolar symptoms";
    color = "#f97316";
    recommendation = "Your responses suggest some manic/hypomanic symptoms. Consider discussing these experiences with a mental health professional to determine if further evaluation is needed.";
  } else {
    level = "Low likelihood of bipolar disorder";
    color = "#10b981";
    recommendation = "Your responses suggest a low likelihood of bipolar disorder. Continue monitoring your mood patterns and consult a mental health professional if you experience significant mood changes.";
  }
  
  currentLevel = level;
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Manic Symptoms: ${score}/13</strong></p>
      <p><strong>Same Period: ${samePeriodVal ? 'Yes' : 'No'}</strong></p>
      <p><strong>Problem Level: ${['None', 'Minor', 'Moderate', 'Serious'][problemLevelVal]}</strong></p>
      <p><strong>Assessment: ${level}</strong></p>
      <p>${recommendation}</p>
      <div style="margin-top:20px; text-align:center;">
        <button onclick="downloadPDF()" style="background-color: #2563eb; color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600;">📥 Download PDF Report</button>
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
  const title = "Bipolar Screening (MDQ) Results";
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
  doc.roundedRect(20, yPos, 170, 35, 3, 3, 'FD');
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Manic Symptoms: ' + currentScore + '/13', 105, yPos + 10, { align: 'center' });
  doc.setFontSize(11);
  doc.text('Same Period: ' + (samePeriodVal ? 'Yes' : 'No') + ' | Problem: ' + ['None', 'Minor', 'Moderate', 'Serious'][problemLevelVal], 105, yPos + 20, { align: 'center' });
  doc.setFontSize(12);
  doc.text('Assessment: ' + currentLevel, 105, yPos + 30, { align: 'center' });
  
  yPos = 105;
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
  
  doc.save('Bipolar_MDQ_Results_' + new Date().toISOString().split('T')[0] + '.pdf');
}

document.addEventListener('DOMContentLoaded', function() {
  renderForm();
  document.getElementById('go').addEventListener('click', calculateResults);
});