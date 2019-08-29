export default {
  "definitions": {
    "party": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "title": "Name"
        },
        "email": {
          "type": "string",
          "title": "Email"
        },
        "orcid": {
          "type": "string",
          "title": "ORCID"
        },
        "role": {
          "type": "array",
          "title": "Role(s)",
          "items": {
            "type": "string",
            "enum": [
              "creator",
              "contact",
              "principal_investigator",
              "co_principal_investigator",
              "collaborating_principal_investigators",
              "metadata_provider",
              "custodian/stewards",
              "publisher",
              "user"
            ],
            "enumNames": [
              "Creator",
              "Contact",
              "Principal Investigator",
              "Co-Principal Investigator",
              "Collaborating Principal Investigator",
              "Metadata Provider",
              "Custodian/Steward",
              "Publisher",
              "Contributor"
            ],
            "uniqueItems": true
          }
        }
      }
    },
    "geographic_coverage": {
      "title": "Geographic Coverage",
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "title": "Description"
        },
        "choice": {
          "type": "string",
          "title": "Point or Bounding Box?",
          "enum": [
            "Point",
            "Bounding Box"
          ],
          "uniqueItems": true
        }
      },
      "dependencies": {
        "choice": {
          "oneOf": [
            {
              "properties": {
                "choice": {
                  "enum": [
                    "Point"
                  ]
                },
                "lat": {
                  "type": "number",
                  "title": "Latitude (Degrees)",
                  "minimum": -90,
                  "maximum": 90
                },
                "lon": {
                  "type": "number",
                  "title": "Longitude (Degrees)",
                  "minimum": -180,
                  "maximum": 180
                }
              }
            },
            {
              "properties": {
                "choice": {
                  "enum": [
                    "Bounding Box"
                  ]
                },
                "north": {
                  "type": "number",
                  "title": "North Latitude (Degrees)",
                  "minimum": -90,
                  "maximum": 90
                },
                "east": {
                  "type": "number",
                  "title": "Eastern Longitude (Degrees)",
                  "minimum": -180,
                  "maximum": 180
                },
                "south": {
                  "type": "number",
                  "title": "Southern Latitude (Degrees)",
                  "minimum": -90,
                  "maximum": 90
                },
                "west": {
                  "type": "number",
                  "title": "Western Longitude (Degrees)",
                  "minimum": -180,
                  "maximum": 180
                }
              }
            }
          ]
        }
      }
    },
    "temporal_coverage": {
      "title": "Temporal Coverage",
      "type": "object",
      "properties": {
        "choice": {
          "type": "string",
          "title": "Single Point in Time or Range?",
          "enum": [
            "Single Date",
            "Date Range"
          ],
          "uniqueItems": true
        }
      },
      "dependencies": {
        "choice": {
          "oneOf": [
            {
              "properties": {
                "choice": {
                  "enum": [
                    "Single Date"
                  ]
                },
                "date": {
                  "type": "string",
                  "format": "date"
                }
              }
            },
            {
              "properties": {
                "choice": {
                  "enum": [
                    "Date Range"
                  ]
                },
                "Start": {
                  "type": "string",
                  "format": "date"
                },
                "End": {
                  "type": "string",
                  "format": "date"
                }
              }
            }
          ]
        }
      }
    },
    "taxonomic_classification": {
      "type": "object",
      "properties": {
        "rank": {
          "type": "string",
          "title": "Rank",
          "enum": [
            "domain",
            "kingdom",
            "phylum",
            "class",
            "order",
            "family",
            "genus",
            "species",
            "other"
          ],
          "enumNames": [
            "Domain",
            "Kingdom",
            "Phylum",
            "Class",
            "Order",
            "Family",
            "Genus",
            "Species",
            "Other"
          ],
          "uniqueItems": true
        },
        "value": {
          "type": "string",
          "title": "Value"
        }
      },
      "dependencies": {
        "rank": {
          "oneOf": [
            {
              "properties": {
                "rank": {
                  "enum": [
                    "other"
                  ]
                },
                "other": {
                  "type": "string",
                  "title": "Custom Rank"
                }
              }
            }
          ]
        }
      }
    }
  },
  "title": "Dataset",
  "type": "object",
  "required": ["title"],
  "properties": {
    "title": {
      "type": "string",
      "title": "Title"
    },
    "abstract": {
      "type": "string",
      "title": "Abstract"
    },
    "keywords": {
      "type": "array",
      "title": "Keywords",
      "items": {
        "type": "string"
      }
    },
    "funding": {
      "type": "array",
      "title": "Funding",
      "items": {
        "type": "string"
      }
    },
    "publication_date": {
      "type": "string",
      "title": "Publication Date",
      "format": "date"
    },
    "usage": {
      "type": "string",
      "title": "Usage Rights",
      "enum": [
        "cc-0",
        "cc-by"
      ],
      "enumNames": [
        "CC-O",
        "CC-BY"
      ]
    },
    "alternate_identifiers": {
      "type": "array",
      "title": "Alternate Identifier(s)",
      "items": {
        "type": "string"
      }
    },
    "people": {
      "type": "array",
      "title": "People",
      "items": {
        "$ref": "#/definitions/party"
      }
    },
    "geographic_coverage": {
      "type": "array",
      "title": "Geographic Coverage",
      "items": {
        "$ref": "#/definitions/geographic_coverage"
      }
    },
    "temporal_coverage": {
      "type": "array",
      "title": "Temporal Coverage",
      "items": {
        "$ref": "#/definitions/temporal_coverage"
      }
    },
    "taxonomic_coverage": {
      "type": "object",
      "title": "Taxonomic Coverage",
      "properties": {
        "general_taxonomic_coverage": {
          "type": "string",
          "title": "General Taxonomic Coverage"
        },
        "classifications": {
          "type": "array",
          "title": "Classifications",
          "items": { 
            "$ref": "#/definitions/taxonomic_classification"
          }
        }
      }
    },
    "methods": {
      "type": "object",
      "title": "Methods",
      "properties": {
        "steps": {
          "type": "array",
          "title": "Steps",
          "items": { 
            "type": "string"
          }
        },
        "study_extent": {
          "type": "string",
          "title": "Study Extent"
        },
        "description": {
          "type": "string",
          "title": "Description"
        }
      }
    },
    "files": {
      "type": "array",
      "title": "Files",
      "items": {
        "type": "string",
        "format": "data-url"
      }
    }
  }
};