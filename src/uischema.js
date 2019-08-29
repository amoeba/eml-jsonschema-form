export default {
  "people": {
    "items":{
      "role": {
        "ui:widget": "checkboxes",
        "ui:options": {
          "inline": true
        }
      }
    }
  },
  "usage": {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  "abstract": {
    "ui:widget": "textarea"
  },
  "methods": {
    "steps": {
      "items": {
        "ui:widget": "textarea"
      }
    },
    "study_extent": {
      "ui:widget": "textarea"
    },
    "description": {
      "ui:widget": "textarea"
    }
  },
  "geographic_coverage": {
    "items": {
      "description": {
        "ui:widget": "textarea"
      }  
    }
  },
  "taxonomic_coverage": {
    "general_taxonomic_coverage": {
      "ui:widget": "textarea"
    }
  }
};