import { connectDB } from '../config/db.js';

// Recupera tutti i servizi extra
export const getExtraServices = async (req, res) => {
  try {
    const db = await connectDB();
    const collection = db.collection('ExtraServices');

    const services = await collection.find({}).toArray();
    
    res.status(200).json(services);
  } catch (error) {
    console.error('❌ Errore nel recupero dei dati:', error);
    res.status(500).json({ message: 'Errore nel recupero dei servizi extra' });
  }
};

export const getExtraServiceById = async (req, res) => {
  try {
    const db = await connectDB();
    const collection = db.collection('ExtraServices');

    const service = await collection.findOne({ id: req.params.id });

    if (!service) {
      return res.status(404).json({ message: 'Servizio non trovato' });
    }

    res.json(service);
  } catch (error) {
    console.error('❌ Errore nel recupero del servizio:', error);
    res.status(500).json({ message: 'Errore nel recupero del servizio extra' });
  }
};