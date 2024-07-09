const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/medicalDiagnosis', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    medicalHistory: String,
    symptoms: [String],
    diagnosis: String
});

const Patient = mongoose.model('Patient', patientSchema);

app.post('/add-patient', async (req, res) => {
    const patient = new Patient(req.body);
    try {
        await patient.save();
        res.status(201).send(patient);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).send(patients);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
