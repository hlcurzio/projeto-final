dmx.config({
  "users": {
    "data_detailUser": {
      "meta": [
        {
          "type": "number",
          "name": "userID"
        },
        {
          "type": "text",
          "name": "firstname"
        },
        {
          "type": "text",
          "name": "lastname"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "password"
        },
        {
          "type": "number",
          "name": "group"
        },
        {
          "type": "number",
          "name": "status"
        },
        {
          "type": "datetime",
          "name": "created"
        }
      ],
      "outputType": "array"
    }
  },
  "main": {},
  "redefinirsenha": {
    "query": [
      {
        "type": "text",
        "name": "email"
      },
      {
        "type": "text",
        "name": "id"
      }
    ]
  },
  "cadastrar": {
    "query": [
      {
        "type": "text",
        "name": "email"
      },
      {
        "type": "text",
        "name": "code"
      }
    ]
  },
  "perfil": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "ferramentaID"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "descricao"
        },
        {
          "type": "text",
          "name": "link"
        },
        {
          "type": "text",
          "name": "imagem"
        },
        {
          "type": "number",
          "name": "criada_por"
        },
        {
          "type": "number",
          "name": "categoria"
        },
        {
          "type": "text",
          "name": "criada_por_nome"
        },
        {
          "type": "text",
          "name": "categoria_nome"
        }
      ],
      "outputType": "array"
    }
  },
  "acompanhamento": {
    "dataDetail_Evento": {
      "meta": [
        {
          "type": "number",
          "name": "eventoId"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "datetime",
          "name": "inicio"
        },
        {
          "type": "datetime",
          "name": "fim"
        },
        {
          "type": "boolean",
          "name": "dia_inteiro"
        }
      ],
      "outputType": "array"
    },
    "dataDetail_evento": {
      "meta": [
        {
          "type": "number",
          "name": "eventoId"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "datetime",
          "name": "inicio"
        },
        {
          "type": "datetime",
          "name": "fim"
        },
        {
          "type": "boolean",
          "name": "dia_inteiro"
        }
      ],
      "outputType": "array"
    },
    "var_start": {
      "meta": null,
      "outputType": "text"
    },
    "var_end": {
      "meta": null,
      "outputType": "text"
    }
  },
  "admin-usuarios": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "conteudo"
        },
        {
          "type": "number",
          "name": "remetenteID"
        },
        {
          "type": "number",
          "name": "destinatarioID"
        },
        {
          "type": "datetime",
          "name": "dataHora"
        },
        {
          "type": "text",
          "name": "destin_firstname"
        },
        {
          "type": "text",
          "name": "destin_lastname"
        },
        {
          "type": "text",
          "name": "remet_firstname"
        },
        {
          "type": "text",
          "name": "remet_lastname"
        }
      ],
      "outputType": "array"
    },
    "data_detail1": {
      "meta": [
        {
          "type": "number",
          "name": "ferramentaID"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "descricao"
        },
        {
          "type": "text",
          "name": "link"
        },
        {
          "type": "text",
          "name": "imagem"
        }
      ],
      "outputType": "array"
    },
    "repeat2": {
      "meta": [
        {
          "type": "number",
          "name": "ferramentaID"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "descricao"
        },
        {
          "type": "text",
          "name": "link"
        },
        {
          "type": "text",
          "name": "imagem"
        }
      ],
      "outputType": "array"
    },
    "data_detail_ferramenta": {
      "meta": [
        {
          "type": "number",
          "name": "ferramentaID"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "descricao"
        },
        {
          "type": "text",
          "name": "link"
        },
        {
          "type": "text",
          "name": "imagem"
        }
      ],
      "outputType": "array"
    },
    "repeat_categorias": {
      "meta": [
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "number",
          "name": "ferramentaID"
        }
      ],
      "outputType": "array"
    },
    "query": [
      {
        "type": "text",
        "name": "receiver"
      }
    ],
    "tableRepeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        }
      ],
      "outputType": "array"
    },
    "data_detail_catDeFerramenta": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        }
      ],
      "outputType": "array"
    },
    "data_detail": {
      "meta": [
        {
          "type": "number",
          "name": "userID"
        },
        {
          "type": "text",
          "name": "firstname"
        },
        {
          "type": "text",
          "name": "lastname"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "password"
        },
        {
          "type": "boolean",
          "sub": [],
          "name": "admin"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat2": {
      "meta": [
        {
          "type": "number",
          "name": "userID"
        },
        {
          "type": "text",
          "name": "firstname"
        },
        {
          "type": "text",
          "name": "lastname"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "password"
        }
      ],
      "outputType": "array"
    },
    "datastoreChat": [
      {
        "type": "text",
        "name": "chatUsuario"
      },
      {
        "type": "text",
        "name": "chatMensagem"
      }
    ]
  },
  "ferramentas": {
    "data_detail": {
      "meta": [
        {
          "type": "number",
          "name": "userID"
        },
        {
          "type": "text",
          "name": "firstname"
        },
        {
          "type": "text",
          "name": "lastname"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "password"
        },
        {
          "type": "text",
          "name": "cargo"
        },
        {
          "type": "number",
          "name": "tutorId"
        },
        {
          "type": "number",
          "name": "protutId"
        }
      ],
      "outputType": "array"
    },
    "repeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "conteudo"
        },
        {
          "type": "number",
          "name": "remetenteID"
        },
        {
          "type": "number",
          "name": "destinatarioID"
        },
        {
          "type": "datetime",
          "name": "dataHora"
        },
        {
          "type": "text",
          "name": "destin_firstname"
        },
        {
          "type": "text",
          "name": "destin_lastname"
        },
        {
          "type": "text",
          "name": "remet_firstname"
        },
        {
          "type": "text",
          "name": "remet_lastname"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat1": {
      "meta": [
        {
          "type": "number",
          "name": "userID"
        },
        {
          "type": "text",
          "name": "firstname"
        },
        {
          "type": "text",
          "name": "lastname"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "password"
        },
        {
          "type": "text",
          "name": "cargo"
        },
        {
          "type": "number",
          "name": "tutorId"
        },
        {
          "type": "number",
          "name": "protutId"
        }
      ],
      "outputType": "array"
    }
  },
  "adminusuarios": {
    "data_detail": {
      "meta": [
        {
          "type": "number",
          "name": "userID"
        },
        {
          "type": "text",
          "name": "firstname"
        },
        {
          "type": "text",
          "name": "lastname"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "password"
        },
        {
          "type": "text",
          "name": "cargo"
        },
        {
          "type": "number",
          "name": "tutorId"
        },
        {
          "type": "number",
          "name": "protutId"
        },
        {
          "type": "text",
          "name": "tutor_firstname"
        },
        {
          "type": "text",
          "name": "tutor_lastname"
        },
        {
          "type": "text",
          "name": "prof_firstname"
        },
        {
          "type": "text",
          "name": "prof_lastname"
        }
      ],
      "outputType": "array"
    }
  }
});
