const data = {
  '8e410baa-cf3d-4084-9f7a-b75dc20c0dc7': {
    "Timestamp": 0,
    "Objs": [],
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
  },
  '5daecd0c-1ba6-4840-b2ba-3acc29a3318f': {
    "Timestamp": 0,
    "Objs": [],
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
  },
  'f99edcd5-ed06-49ed-8811-93571e646291': {
    "Timestamp": 0,
    "Objs": [
      {
        "IdProgram": 74,
        "Code": "01",
        "Description": "Gestione Tabelle"
      },
      {
        "IdProgram": 75,
        "Code": "02",
        "Description": "Anagrafica"
      },
      {
        "IdProgram": 76,
        "Code": "03",
        "Description": "Personalizzazione"
      },
      {
        "IdProgram": 77,
        "Code": "04",
        "Description": "Gestione Documenti"
      },
      {
        "IdProgram": 78,
        "Code": "05",
        "Description": "Pianificazione"
      },
      {
        "IdProgram": 79,
        "Code": "06",
        "Description": "Ferie e Permessi"
      },
      {
        "IdProgram": 80,
        "Code": "07",
        "Description": "Firma Elett. Presenze"
      },
      {
        "IdProgram": 81,
        "Code": "08",
        "Description": "Webrecall"
      },
      {
        "IdProgram": 82,
        "Code": "09",
        "Description": "Commesse e Clienti"
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
  }
}

export const programModuleController = (req, res) => {
  const { moduleId } = req.params;
  const moduleData = data[moduleId];

  if (!moduleData) {
    return res.status(404).json({ message: `Program Module ID ${moduleId} not found` });
  }

  res.json(moduleData);
};