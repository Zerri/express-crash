export const contactReasonController = async (req, res) => {
  try {
    res.json({
      "Timestamp": 0,
      "Objs": [
        {
          "Id": 18,
          "Description": "Chiarimento funzionale",
          "DescriptionContId": 491,
          "Order": 0
        },
        {
          "Id": 12,
          "Description": "Richiesta di informazione sui rilasci",
          "DescriptionContId": 485,
          "Order": 1
        },
        {
          "Id": 13,
          "Description": "Assistenza su adempimenti e scadenze",
          "DescriptionContId": 486,
          "Order": 1
        },
        {
          "Id": 14,
          "Description": "Malfunzionamento del prodotto installato",
          "DescriptionContId": 487,
          "Order": 1
        },
        {
          "Id": 15,
          "Description": "Assistenza installazione e aggiornamenti",
          "DescriptionContId": 488,
          "Order": 1
        },
        {
          "Id": 16,
          "Description": "Richiesta di implementazione",
          "DescriptionContId": 489,
          "Order": 1
        },
        {
          "Id": 17,
          "Description": "Richiesta di assistenza commerciale",
          "DescriptionContId": 490,
          "Order": 1
        }
      ],
      "ResultType": 2,
      "TipoRisultatoString": "Info",
      "Messages": [],
      "ErrorFields": [],
      "ResultTypeString": "Info",
      "Page": {
        "Offset": 0,
        "Limit": 0,
        "Count": 0,
        "Pages": 0
      }
    });
  } catch (error) {
    console.error('❌ Errore nel recupero contactReason:', error);
    res.status(500).json({ message: 'Errore nel recupero contactReason' });
  }
};