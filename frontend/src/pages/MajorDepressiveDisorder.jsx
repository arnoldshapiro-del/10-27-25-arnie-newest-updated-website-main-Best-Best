import React, { useState } from 'react';

const MDDPage = () => {
  const [showTreatmentResistant, setShowTreatmentResistant] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Major Depressive Disorder (MDD)
          </h1>
          <p className="text-gray-600">Comprehensive Medication Treatment Guide</p>
        </div>

        {!showTreatmentResistant ? (
          // REGULAR TREATMENT SECTION
          <div className="space-y-8">
            {/* What is it */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">What is it?</h2>
              <p className="text-gray-700 leading-relaxed">
                Major Depressive Disorder is a medical condition causing persistent sadness, loss of interest in activities, 
                and other symptoms that significantly impact daily life. It affects brain chemistry and is highly treatable 
                with medication and therapy.
              </p>
            </section>

            {/* Symptoms */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Common Symptoms</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Persistent sad, empty, or hopeless mood</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Loss of interest in activities you used to enjoy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Significant weight changes or appetite changes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Sleep problems (too much or too little)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Fatigue or loss of energy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Difficulty concentrating or making decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Feelings of worthlessness or guilt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Thoughts of death or suicide</span>
                </li>
              </ul>
            </section>

            {/* First-Line Medications */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">First-Line Medications</h2>
              
              <div className="space-y-6">
                {/* SSRIs */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    SSRIs (Selective Serotonin Reuptake Inhibitors)
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Sertraline (Zoloft)</h4>
                      <p className="text-gray-700">50-100 mg daily</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Side effects: nausea, diarrhea, sexual problems
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Escitalopram (Lexapro)</h4>
                      <p className="text-gray-700">10-20 mg daily</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Side effects: nausea, headache, sexual problems
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Fluoxetine (Prozac)</h4>
                      <p className="text-gray-700">20-40 mg daily</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Side effects: nausea, anxiety, sexual problems
                      </p>
                    </div>
                  </div>
                </div>

                {/* SNRIs */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Venlafaxine XR (Effexor XR)</h4>
                      <p className="text-gray-700">75-225 mg daily</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Side effects: nausea, dizziness, blood pressure changes
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Duloxetine (Cymbalta)</h4>
                      <p className="text-gray-700">30-60 mg daily</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Side effects: nausea, dry mouth, constipation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Treatment Timeline */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Treatment Timeline</h2>
              <p className="text-gray-700 leading-relaxed">
                Expect <strong>4-6 weeks</strong> for initial improvement, <strong>8-12 weeks</strong> for full benefits. 
                Side effects often appear first, then decrease as benefits emerge.
              </p>
            </section>

            {/* When to Consider Treatment-Resistant */}
            <section className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">
                When to Consider Treatment-Resistant Protocols
              </h2>
              <p className="text-gray-700 mb-4">
                If you've tried <strong>2-3 different antidepressants</strong> at adequate doses for 
                <strong> 6-8 weeks each</strong> without significant improvement.
              </p>
              <button
                onClick={() => setShowTreatmentResistant(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
              >
                View Treatment-Resistant Depression Protocols →
              </button>
            </section>
          </div>
        ) : (
          // TREATMENT-RESISTANT SECTION
          <div className="space-y-8">
            <button
              onClick={() => setShowTreatmentResistant(false)}
              className="text-blue-600 hover:text-blue-800 font-semibold mb-4"
            >
              ← Back to Standard Treatment
            </button>

            {/* Definition */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-red-800 mb-4">
                Treatment-Resistant Major Depressive Disorder (TRD)
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-gray-800">
                  <strong>Definition:</strong> Failure to achieve adequate response (≥50% symptom reduction) after 
                  2-3 antidepressant trials of different classes at therapeutic doses for 6-8 weeks each. 
                  Affects approximately 30% of MDD patients.
                </p>
              </div>
            </section>

            {/* Augmentation Strategies */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Augmentation Strategies</h2>
              
              <div className="space-y-6">
                {/* FDA-Approved Atypicals */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    FDA-Approved Atypical Antipsychotics
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Aripiprazole (Abilify)</h4>
                      <p className="text-gray-700">Add 2-15 mg daily to existing antidepressant</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Most studied, 44% response rate in trials
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Brexpiprazole (Rexulti)</h4>
                      <p className="text-gray-700">Add 1-3 mg daily</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Less akathisia than aripiprazole
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Quetiapine XR (Seroquel XR)</h4>
                      <p className="text-gray-700">Add 150-300 mg daily</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Sedating, helpful for sleep/anxiety
                      </p>
                    </div>
                  </div>
                </div>

                {/* Traditional Augmentation */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    Traditional Augmentation
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Lithium</h4>
                      <p className="text-gray-700">Add 300-900 mg daily (target level 0.6-0.8 mEq/L)</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Gold standard with strongest historical evidence
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Liothyronine (T3)</h4>
                      <p className="text-gray-700">Add 25-50 mcg daily</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Well-established, cost-effective option
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Buspirone</h4>
                      <p className="text-gray-700">Add 15-60 mg daily</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Helpful with comorbid anxiety
                      </p>
                    </div>
                  </div>
                </div>

                {/* Combination Approaches */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    Combination Approaches
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span><strong>SSRI + bupropion:</strong> Addresses different neurotransmitter systems, counters sexual side effects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><strong>SSRI + SNRI:</strong> Not typically recommended due to serotonin syndrome risk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span><strong>Antidepressant + mood stabilizer:</strong> Particularly for bipolar spectrum features</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Advanced Options */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Advanced Options</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Transcranial Magnetic Stimulation (TMS)
                  </h4>
                  <p className="text-gray-700">
                    20-30 daily sessions, 50-60% response rate. Non-invasive, minimal side effects
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Electroconvulsive Therapy (ECT)
                  </h4>
                  <p className="text-gray-700">
                    Most effective treatment (70-90% response), reserved for severe cases due to cognitive effects
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Ketamine/Esketamine
                  </h4>
                  <p className="text-gray-700">
                    IV ketamine or Spravato nasal spray. Rapid-acting (within hours-days), 60-70% response rate
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Vagus Nerve Stimulation (VNS)
                  </h4>
                  <p className="text-gray-700">
                    Implantable device for chronic, treatment-resistant cases
                  </p>
                </div>
              </div>
            </section>

            {/* Protocol Sequence */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Protocol Sequence</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-semibold">1</span>
                  <p className="text-gray-700 pt-1">First augmentation trial: Aripiprazole or lithium for 6-8 weeks</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-semibold">2</span>
                  <p className="text-gray-700 pt-1">If inadequate: Switch augmentation agent or try combination approach</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-semibold">3</span>
                  <p className="text-gray-700 pt-1">If still inadequate: Consider TMS (first-line neuromodulation)</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-semibold">4</span>
                  <p className="text-gray-700 pt-1">If TMS fails: Consider ketamine or ECT</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-semibold">5</span>
                  <p className="text-gray-700 pt-1">Last resort: VNS for chronic, severe cases</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 bg-gray-100 rounded-lg p-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Disclaimer:</strong> This educational material is for informational purposes only and does not 
            constitute medical advice. Please consult with Dr. Arnold G. Shapiro or another qualified healthcare provider 
            for personalized treatment recommendations. Do not start, stop, or change medications without professional guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MDDPage;