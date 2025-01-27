export const operatingSystemController = async (req, res) => {
  try {
    res.json({
      "Timestamp": 0,
      "Objs": [
        {
          "Id": 19,
          "Description": "Macintosh (OS)",
          "DescriptionContId": 297,
          "Code": "MAC",
          "IsActive": true
        },
        {
          "Id": 18,
          "Description": "Windows Small Business Server",
          "DescriptionContId": 296,
          "Code": "WINSBS",
          "IsActive": true
        },
        {
          "Id": 17,
          "Description": "Fedora",
          "DescriptionContId": 295,
          "Code": "FEDORA",
          "IsActive": true
        },
        {
          "Id": 16,
          "Description": "Linux PowerPC OpenSuse",
          "DescriptionContId": 294,
          "Code": "POWERPC",
          "IsActive": true
        },
        {
          "Id": 15,
          "Description": "Solaris Sparc",
          "DescriptionContId": 293,
          "Code": "SOLARIS",
          "IsActive": true
        },
        {
          "Id": 14,
          "Description": "CentOS",
          "DescriptionContId": 292,
          "Code": "CENTOS",
          "IsActive": true
        },
        {
          "Id": 13,
          "Description": "Suse Linux Enterprise",
          "DescriptionContId": 291,
          "Code": "SUSE",
          "IsActive": true
        },
        {
          "Id": 12,
          "Description": "Windows 2003 Server",
          "DescriptionContId": 290,
          "Code": "WINSRV2003",
          "IsActive": true
        },
        {
          "Id": 11,
          "Description": "Windows 2008 server",
          "DescriptionContId": 289,
          "Code": "WINSRV2008",
          "IsActive": true
        },
        {
          "Id": 10,
          "Description": "Windows 2012 Server",
          "DescriptionContId": 288,
          "Code": "WINSRV2012",
          "IsActive": true
        },
        {
          "Id": 9,
          "Description": "Windows 10",
          "DescriptionContId": 287,
          "Code": "WIN10",
          "IsActive": true
        },
        {
          "Id": 7,
          "Description": "Ubuntu",
          "DescriptionContId": 286,
          "Code": "ULX",
          "IsActive": true
        },
        {
          "Id": 6,
          "Description": "TeamLinux",
          "DescriptionContId": 285,
          "Code": "TLX",
          "IsActive": true
        },
        {
          "Id": 5,
          "Description": "Windows 8",
          "DescriptionContId": 284,
          "Code": "WIN8",
          "IsActive": true
        },
        {
          "Id": 4,
          "Description": "Windows 7",
          "DescriptionContId": 283,
          "Code": "WIN7",
          "IsActive": true
        },
        {
          "Id": 3,
          "Description": "Windows 2000 Server",
          "DescriptionContId": 282,
          "Code": "WINSRV2000",
          "IsActive": true
        },
        {
          "Id": 1,
          "Description": "Windows XP",
          "DescriptionContId": 281,
          "Code": "WINXP",
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
    console.error('❌ Errore nel recupero contactReason:', error);
    res.status(500).json({ message: 'Errore nel recupero contactReason' });
  }
};