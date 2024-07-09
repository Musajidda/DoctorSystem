document.getElementById('symptom-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const symptoms = document.getElementById('symptoms').value.toLowerCase();
    const diagnosisResult = document.getElementById('diagnosis-result');

    const { diagnosis, prescription } = diagnose(symptoms);

    if (diagnosis) {
        diagnosisResult.innerHTML = `<p><strong>Diagnosis:</strong> ${diagnosis}</p><p><strong>Prescription:</strong> ${prescription}</p>`;
    } else {
        diagnosisResult.innerHTML = '<p>No matching diagnosis found. Please consult a healthcare provider.</p>';
    }
});

function diagnose(symptoms) {
    const diseaseDatabase = [
        {
            name: 'Malaria',
            symptomSet: ['fever', 'chills', 'headache', 'nausea', 'vomiting'],
            prescription: 'Antimalarial drugs such as Chloroquine or Artemisinin-based combination therapies.'
        },
        {
            name: 'Typhoid Fever',
            symptomSet: ['prolonged fever', 'abdominal pain', 'headache', 'weakness', 'constipation or diarrhea'],
            prescription: 'Antibiotics such as Ciprofloxacin or Azithromycin, and supportive care with fluids and rest.'
        },
        {
            name: 'Hypertension (High Blood Pressure)',
            symptomSet: ['headache', 'dizziness', 'blurred vision', 'chest pain', 'shortness of breath'],
            prescription: 'Antihypertensive medications such as ACE inhibitors or beta-blockers, lifestyle changes including diet and exercise.'
        },
        {
            name: 'Diabetes',
            symptomSet: ['excessive thirst', 'frequent urination', 'fatigue', 'blurred vision', 'unexplained weight loss'],
            prescription: 'Insulin therapy or oral medications to control blood sugar levels, diet management, regular exercise.'
        },
        {
            name: 'Cholera',
            symptomSet: ['severe watery diarrhea', 'vomiting', 'muscle cramps', 'rapid heart rate', 'low blood pressure'],
            prescription: 'Rehydration with oral rehydration solutions (ORS) or intravenous fluids, antibiotics.'
        },
        {
            name: 'Tuberculosis (TB)',
            symptomSet: ['persistent cough', 'coughing up blood', 'chest pain', 'fatigue', 'fever', 'night sweats'],
            prescription: 'Antibiotics such as Isoniazid, Rifampin, and Ethambutol for several months, directly observed therapy (DOT).'
        },
        {
            name: 'HIV/AIDS',
            symptomSet: ['persistent fever', 'unexplained weight loss', 'fatigue', 'swollen lymph nodes', 'night sweats'],
            prescription: 'Antiretroviral therapy (ART) to suppress the virus, management of opportunistic infections, and supportive care.'
        },
        {
            name: 'Meningitis',
            symptomSet: ['severe headache', 'stiff neck', 'high fever', 'sensitivity to light', 'nausea or vomiting'],
            prescription: 'Antibiotics, supportive care, and vaccination for prevention.'
        },
        {
            name: 'Yellow Fever',
            symptomSet: ['fever', 'muscle pain', 'backache', 'headache', 'yellowing of the skin (jaundice)'],
            prescription: 'Supportive care, rest, and vaccination for prevention.'
        },
        {
            name: 'Lassa Fever',
            symptomSet: ['fever', 'headache', 'sore throat', 'cough', 'muscle pain', 'bleeding (in severe cases)'],
            prescription: 'Antiviral drugs such as Ribavirin, supportive care, and infection control measures.'
        },
        {
            name: 'Hepatitis B',
            symptomSet: ['abdominal pain', 'jaundice (yellowing of skin and eyes)', 'dark urine', 'fatigue', 'nausea or vomiting'],
            prescription: 'Antiviral medications, rest, and supportive care.'
        },
        {
            name: 'Peptic Ulcer Disease',
            symptomSet: ['abdominal pain (often relieved by eating)', 'indigestion', 'bloating', 'nausea or vomiting', 'weight loss'],
            prescription: 'Antibiotics to eradicate H. pylori bacteria, proton pump inhibitors (PPIs) to reduce stomach acid, lifestyle changes.'
        },
        {
            name: 'Malaria (Severe)',
            symptomSet: ['severe anemia', 'respiratory distress', 'impaired consciousness', 'multiple convulsions'],
            prescription: 'Intravenous (IV) artesunate or quinine, followed by oral antimalarials.'
        },
        {
            name: 'Schistosomiasis (Bilharzia)',
            symptomSet: ['abdominal pain', 'blood in urine or stool', 'diarrhea', 'fever', 'cough'],
            prescription: 'Antiparasitic drugs such as Praziquantel, along with supportive care.'
        },
        {
            name: 'Hypothyroidism',
            symptomSet: ['fatigue', 'weight gain', 'dry skin', 'constipation', 'depression', 'cold intolerance'],
            prescription: 'Thyroid hormone replacement therapy.'
        },
        {
            name: 'Hyperthyroidism',
            symptomSet: ['weight loss', 'rapid heartbeat', 'nervousness', 'increased sweating', 'tremors', 'heat intolerance'],
            prescription: 'Antithyroid medications, radioactive iodine therapy, or surgery.'
        },
        {
            name: 'Pneumonia',
            symptomSet: ['fever', 'cough with phlegm', 'chest pain', 'rapid breathing', 'fatigue', 'nausea'],
            prescription: 'Antibiotics, oxygen therapy, and supportive care.'
        },
        {
            name: 'Intestinal Worms (Helminths)',
            symptomSet: ['abdominal pain', 'nausea', 'diarrhea or constipation', 'fatigue', 'visible worms in stool'],
            prescription: 'Antiparasitic medications such as Albendazole or Mebendazole.'
        }
        // Add more diseases here as needed
    ];

    const inputSymptoms = symptoms.split(',').map(s => s.trim());

    for (const disease of diseaseDatabase) {
        const matched = disease.symptomSet.filter(symptom => inputSymptoms.includes(symptom)).length >= 2;
        if (matched) {
            return {
                diagnosis: disease.name,
                prescription: disease.prescription
            };
        }
    }

    return { diagnosis: null, prescription: null };
}



