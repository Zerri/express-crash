const data = {
  'ff06d6dd-b734-425f-8bb5-85fe2c0c371b': {
    "Timestamp": 0,
    "Objs": [
      {
        "Guid": "484d2185-7241-4d5e-a585-f2330995f46c",
        "ParentGuid": "FF06D6DD-B734-425F-8BB5-85FE2C0C371B",
        "Description": "Amministrazione",
        "ShortDescription": "Amministrazione",
        "IsActive": false
      },
      {
        "Guid": "bfa36206-2b6a-460d-837b-faee21891bd3",
        "ParentGuid": "FF06D6DD-B734-425F-8BB5-85FE2C0C371B",
        "Description": "Framework",
        "ShortDescription": "Framework",
        "IsActive": false
      },
      {
        "Guid": "04de0c7a-c4da-4b81-b3e5-2348b1b2bd4b",
        "ParentGuid": "FF06D6DD-B734-425F-8BB5-85FE2C0C371B",
        "Description": "Logistica e Produzione*",
        "ShortDescription": "Logistica e Produzione",
        "IsActive": false
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
  'f7a68885-467b-4e4f-ae2d-261aeab5acff': {
    "Timestamp": 0,
    "Objs": [
      {
        "Guid": "2f5b9189-2f6d-482d-9b78-c92d1071fdc8",
        "ParentGuid": "f7a68885-467b-4e4f-ae2d-261aeab5acff",
        "Description": "Adempimenti Agroalimentare*",
        "ShortDescription": "Adempimenti Agroalimentare",
        "IsActive": false
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
  'f146a350-9012-4e14-8668-060a0be65ea0': {
    "Timestamp": 0,
    "Objs": [
      {
        "Guid": "f68161d1-85d9-4bd4-814b-920e1e591ca4",
        "ParentGuid": "F146A350-9012-4E14-8668-060A0BE65EA0",
        "Description": "TEAMPROJECT*",
        "ShortDescription": "TEAMPROJECT",
        "IsActive": false
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

export const quadrupleAreaController = (req, res) => {
  const { areaId } = req.params;
  const areaData = data[areaId];

  if (!areaData) {
    return res.status(404).json({ message: `Area ID ${areaId} not found` });
  }

  res.json(areaData);
};