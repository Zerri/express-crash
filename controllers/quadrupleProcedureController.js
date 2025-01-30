const data = {
  '7067251b-2d46-4971-a4c6-1590e42056c6': {
    "Timestamp": 0,
    "Objs": [
      {
        "Guid": "ff06d6dd-b734-425f-8bb5-85fe2c0c371b",
        "ParentGuid": "7067251b-2d46-4971-a4c6-1590e42056c6",
        "Description": "ACG Versione 3.8*",
        "ShortDescription": "ACG Versione 3.8",
        "IsActive": false
      },
      {
        "Guid": "d6f136c4-e723-46a7-bb4c-fffeb9ccf2aa",
        "ParentGuid": "7067251b-2d46-4971-a4c6-1590e42056c6",
        "Description": "Configurazione TS Digital per ACG Versione 3",
        "ShortDescription": "Configurazione TS Digital per ACG Versione 3",
        "IsActive": false
      },
      {
        "Guid": "2c092ced-0714-451e-932e-0f408a9c4704",
        "ParentGuid": "7067251b-2d46-4971-a4c6-1590e42056c6",
        "Description": "Digital per ACG Versione 3",
        "ShortDescription": "Digital per ACG Versione 3",
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
  '947d58db-cc7d-45e1-9154-db500107cdbc': {
    "Timestamp": 0,
    "Objs": [
      {
        "Guid": "f7a68885-467b-4e4f-ae2d-261aeab5acff",
        "ParentGuid": "947d58db-cc7d-45e1-9154-db500107cdbc",
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
  '0b5fda30-662f-477e-953e-c4925c7e6a5c': {
    "Timestamp": 0,
    "Objs": [
      {
        "Guid": "b4a1d38c-da01-4414-8440-0a2a39a660d9",
        "ParentGuid": "0b5fda30-662f-477e-953e-c4925c7e6a5c",
        "Description": "Alyante Richiesta sorgenti per VAR/Sys Integrator",
        "ShortDescription": "Alyante Richiesta sorgenti per VAR/Sys Integrator",
        "IsActive": false
      },
      {
        "Guid": "42cd2f34-9837-41be-bca9-e86688896e2b",
        "ParentGuid": "0b5fda30-662f-477e-953e-c4925c7e6a5c",
        "Description": "ANTIRICICLAGGIO",
        "ShortDescription": "ANTIRICICLAGGIO",
        "IsActive": false
      },
      {
        "Guid": "f146a350-9012-4e14-8668-060a0be65ea0",
        "ParentGuid": "0b5fda30-662f-477e-953e-c4925c7e6a5c",
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

export const quadrupleProcedureController = (req, res) => {
  const { procedureId } = req.params;
  const procedureData = data[procedureId];

  if (!procedureData) {
    return res.status(404).json({ message: `Procedure ID ${procedureId} not found` });
  }

  res.json(procedureData);
};