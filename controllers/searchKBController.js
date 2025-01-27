export const handleKBSearch = async (req, res) => {
  try {
    let results;
    const { searchValue } = req.body;
        if (searchValue === 'f24') {
            results = {
                "Timestamp": 0,
                "Objs": [
                    {
                        "Id": "14708",
                        "TitoloComposito": "GESTIONE F24 - MINI GUIDA OPERATIVA del 0-.-1.2015",
                        "DocumentTitle": "GESTIONE F24",
                        "SectionTitle": "Gestione F24",
                        "LastUpdate": "20.2..17.1",
                        "DocumentText": [
                            {
                                "Text": ""
                            }
                        ],
                        "Score": "",
                        "NumberOfClick": "653",
                        "Cs3PublicShowdocInteroDocumentoUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14708\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440",
                        "Cs3PublicShowdocSingolaSezioneUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14708\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0026IdSezione=112998",
                        "Classification": "Guida Utente",
                        "TextResponse": "\u003Cp\u003EGentile cliente,\u003C/p\u003E\u003Cp\u003Ele inviamo il link per scaricare un documento della Knowledge Base che potrebbe aiutarla nella risoluzione del suo problema:\u003Ca href=\u0022https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14708\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0022 target=\u0022_blank\u0022\u003E Clicca qui\u003C/a\u003E\u003C/p\u003E\u003Cp\u003ECordiali saluti\u003C/p\u003E",
                        "IdSezione": 112998,
                        "IdProdotto": 6169
                    },
                    {
                        "Id": "33536",
                        "TitoloComposito": "F24 INVIO PROPRIA DELEGA - MINI GUIDA OPERATIVA del 3-.-0.2018",
                        "DocumentTitle": "F24 INVIO PROPRIA DELEGA",
                        "SectionTitle": "F24 invio propria delega",
                        "LastUpdate": "20.2..17.1",
                        "DocumentText": [
                            {
                                "Text": ""
                            }
                        ],
                        "Score": "",
                        "NumberOfClick": "238",
                        "Cs3PublicShowdocInteroDocumentoUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=33536\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440",
                        "Cs3PublicShowdocSingolaSezioneUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=33536\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0026IdSezione=248361",
                        "Classification": "Guida Utente",
                        "TextResponse": "\u003Cp\u003EGentile cliente,\u003C/p\u003E\u003Cp\u003Ele inviamo il link per scaricare un documento della Knowledge Base che potrebbe aiutarla nella risoluzione del suo problema:\u003Ca href=\u0022https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=33536\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0022 target=\u0022_blank\u0022\u003E Clicca qui\u003C/a\u003E\u003C/p\u003E\u003Cp\u003ECordiali saluti\u003C/p\u003E",
                        "IdSezione": 248361,
                        "IdProdotto": 6169
                    },
                    {
                        "Id": "14722",
                        "TitoloComposito": "F24 INSERIMENTO CREDITI INPS - PILLOLE del 3-.-0.2016",
                        "DocumentTitle": "F24 INSERIMENTO CREDITI INPS",
                        "SectionTitle": "F24 inserimento crediti INPS",
                        "LastUpdate": "20.2..17.1",
                        "DocumentText": [
                            {
                                "Text": ""
                            }
                        ],
                        "Score": "",
                        "NumberOfClick": "30",
                        "Cs3PublicShowdocInteroDocumentoUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14722\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440",
                        "Cs3PublicShowdocSingolaSezioneUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14722\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0026IdSezione=82945",
                        "Classification": "Guida Utente",
                        "TextResponse": "\u003Cp\u003EGentile cliente,\u003C/p\u003E\u003Cp\u003Ele inviamo il link per scaricare un documento della Knowledge Base che potrebbe aiutarla nella risoluzione del suo problema:\u003Ca href=\u0022https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14722\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0022 target=\u0022_blank\u0022\u003E Clicca qui\u003C/a\u003E\u003C/p\u003E\u003Cp\u003ECordiali saluti\u003C/p\u003E",
                        "IdSezione": 82945,
                        "IdProdotto": 6169
                    },
                    {
                        "Id": "14707",
                        "TitoloComposito": "ERRORE F24 CONTE - MINI GUIDA OPERATIVA del 3-.-0.2016",
                        "DocumentTitle": "Errore F24 CONTE",
                        "SectionTitle": "ERRORE F24 CON.TE",
                        "LastUpdate": "20.2..05.0",
                        "DocumentText": [
                            {
                                "Text": ""
                            }
                        ],
                        "Score": "",
                        "NumberOfClick": "20",
                        "Cs3PublicShowdocInteroDocumentoUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14707\u0026User=5064131\u0026IdProdotto=11044\u0026IdVersione=441",
                        "Cs3PublicShowdocSingolaSezioneUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14707\u0026User=5064131\u0026IdProdotto=11044\u0026IdVersione=441\u0026IdSezione=112964",
                        "Classification": "Guida Utente",
                        "TextResponse": "\u003Cp\u003EGentile cliente,\u003C/p\u003E\u003Cp\u003Ele inviamo il link per scaricare un documento della Knowledge Base che potrebbe aiutarla nella risoluzione del suo problema:\u003Ca href=\u0022https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14707\u0026User=5064131\u0026IdProdotto=11044\u0026IdVersione=441\u0022 target=\u0022_blank\u0022\u003E Clicca qui\u003C/a\u003E\u003C/p\u003E\u003Cp\u003ECordiali saluti\u003C/p\u003E",
                        "IdSezione": 112964,
                        "IdProdotto": 11044
                    },
                    {
                        "Id": "14239",
                        "TitoloComposito": "F24 GESTIONE RAVVEDIMENTO OPEROSO - MINI GUIDA OPERATIVA del 0-.-1.2015",
                        "DocumentTitle": "F24 gestione ravvedimento operoso",
                        "SectionTitle": "Ravvedimento operoso",
                        "LastUpdate": "20.7..28.0",
                        "DocumentText": [
                            {
                                "Text": ""
                            }
                        ],
                        "Score": "",
                        "NumberOfClick": "564",
                        "Cs3PublicShowdocInteroDocumentoUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14239\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440",
                        "Cs3PublicShowdocSingolaSezioneUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14239\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0026IdSezione=888555",
                        "Classification": "Guida Utente",
                        "TextResponse": "\u003Cp\u003EGentile cliente,\u003C/p\u003E\u003Cp\u003Ele inviamo il link per scaricare un documento della Knowledge Base che potrebbe aiutarla nella risoluzione del suo problema:\u003Ca href=\u0022https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14239\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0022 target=\u0022_blank\u0022\u003E Clicca qui\u003C/a\u003E\u003C/p\u003E\u003Cp\u003ECordiali saluti\u003C/p\u003E",
                        "IdSezione": 888555,
                        "IdProdotto": 6169
                    },
                    {
                        "Id": "14453",
                        "TitoloComposito": "TELEMATICO EST E TRIBUTO IN F24 - PILLOLE del 3-.-0.2016",
                        "DocumentTitle": "TELEMATICO EST E TRIBUTO IN F24",
                        "SectionTitle": "TELEMATICO FONDO EST E TRIBUTO IN F24",
                        "LastUpdate": "20.2..05.0",
                        "DocumentText": [
                            {
                                "Text": ""
                            }
                        ],
                        "Score": "",
                        "NumberOfClick": "78",
                        "Cs3PublicShowdocInteroDocumentoUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14453\u0026User=5064131\u0026IdProdotto=6237\u0026IdVersione=421",
                        "Cs3PublicShowdocSingolaSezioneUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14453\u0026User=5064131\u0026IdProdotto=6237\u0026IdVersione=421\u0026IdSezione=82317",
                        "Classification": "Guida Utente",
                        "TextResponse": "\u003Cp\u003EGentile cliente,\u003C/p\u003E\u003Cp\u003Ele inviamo il link per scaricare un documento della Knowledge Base che potrebbe aiutarla nella risoluzione del suo problema:\u003Ca href=\u0022https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14453\u0026User=5064131\u0026IdProdotto=6237\u0026IdVersione=421\u0022 target=\u0022_blank\u0022\u003E Clicca qui\u003C/a\u003E\u003C/p\u003E\u003Cp\u003ECordiali saluti\u003C/p\u003E",
                        "IdSezione": 82317,
                        "IdProdotto": 6237
                    },
                    {
                        "Id": "14278",
                        "TitoloComposito": "GESTIONE RITENUTE D\u0027ACCONTO - MINI GUIDA OPERATIVA del 0-.-1.2015",
                        "DocumentTitle": "Gestione ritenute d\u0027acconto",
                        "SectionTitle": "Trasferimento ritenute in F24",
                        "LastUpdate": "20.7..04.0",
                        "DocumentText": [
                            {
                                "Text": ""
                            }
                        ],
                        "Score": "",
                        "NumberOfClick": "430",
                        "Cs3PublicShowdocInteroDocumentoUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14278\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440",
                        "Cs3PublicShowdocSingolaSezioneUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14278\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0026IdSezione=111706",
                        "Classification": "Guida Utente",
                        "TextResponse": "\u003Cp\u003EGentile cliente,\u003C/p\u003E\u003Cp\u003Ele inviamo il link per scaricare un documento della Knowledge Base che potrebbe aiutarla nella risoluzione del suo problema:\u003Ca href=\u0022https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14278\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0022 target=\u0022_blank\u0022\u003E Clicca qui\u003C/a\u003E\u003C/p\u003E\u003Cp\u003ECordiali saluti\u003C/p\u003E",
                        "IdSezione": 111706,
                        "IdProdotto": 6169
                    },
                    {
                        "Id": "14247",
                        "TitoloComposito": "GESTIONE RITENUTE D\u0027ACCONTO RAPPRESENTANTI - MINI GUIDA OPERATIVA del 0-.-1.2015",
                        "DocumentTitle": "Gestione ritenute d\u0027acconto rappresentanti",
                        "SectionTitle": "TRASFERIMENTO RITENUTE IN F24",
                        "LastUpdate": "20.7..04.0",
                        "DocumentText": [
                            {
                                "Text": ""
                            }
                        ],
                        "Score": "",
                        "NumberOfClick": "189",
                        "Cs3PublicShowdocInteroDocumentoUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14247\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440",
                        "Cs3PublicShowdocSingolaSezioneUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14247\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0026IdSezione=81842",
                        "Classification": "Guida Utente",
                        "TextResponse": "\u003Cp\u003EGentile cliente,\u003C/p\u003E\u003Cp\u003Ele inviamo il link per scaricare un documento della Knowledge Base che potrebbe aiutarla nella risoluzione del suo problema:\u003Ca href=\u0022https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=14247\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0022 target=\u0022_blank\u0022\u003E Clicca qui\u003C/a\u003E\u003C/p\u003E\u003Cp\u003ECordiali saluti\u003C/p\u003E",
                        "IdSezione": 81842,
                        "IdProdotto": 6169
                    },
                    {
                        "Id": "36334",
                        "TitoloComposito": "INVIO DELEGHE F24 TRAMITE EMAIL - PILLOLE del 6-.-0.2018",
                        "DocumentTitle": "INVIO DELEGHE F24 TRAMITE EMAIL",
                        "SectionTitle": "Invio deleghe F24 tramite email",
                        "LastUpdate": "20.2..17.1",
                        "DocumentText": [
                            {
                                "Text": ""
                            }
                        ],
                        "Score": "",
                        "NumberOfClick": "183",
                        "Cs3PublicShowdocInteroDocumentoUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=36334\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440",
                        "Cs3PublicShowdocSingolaSezioneUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=36334\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0026IdSezione=309732",
                        "Classification": "Guida Utente",
                        "TextResponse": "\u003Cp\u003EGentile cliente,\u003C/p\u003E\u003Cp\u003Ele inviamo il link per scaricare un documento della Knowledge Base che potrebbe aiutarla nella risoluzione del suo problema:\u003Ca href=\u0022https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=36334\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0022 target=\u0022_blank\u0022\u003E Clicca qui\u003C/a\u003E\u003C/p\u003E\u003Cp\u003ECordiali saluti\u003C/p\u003E",
                        "IdSezione": 309732,
                        "IdProdotto": 6169
                    },
                    {
                        "Id": "28716",
                        "TitoloComposito": "DICHIARAZIONE IVA - CHIUSURA E TRASFERIMENTO TRIBUTI IN F24 - MINI GUIDA OPERATIVA del 1-.-0.2017",
                        "DocumentTitle": "DICHIARAZIONE IVA - CHIUSURA E TRASFERIMENTO TRIBUTI IN F24",
                        "SectionTitle": "Dichiarazione Iva annuale a Credito",
                        "LastUpdate": "20.2..17.1",
                        "DocumentText": [
                            {
                                "Text": ""
                            }
                        ],
                        "Score": "",
                        "NumberOfClick": "315",
                        "Cs3PublicShowdocInteroDocumentoUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=28716\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440",
                        "Cs3PublicShowdocSingolaSezioneUrl": "https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=28716\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0026IdSezione=177678",
                        "Classification": "Guida Utente",
                        "TextResponse": "\u003Cp\u003EGentile cliente,\u003C/p\u003E\u003Cp\u003Ele inviamo il link per scaricare un documento della Knowledge Base che potrebbe aiutarla nella risoluzione del suo problema:\u003Ca href=\u0022https://cs.teamsystem.com/cs3public/showdoc.aspx?IdDoc=28716\u0026User=5064131\u0026IdProdotto=6169\u0026IdVersione=440\u0022 target=\u0022_blank\u0022\u003E Clicca qui\u003C/a\u003E\u003C/p\u003E\u003Cp\u003ECordiali saluti\u003C/p\u003E",
                        "IdSezione": 177678,
                        "IdProdotto": 6169
                    }
                ],
                "ResultType": 2,
                "TipoRisultatoString": "Info",
                "Messages": [],
                "ErrorFields": [],
                "ResultTypeString": "Info",
                "Page": {
                    "Offset": 0,
                    "Limit": 10,
                    "Count": 556,
                    "Pages": 56
                }
            };
        } else {
            results = {
                "Timestamp": 0,
                "Objs": [],
                "ResultType": 2,
                "TipoRisultatoString": "Info",
                "Messages": [],
                "ErrorFields": [],
                "ResultTypeString": "Info",
                "Page": {
                    "Offset": 0,
                    "Limit": 10,
                    "Count": 1,
                    "Pages": 0
                }
            };
        }

    if (!results) {
      return res.status(404).json({ message: 'Servizio non trovato' });
    }

    res.json(results);
  } catch (error) {
    console.error('❌ Errore nel recupero dei dati dalla KB:', error);
    res.status(500).json({ message: 'Errore nel recupero dei dati dalla KB' });
  }
};