// the script for patient data page

// Global array to store patient data (for demo purposes)
let patients = [];

document.getElementById('patient-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const patientName = document.getElementById('patient-name').value.trim();
    const patientAge = parseInt(document.getElementById('patient-age').value);
    const patientGender = document.getElementById('patient-gender').value;
    const patientSymptoms = document.getElementById('patient-symptoms').value.trim();

    // Validate input
    if (!patientName || !patientAge || !patientGender || !patientSymptoms) {
        alert('Please fill in all fields.');
        return;
    }

    // Create patient object
    const newPatient = {
        name: patientName,
        age: patientAge,
        gender: patientGender,
        symptoms: patientSymptoms.split(',').map(symptom => symptom.trim())
    };

    // Add patient to array (for demo purposes, in real application, save to database)
    patients.push(newPatient);

    // Clear form fields
    document.getElementById('patient-form').reset();

    // Update patient list display
    displayPatients();
});

function displayPatients() {
    const patientList = document.getElementById('patient-list');
    patientList.innerHTML = '';

    patients.forEach((patient, index) => {
        const patientCard = document.createElement('div');
        patientCard.classList.add('patient-card');
        patientCard.innerHTML = `
            <h3>${patient.name}</h3>
            <p><strong>Age:</strong> ${patient.age}</p>
            <p><strong>Gender:</strong> ${patient.gender}</p>
            <p><strong>Symptoms:</strong> ${patient.symptoms.join(', ')}</p>
        `;
        patientList.appendChild(patientCard);
    });
}


// the script for decision support page

// Assume patients array is already populated from patient data management section

// Populate patient select options
const patientSelect = document.getElementById('patient-select');

patients.forEach((patient, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = patient.name;
    patientSelect.appendChild(option);
});

document.getElementById('decision-support-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedPatientIndex = document.getElementById('patient-select').value;
    const selectedPatient = patients[selectedPatientIndex];

    if (!selectedPatient) {
        alert('Please select a patient.');
        return;
    }

    const recommendations = getRecommendations(selectedPatient);

    displayRecommendations(recommendations);
});

function getRecommendations(patient) {
    // Simulated recommendation logic (replace with actual decision support algorithms)
    // Example: Based on patient symptoms, recommend appropriate actions or treatments
    const symptoms = patient.symptoms;
    let recommendations = [];

    // Example recommendations (replace with actual medical knowledge)
    if (symptoms.includes('fever') && symptoms.includes('headache')) {
        recommendations.push({
            disease: 'Malaria',
            treatment: 'Prescribe antimalarial medication (e.g., chloroquine) and monitor for improvement.'
        });
    }

    if (symptoms.includes('cough') && symptoms.includes('shortness of breath')) {
        recommendations.push({
            disease: 'Pneumonia',
            treatment: 'Prescribe antibiotics (e.g., amoxicillin) and monitor respiratory status.'
        });
    }

    // Add more recommendation logic as needed

    return recommendations;
}

function displayRecommendations(recommendations) {
    const recommendationList = document.getElementById('recommendation-list');
    recommendationList.innerHTML = '';

    if (recommendations.length > 0) {
        recommendations.forEach(recommendation => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${recommendation.disease}</strong>: ${recommendation.treatment}`;
            recommendationList.appendChild(listItem);
        });
    } else {
        const noRecommendationItem = document.createElement('li');
        noRecommendationItem.textContent = 'No specific recommendations available based on selected patient symptoms.';
        recommendationList.appendChild(noRecommendationItem);
    }
}

