export const priorityController = async (req, res) => {
  try {
    res.json({
      "Timestamp": 0,
      "Objs": [
        {
          "Id": 1,
          "Code": 1,
          "Description": "Bloccante",
          "DescriptionContId": 278,
          "Code_BTT": 4,
          "IsDefault": false,
          "IsActive": true
        },
        {
          "Id": 2,
          "Code": 2,
          "Description": "Parzialmente Bloccante",
          "DescriptionContId": 279,
          "Code_BTT": 3,
          "IsDefault": false,
          "IsActive": true
        },
        {
          "Id": 3,
          "Code": 3,
          "Description": "Non Bloccante",
          "DescriptionContId": 280,
          "Code_BTT": 2,
          "IsDefault": true,
          "IsActive": true
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
    console.error('❌ Errore nel recupero priority:', error);
    res.status(500).json({ message: 'Errore nel recupero priority' });
  }
};