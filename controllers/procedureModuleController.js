const data = {
  '8e410baa-cf3d-4084-9f7a-b75dc20c0dc7': {
    "Timestamp": 0,
    "Objs": [
      {
        "Id": 3555,
        "Description": "3.8.0",
        "ProcedureWRCCode": 557,
        "Build": null
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
        "Id": 21,
        "Description": "2004.2.1",
        "ProcedureWRCCode": 100,
        "Build": null
      },
      {
        "Id": 156,
        "Description": "2006.2.0",
        "ProcedureWRCCode": 100,
        "Build": null
      },
      {
        "Id": 461,
        "Description": "PULIZIAREC",
        "ProcedureWRCCode": 100,
        "Build": null
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

export const procedureModuleController = (req, res) => {
  const { id } = req.params;
  const results = data[id];

  if (!results) {
    return res.status(404).json({ message: `Procedure Module ID ${id} not found` });
  }

  res.json(results);
};