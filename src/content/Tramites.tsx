export const Tramites : any = {
    "T20605":{
        "titulo":"permiso para el aprovechamiento forestal de bosques naturales únicos, persistentes y domésticos",
        "descripcion":"Obtener el derecho para aprovechar bosques naturales o productos de la flora silvestre no maderable, ubicados en terrenos de dominio público, ya sean únicos, persistentes o domésticos.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=20605#anclaPanel",
        "resultado":"Permiso para el aprovechamiento forestal., que se obtiene en 65 Día(s) - hábil(es)",
        "ciudadano":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Aprovechamiento Forestal Doméstico Bosque Natural",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=525&A=15981"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Mapa del área a escala según la extensión del predio: 1 Original(es) (Mapa del área )",
                        "anotaciones":"Anotaciones Adicionales: no aplica para aprovechamientos forestales domésticos. - Este mapa se debe entregar siempre y cuando sea exigido por la entidad y depende del caso"
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado )",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Contrato de arrendamiento o prueba idónea de la tenencia del predio: 1 Original(es) (documento )",
                                "anotaciones":"Anotaciones Adicionales: para predios de propiedad privada. - El Contrato de arrendamiento y las autorizaciones aplica para plantaciones protectoras solamente; en caso de Autorización de aprovechamiento en bosque natural solo se otorga al propietario del predio"
                            },
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario del predio:1 Original(es) (Autorización )",
                                "anotaciones":"Anotaciones Adicionales: Aplica solo para plantaciones protectoras"
                            }
                        ]
                    },
                    {
                        "titulo":"Para aprovechamiento forestal único de bosques naturales ubicados en terreno de dominio público",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Plan de aprovechamiento forestal:1 Original(es) (Plan de aprovechamiento forestal )",
                                "anotaciones":"Anotaciones Adicionales: incluyendo la destinación de los productos forestales y las medidas de compensación. - Es necesario tener presente lo establecido en el capitulo IV del decreto 1791 de 1996"
                            },
                            {
                                "type":"documento",
                                "titulo":"Estudio técnico que demuestre una mejor aptitud de uso del suelo diferente al forestal:1 Original(es) (Plan de aprovechamiento forestal )",
                                "anotaciones":"Anotaciones Adicionales: Debe estar incluido o hacer parte del plan de aprovechamiento forestal"
                            }
                        ]
                    },
                    {
                        "titulo":"Para aprovechamientos forestales persistentes ubicados en terrenos de dominio público",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que acredite la capacidad para garantizar el manejo silvicultural, la investigación y la eficiencia en el aprovechamiento y en la transformación:1 Original(es) (Plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: Este hace parte del plan de manejo forestal"
                            }
                        ]
                    },
                    {
                        "titulo":"Para los aprovechamientos forestales persistentes de bosque natural ubicados en terrenos de dominio público o privado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Plan de manejo y aprovechamiento forestal:1 Original(es) (Plan de Manejo )",
                                "anotaciones":"Anotaciones Adicionales: El plan de manejo aplica solo para aprovechamientos persistentes y cuando la autoridad lo requiera por las condiciones y características del área a intervenir"
                            },
                            {
                                "type":"documento",
                                "titulo":"Inventario estadístico para todas las especies a partir de diez centímetros (10 cm) de diámetro a la altura del pecho (DAP):1 Original(es) (plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: con una intensidad de muestreo de forma tal que el error no sea superior al quince por ciento (15%) con una probabilidad del noventa y cinco por ciento (95%). - Esto para aprovechamientos forestales persistentes de bosque natural, es necesario tener presente lo establecido en el articulo 10 del decreto 1791 de 1996. Es de aclarar que este va incluido en el plan de manejo"
                            }
                        ]
                    },
                    {
                        "titulo":"Para los aprovechamientos iguales o superiores a veinte (20) hectáreas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Inventario del ciento por ciento (100%) de las especies que pretende aprovechar:1 Original(es) (Plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: a partir de un diámetro a la altura del pecho (DAP) de diez centímetros (10cm) sobre la primera unidad de corta anual y así sucesivamente para cada unidad hasta la culminación del aprovechamiento. - Esto para aprovechamientos forestales persistentes de bosque natural, es necesario tener presente lo establecido en el articulo 10 del decreto 1791 de 1996. Es de aclarar que este va incluido en el plan de manejo"
                            }
                        ]
                    },
                    {
                        "titulo":"Para los aprovechamientos menores de veinte (20) hectáreas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Inventario al ciento por ciento (100%) de las especies que se propone aprovechar, a partir de un DAP de diez centímetros (10cm) para el área solicitada:1 Original(es) (plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: Es necesario tener en cuenta lo establecido en el articulo 10 del decreto 1791 de 1996. Aplica para aprovechamientos persistentes. Este inventario hace parte del plan de manejo"
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR.",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Conumicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"El usuario debe estar pendiente para notificarle el auto de inicio"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Verificar las condiciones ambientales del predio y la veracidad de la información suministrada por el solicitante."
                    },
                    {
                        "type":"condicion",
                        "titulo":"El usuario debe estar presente el día que se efectué la visita o en su defecto delegar a alguien para que realice el acompañamiento a esta y pueda suministrar la información requerida"
                    }
                ]
            }
        ],
        "extranjero":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Aprovechamiento Forestal Doméstico Bosque Natural",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=525&A=15981"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Mapa del área a escala según la extensión del predio: 1 Original(es) (Mapa del área )",
                        "anotaciones":"Anotaciones Adicionales: no aplica para aprovechamientos forestales domésticos. - Este mapa se debe entregar siempre y cuando sea exigido por la entidad y depende del caso"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado )",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Contrato de arrendamiento o prueba idónea de la tenencia del predio: 1 Original(es) (documento )",
                                "anotaciones":"Anotaciones Adicionales: para predios de propiedad privada. - El Contrato de arrendamiento y las autorizaciones aplica para plantaciones protectoras solamente; en caso de Autorización de aprovechamiento en bosque natural solo se otorga al propietario del predio"
                            },
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario del predio:1 Original(es) (Autorización )",
                                "anotaciones":"Anotaciones Adicionales: Aplica solo para plantaciones protectoras"
                            }
                        ]
                    },
                    {
                        "titulo":"Para aprovechamiento forestal único de bosques naturales ubicados en terreno de dominio público",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Plan de aprovechamiento forestal:1 Original(es) (Plan de aprovechamiento forestal )",
                                "anotaciones":"Anotaciones Adicionales: incluyendo la destinación de los productos forestales y las medidas de compensación. - Es necesario tener presente lo establecido en el capitulo IV del decreto 1791 de 1996"
                            },
                            {
                                "type":"documento",
                                "titulo":"Estudio técnico que demuestre una mejor aptitud de uso del suelo diferente al forestal:1 Original(es) (Plan de aprovechamiento forestal )",
                                "anotaciones":"Anotaciones Adicionales: Debe estar incluido o hacer parte del plan de aprovechamiento forestal"
                            }
                        ]
                    },
                    {
                        "titulo":"Para aprovechamientos forestales persistentes ubicados en terrenos de dominio público",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que acredite la capacidad para garantizar el manejo silvicultural, la investigación y la eficiencia en el aprovechamiento y en la transformación:1 Original(es) (Plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: Este hace parte del plan de manejo forestal"
                            }
                        ]
                    },
                    {
                        "titulo":"Para los aprovechamientos forestales persistentes de bosque natural ubicados en terrenos de dominio público o privado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Plan de manejo y aprovechamiento forestal:1 Original(es) (Plan de Manejo )",
                                "anotaciones":"Anotaciones Adicionales: El plan de manejo aplica solo para aprovechamientos persistentes y cuando la autoridad lo requiera por las condiciones y características del área a intervenir"
                            },
                            {
                                "type":"documento",
                                "titulo":"Inventario estadístico para todas las especies a partir de diez centímetros (10 cm) de diámetro a la altura del pecho (DAP):1 Original(es) (plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: con una intensidad de muestreo de forma tal que el error no sea superior al quince por ciento (15%) con una probabilidad del noventa y cinco por ciento (95%). - Esto para aprovechamientos forestales persistentes de bosque natural, es necesario tener presente lo establecido en el articulo 10 del decreto 1791 de 1996. Es de aclarar que este va incluido en el plan de manejo"
                            }
                        ]
                    },
                    {
                        "titulo":"Para los aprovechamientos iguales o superiores a veinte (20) hectáreas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Inventario del ciento por ciento (100%) de las especies que pretende aprovechar:1 Original(es) (Plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: a partir de un diámetro a la altura del pecho (DAP) de diez centímetros (10cm) sobre la primera unidad de corta anual y así sucesivamente para cada unidad hasta la culminación del aprovechamiento. - Esto para aprovechamientos forestales persistentes de bosque natural, es necesario tener presente lo establecido en el articulo 10 del decreto 1791 de 1996. Es de aclarar que este va incluido en el plan de manejo"
                            }
                        ]
                    },
                    {
                        "titulo":"Para los aprovechamientos menores de veinte (20) hectáreas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Inventario al ciento por ciento (100%) de las especies que se propone aprovechar, a partir de un DAP de diez centímetros (10cm) para el área solicitada:1 Original(es) (plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: Es necesario tener en cuenta lo establecido en el articulo 10 del decreto 1791 de 1996. Aplica para aprovechamientos persistentes. Este inventario hace parte del plan de manejo"
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Conumicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"El usuario debe estar pendiente para notificarle el auto de inicio"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Verificar las condiciones ambientales del predio y la veracidad de la información suministrada por el solicitante."
                    },
                    {
                        "type":"condicion",
                        "titulo":"El usuario debe estar presente el día que se efectué la visita o en su defecto delegar a alguien para que realice el acompañamiento a esta y pueda suministrar la información requerida"
                    }
                ]
            }
        ],
        "institucion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Aprovechamiento Forestal Doméstico Bosque Natural",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=525&A=15981"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Mapa del área a escala según la extensión del predio: 1 Original(es) (Mapa del área )",
                        "anotaciones":"Anotaciones Adicionales: no aplica para aprovechamientos forestales domésticos. - Este mapa se debe entregar siempre y cuando sea exigido por la entidad y depende del caso"
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado )",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Contrato de arrendamiento o prueba idónea de la tenencia del predio: 1 Original(es) (documento )",
                                "anotaciones":"Anotaciones Adicionales: para predios de propiedad privada. - El Contrato de arrendamiento y las autorizaciones aplica para plantaciones protectoras solamente; en caso de Autorización de aprovechamiento en bosque natural solo se otorga al propietario del predio"
                            },
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario del predio:1 Original(es) (Autorización )",
                                "anotaciones":"Anotaciones Adicionales: Aplica solo para plantaciones protectoras"
                            }
                        ]
                    },
                    {
                        "titulo":"Para aprovechamiento forestal único de bosques naturales ubicados en terreno de dominio público",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Plan de aprovechamiento forestal:1 Original(es) (Plan de aprovechamiento forestal )",
                                "anotaciones":"Anotaciones Adicionales: incluyendo la destinación de los productos forestales y las medidas de compensación. - Es necesario tener presente lo establecido en el capitulo IV del decreto 1791 de 1996"
                            },
                            {
                                "type":"documento",
                                "titulo":"Estudio técnico que demuestre una mejor aptitud de uso del suelo diferente al forestal:1 Original(es) (Plan de aprovechamiento forestal )",
                                "anotaciones":"Anotaciones Adicionales: Debe estar incluido o hacer parte del plan de aprovechamiento forestal"
                            }
                        ]
                    },
                    {
                        "titulo":"Para aprovechamientos forestales persistentes ubicados en terrenos de dominio público",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que acredite la capacidad para garantizar el manejo silvicultural, la investigación y la eficiencia en el aprovechamiento y en la transformación:1 Original(es) (Plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: Este hace parte del plan de manejo forestal"
                            }
                        ]
                    },
                    {
                        "titulo":"Para los aprovechamientos forestales persistentes de bosque natural ubicados en terrenos de dominio público o privado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Plan de manejo y aprovechamiento forestal:1 Original(es) (Plan de Manejo )",
                                "anotaciones":"Anotaciones Adicionales: El plan de manejo aplica solo para aprovechamientos persistentes y cuando la autoridad lo requiera por las condiciones y características del área a intervenir"
                            },
                            {
                                "type":"documento",
                                "titulo":"Inventario estadístico para todas las especies a partir de diez centímetros (10 cm) de diámetro a la altura del pecho (DAP):1 Original(es) (plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: con una intensidad de muestreo de forma tal que el error no sea superior al quince por ciento (15%) con una probabilidad del noventa y cinco por ciento (95%). - Esto para aprovechamientos forestales persistentes de bosque natural, es necesario tener presente lo establecido en el articulo 10 del decreto 1791 de 1996. Es de aclarar que este va incluido en el plan de manejo"
                            }
                        ]
                    },
                    {
                        "titulo":"Para los aprovechamientos iguales o superiores a veinte (20) hectáreas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Inventario del ciento por ciento (100%) de las especies que pretende aprovechar:1 Original(es) (Plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: a partir de un diámetro a la altura del pecho (DAP) de diez centímetros (10cm) sobre la primera unidad de corta anual y así sucesivamente para cada unidad hasta la culminación del aprovechamiento. - Esto para aprovechamientos forestales persistentes de bosque natural, es necesario tener presente lo establecido en el articulo 10 del decreto 1791 de 1996. Es de aclarar que este va incluido en el plan de manejo"
                            }
                        ]
                    },
                    {
                        "titulo":"Para los aprovechamientos menores de veinte (20) hectáreas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Inventario al ciento por ciento (100%) de las especies que se propone aprovechar, a partir de un DAP de diez centímetros (10cm) para el área solicitada:1 Original(es) (plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: Es necesario tener en cuenta lo establecido en el articulo 10 del decreto 1791 de 1996. Aplica para aprovechamientos persistentes. Este inventario hace parte del plan de manejo"
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR.",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Conumicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"El usuario debe estar pendiente para notificarle el auto de inicio"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Verificar las condiciones ambientales del predio y la veracidad de la información suministrada por el solicitante."
                    },
                    {
                        "type":"condicion",
                        "titulo":"El usuario debe estar presente el día que se efectué la visita o en su defecto delegar a alguien para que realice el acompañamiento a esta y pueda suministrar la información requerida"
                    }
                ]
            }
        ],
        "organizacion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Aprovechamiento Forestal Doméstico Bosque Natural",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=525&A=15981"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica."
                    },
                    {
                        "type":"documento",
                        "titulo":"Mapa del área a escala según la extensión del predio: 1 Original(es) (Mapa del área )",
                        "anotaciones":"Anotaciones Adicionales: no aplica para aprovechamientos forestales domésticos. - Este mapa se debe entregar siempre y cuando sea exigido por la entidad y depende del caso"
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado )",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Contrato de arrendamiento o prueba idónea de la tenencia del predio: 1 Original(es) (documento )",
                                "anotaciones":"Anotaciones Adicionales: para predios de propiedad privada. - El Contrato de arrendamiento y las autorizaciones aplica para plantaciones protectoras solamente; en caso de Autorización de aprovechamiento en bosque natural solo se otorga al propietario del predio"
                            },
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario del predio:1 Original(es) (Autorización )",
                                "anotaciones":"Anotaciones Adicionales: Aplica solo para plantaciones protectoras"
                            }
                        ]
                    },
                    {
                        "titulo":"Para aprovechamiento forestal único de bosques naturales ubicados en terreno de dominio público",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Plan de aprovechamiento forestal:1 Original(es) (Plan de aprovechamiento forestal )",
                                "anotaciones":"Anotaciones Adicionales: incluyendo la destinación de los productos forestales y las medidas de compensación. - Es necesario tener presente lo establecido en el capitulo IV del decreto 1791 de 1996"
                            },
                            {
                                "type":"documento",
                                "titulo":"Estudio técnico que demuestre una mejor aptitud de uso del suelo diferente al forestal:1 Original(es) (Plan de aprovechamiento forestal )",
                                "anotaciones":"Anotaciones Adicionales: Debe estar incluido o hacer parte del plan de aprovechamiento forestal"
                            }
                        ]
                    },
                    {
                        "titulo":"Para aprovechamientos forestales persistentes ubicados en terrenos de dominio público",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que acredite la capacidad para garantizar el manejo silvicultural, la investigación y la eficiencia en el aprovechamiento y en la transformación:1 Original(es) (Plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: Este hace parte del plan de manejo forestal"
                            }
                        ]
                    },
                    {
                        "titulo":"Para los aprovechamientos forestales persistentes de bosque natural ubicados en terrenos de dominio público o privado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Plan de manejo y aprovechamiento forestal:1 Original(es) (Plan de Manejo )",
                                "anotaciones":"Anotaciones Adicionales: El plan de manejo aplica solo para aprovechamientos persistentes y cuando la autoridad lo requiera por las condiciones y características del área a intervenir"
                            },
                            {
                                "type":"documento",
                                "titulo":"Inventario estadístico para todas las especies a partir de diez centímetros (10 cm) de diámetro a la altura del pecho (DAP):1 Original(es) (plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: con una intensidad de muestreo de forma tal que el error no sea superior al quince por ciento (15%) con una probabilidad del noventa y cinco por ciento (95%). - Esto para aprovechamientos forestales persistentes de bosque natural, es necesario tener presente lo establecido en el articulo 10 del decreto 1791 de 1996. Es de aclarar que este va incluido en el plan de manejo"
                            }
                        ]
                    },
                    {
                        "titulo":"Para los aprovechamientos iguales o superiores a veinte (20) hectáreas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Inventario del ciento por ciento (100%) de las especies que pretende aprovechar:1 Original(es) (Plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: a partir de un diámetro a la altura del pecho (DAP) de diez centímetros (10cm) sobre la primera unidad de corta anual y así sucesivamente para cada unidad hasta la culminación del aprovechamiento. - Esto para aprovechamientos forestales persistentes de bosque natural, es necesario tener presente lo establecido en el articulo 10 del decreto 1791 de 1996. Es de aclarar que este va incluido en el plan de manejo"
                            }
                        ]
                    },
                    {
                        "titulo":"Para los aprovechamientos menores de veinte (20) hectáreas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Inventario al ciento por ciento (100%) de las especies que se propone aprovechar, a partir de un DAP de diez centímetros (10cm) para el área solicitada:1 Original(es) (plan de manejo )",
                                "anotaciones":"Anotaciones Adicionales: Es necesario tener en cuenta lo establecido en el articulo 10 del decreto 1791 de 1996. Aplica para aprovechamientos persistentes. Este inventario hace parte del plan de manejo"
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR.",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Conumicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"El usuario debe estar pendiente para notificarle el auto de inicio"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Verificar las condiciones ambientales del predio y la veracidad de la información suministrada por el solicitante."
                    },
                    {
                        "type":"condicion",
                        "titulo":"El usuario debe estar presente el día que se efectué la visita o en su defecto delegar a alguien para que realice el acompañamiento a esta y pueda suministrar la información requerida"
                    }
                ]
            }
        ]
    },
    "T19799":{
        "titulo":"Permiso de prospección y exploración de aguas subterráneas ",
        "descripcion":"Obtener el derecho de explorar terrenos en busca de aguas subterráneas con miras a su posterior aprovechamiento.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=19799",
        "resultado":"Permiso de prospección y exploración de aguas subterráneas., que se obtiene en 60 Día(s) - hábil(es)",
        "ciudadano":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Prospección y Exploración de Aguas Subterráneas",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=521&A=15977"
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano del Instituto Geográfico Agustín Codazzi (IGAC): 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: A escala 1: 10.000 señalando ubicación del predio y pozo."
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento técnico : 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Que contenga como mínimo: a. Ubicación y extensión del predio o predios a explorar, indicando si son propios, ajenos o baldíos; b. Nombre y número de inscripción de la empresa perforadora, y relación y especificaciones del equipo que va a usar en las perforaciones; c. Sistema de perforación a emplear y plan de trabajo; d. Características hidrogeológicas de la zona, si fueren conocidas; e. Relación de los otros aprovechamientos de aguas subterráneas existentes dentro del área; f. Superficie para la cual se solicita el permiso y término del mismo; g) Los demás datos que la autoridad ambiental considere convenientes."
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Prueba idónea de la posesión o tenencia del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Conumicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Presentación personal o Autorización para notificarse"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificará la información suministrada por la firma perforadora y el cumplimiento de lo establecido en el Artículo 150 del Decreto 1541 de 1978."
                    }
                ]
            }
        ],
        "extranjero":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Prospección y Exploración de Aguas Subterráneas",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=521&A=15977"
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano del Instituto Geográfico Agustín Codazzi (IGAC): 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: A escala 1: 10.000 señalando ubicación del predio y pozo."
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento técnico : 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Que contenga como mínimo: a. Ubicación y extensión del predio o predios a explorar, indicando si son propios, ajenos o baldíos; b. Nombre y número de inscripción de la empresa perforadora, y relación y especificaciones del equipo que va a usar en las perforaciones; c. Sistema de perforación a emplear y plan de trabajo; d. Características hidrogeológicas de la zona, si fueren conocidas; e. Relación de los otros aprovechamientos de aguas subterráneas existentes dentro del área; f. Superficie para la cual se solicita el permiso y término del mismo; g) Los demás datos que la autoridad ambiental considere convenientes."
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Prueba idónea de la posesión o tenencia del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Conumicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Presentación personal o Autorización para notificarse"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificará la información suministrada por la firma perforadora y el cumplimiento de lo establecido en el Artículo 150 del Decreto 1541 de 1978."
                    }
                ]
            }
        ],
        "institucion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Prospección y Exploración de Aguas Subterráneas",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=521&A=15977"
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano del Instituto Geográfico Agustín Codazzi (IGAC): 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: A escala 1: 10.000 señalando ubicación del predio y pozo."
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento técnico : 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Que contenga como mínimo: a. Ubicación y extensión del predio o predios a explorar, indicando si son propios, ajenos o baldíos; b. Nombre y número de inscripción de la empresa perforadora, y relación y especificaciones del equipo que va a usar en las perforaciones; c. Sistema de perforación a emplear y plan de trabajo; d. Características hidrogeológicas de la zona, si fueren conocidas; e. Relación de los otros aprovechamientos de aguas subterráneas existentes dentro del área; f. Superficie para la cual se solicita el permiso y término del mismo; g) Los demás datos que la autoridad ambiental considere convenientes."
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Prueba idónea de la posesión o tenencia del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"en caso de ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Conumicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Presentación personal o Autorización para notificarse"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificará la información suministrada por la firma perforadora y el cumplimiento de lo establecido en el Artículo 150 del Decreto 1541 de 1978."
                    }
                ]
            }
        ],
        "organizacion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Prospección y Exploración de Aguas Subterráneas",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=521&A=15977"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica"
                    },
                    {
                        "type":"documento",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica.",
                        "anotaciones":"Plano del Instituto Geográfico Agustín Codazzi (IGAC): 1 Original(es)"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento técnico : 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Que contenga como mínimo: a. Ubicación y extensión del predio o predios a explorar, indicando si son propios, ajenos o baldíos; b. Nombre y número de inscripción de la empresa perforadora, y relación y especificaciones del equipo que va a usar en las perforaciones; c. Sistema de perforación a emplear y plan de trabajo; d. Características hidrogeológicas de la zona, si fueren conocidas; e. Relación de los otros aprovechamientos de aguas subterráneas existentes dentro del área; f. Superficie para la cual se solicita el permiso y término del mismo; g) Los demás datos que la autoridad ambiental considere convenientes."
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Prueba idónea de la posesión o tenencia del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"en caso de ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser junta de accion comunal u otro organismo sin animo de lucro y/o utilidad comun",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que acredite la existencia y el reconocimiento de la personería jurídica:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Conumicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Presentación personal o Autorización para notificarse"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificará la información suministrada por la firma perforadora y el cumplimiento de lo establecido en el Artículo 150 del Decreto 1541 de 1978."
                    }
                ]
            }
        ]
    },
    "T19818":{
        "titulo":"Permiso de emisión atmosférica para fuentes fijas",
        "descripcion":"Autorización para realizar emisiones al aire dentro de los límites permisibles establecidos en las normas ambientales.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=19818",
        "resultado":"Permiso de emisión atmosférica fuentes fijas., que se obtiene en 60 Día(s) - hábil(es)",
        "ciudadano":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Permiso de Emisiones Atmosféricas Fuentes Fijas",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=520&A=15976"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificado de uso de suelo: 1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento que contenga la información meteorológica básica del área afectada por las emisiones: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: teniendo en cuenta las disposiciones establecidas en el Artículo 75 del Decreto 2811 de 1974."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento que contenga la descripción de las obras, procesos y actividades de producción, mantenimiento, tratamiento, almacenamiento o disposición que generen las emisiones: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: y los planos que dichas descripciones requieran."
                    },
                    {
                        "type":"documento",
                        "titulo":"Flujograma con indicación y caracterización de los puntos de emisión al aire; ubicación y cantidad de los puntos de descarga al aire; descripción y planos de los ductos, chimeneas o fuentes dispersas: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: e indicación de sus materiales, medidas y características técnicas."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento con la información técnica sobre producción prevista o actual, proyectos de expansión, proyecciones de producción y cambios de tecnología: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: a 5 años."
                    },
                    {
                        "type":"documento",
                        "titulo":"Evaluación de las emisiones, de sus procesos de combustión o producción: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Y contar con información sobre consumo de materias primas, combustibles y otros materiales utilizados."
                    },
                    {
                        "type":"documento",
                        "titulo":"Planos del diseño de los sistemas de control de emisiones atmosféricas existentes o proyectados: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Su ubicación e informe de ingeniería."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plancha Instituto Geográfico Agustín Codazzi (IGAC) de ubicación del proyecto: 1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Prueba idónea de la posesión o tenencia del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para los casos de refinerias de petroleos, fabricas de cementos, plantas quimicas y petroquimicas, siderurgicas, quemas abiertas controladas en actividades agroindustriales y plantas termoelectricas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio técnico de dispersión:1 Original(es) (Estudio técnico de dispersión)",
                                "anotaciones":""
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR.",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Conumicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificará que se cumplan con los límites máximos de emisiones atmosféricas de acuerdo a lo establecido en la Resolución 909 de 2008."
                    }
                ]
            }
        ],
        "extranjero":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Permiso de Emisiones Atmosféricas Fuentes Fijas",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=520&A=15976"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificado de uso de suelo: 1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento que contenga la información meteorológica básica del área afectada por las emisiones: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: teniendo en cuenta las disposiciones establecidas en el Artículo 75 del Decreto 2811 de 1974."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento que contenga la descripción de las obras, procesos y actividades de producción, mantenimiento, tratamiento, almacenamiento o disposición que generen las emisiones: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: y los planos que dichas descripciones requieran."
                    },
                    {
                        "type":"documento",
                        "titulo":"Flujograma con indicación y caracterización de los puntos de emisión al aire; ubicación y cantidad de los puntos de descarga al aire; descripción y planos de los ductos, chimeneas o fuentes dispersas: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: e indicación de sus materiales, medidas y características técnicas."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento con la información técnica sobre producción prevista o actual, proyectos de expansión, proyecciones de producción y cambios de tecnología: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: a 5 años."
                    },
                    {
                        "type":"documento",
                        "titulo":"Evaluación de las emisiones, de sus procesos de combustión o producción: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Y contar con información sobre consumo de materias primas, combustibles y otros materiales utilizados."
                    },
                    {
                        "type":"documento",
                        "titulo":"Planos del diseño de los sistemas de control de emisiones atmosféricas existentes o proyectados: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Su ubicación e informe de ingeniería."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plancha Instituto Geográfico Agustín Codazzi (IGAC) de ubicación del proyecto: 1 Original(es)",
                        "anotaciones":""
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Prueba idónea de la posesión o tenencia del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para los casos de refinerias de petroleos, fabricas de cementos, plantas quimicas y petroquimicas, siderurgicas, quemas abiertas controladas en actividades agroindustriales y plantas termoelectricas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio técnico de dispersión:1 Original(es) (Estudio técnico de dispersión)",
                                "anotaciones":""
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR.",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Conumicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificará que se cumplan con los límites máximos de emisiones atmosféricas de acuerdo a lo establecido en la Resolución 909 de 2008."
                    }
                ]
            }
        ],
        "institucion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Permiso de Emisiones Atmosféricas Fuentes Fijas",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=520&A=15976"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificado de uso de suelo: 1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento que contenga la información meteorológica básica del área afectada por las emisiones: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: teniendo en cuenta las disposiciones establecidas en el Artículo 75 del Decreto 2811 de 1974."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento que contenga la descripción de las obras, procesos y actividades de producción, mantenimiento, tratamiento, almacenamiento o disposición que generen las emisiones: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: y los planos que dichas descripciones requieran."
                    },
                    {
                        "type":"documento",
                        "titulo":"Flujograma con indicación y caracterización de los puntos de emisión al aire; ubicación y cantidad de los puntos de descarga al aire; descripción y planos de los ductos, chimeneas o fuentes dispersas: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: e indicación de sus materiales, medidas y características técnicas."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento con la información técnica sobre producción prevista o actual, proyectos de expansión, proyecciones de producción y cambios de tecnología: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: a 5 años."
                    },
                    {
                        "type":"documento",
                        "titulo":"Evaluación de las emisiones, de sus procesos de combustión o producción: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Y contar con información sobre consumo de materias primas, combustibles y otros materiales utilizados."
                    },
                    {
                        "type":"documento",
                        "titulo":"Planos del diseño de los sistemas de control de emisiones atmosféricas existentes o proyectados: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Su ubicación e informe de ingeniería."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plancha Instituto Geográfico Agustín Codazzi (IGAC) de ubicación del proyecto: 1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Prueba idónea de la posesión o tenencia del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para los casos de refinerias de petroleos, fabricas de cementos, plantas quimicas y petroquimicas, siderurgicas, quemas abiertas controladas en actividades agroindustriales y plantas termoelectricas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio técnico de dispersión:1 Original(es) (Estudio técnico de dispersión)",
                                "anotaciones":""
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR.",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Conumicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificará que se cumplan con los límites máximos de emisiones atmosféricas de acuerdo a lo establecido en la Resolución 909 de 2008."
                    }
                ]
            }
        ],
        "organizacion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Permiso de Emisiones Atmosféricas Fuentes Fijas",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=520&A=15976"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificado de uso de suelo: 1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento que contenga la información meteorológica básica del área afectada por las emisiones: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: teniendo en cuenta las disposiciones establecidas en el Artículo 75 del Decreto 2811 de 1974."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento que contenga la descripción de las obras, procesos y actividades de producción, mantenimiento, tratamiento, almacenamiento o disposición que generen las emisiones: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: y los planos que dichas descripciones requieran."
                    },
                    {
                        "type":"documento",
                        "titulo":"Flujograma con indicación y caracterización de los puntos de emisión al aire; ubicación y cantidad de los puntos de descarga al aire; descripción y planos de los ductos, chimeneas o fuentes dispersas: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: e indicación de sus materiales, medidas y características técnicas."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento con la información técnica sobre producción prevista o actual, proyectos de expansión, proyecciones de producción y cambios de tecnología: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: a 5 años."
                    },
                    {
                        "type":"documento",
                        "titulo":"Evaluación de las emisiones, de sus procesos de combustión o producción: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Y contar con información sobre consumo de materias primas, combustibles y otros materiales utilizados."
                    },
                    {
                        "type":"documento",
                        "titulo":"Planos del diseño de los sistemas de control de emisiones atmosféricas existentes o proyectados: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Su ubicación e informe de ingeniería."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plancha Instituto Geográfico Agustín Codazzi (IGAC) de ubicación del proyecto: 1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Prueba idónea de la posesión o tenencia del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser junta de accion comunal u otro organismo sin animo de lucro y/o utilidad comun",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que acredite la existencia y el reconocimiento de la personería jurídica:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para los casos de refinerias de petroleos, fabricas de cementos, plantas quimicas y petroquimicas, siderurgicas, quemas abiertas controladas en actividades agroindustriales y plantas termoelectricas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio técnico de dispersión:1 Original(es) (Estudio técnico de dispersión)",
                                "anotaciones":""
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR.",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true",
                        "web":"true"
                    }
                ]
            },
            {
                "titulo":"Conumicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificará que se cumplan con los límites máximos de emisiones atmosféricas de acuerdo a lo establecido en la Resolución 909 de 2008."
                    }
                ]
            }
        ]
    },
    "T19798":{
        "titulo":"plan de saneamiento y manejo de vertimientos",
        "descripcion":"Obtener la aprobación del conjunto de programas, proyectos y actividades necesarias para avanzar en el saneamiento y tratamiento de los vertimientos, incluyendo la recolección, transporte, tratamiento y disposición final de las aguas residuales descargadas al sistema público de alcantarillado, tanto sanitario como pluvial, los cuales deberán estar articulados con los objetivos y las metas de calidad y uso que se definan para la corriente, tramo o cuerpo de agua.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=19798",
        "resultado":"Aprobación del plan de saneamiento y manejo de vertimientos, que se obtiene en 60 Día(s) - hábil(es)",
        "institucion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud por escrito: 1 Original(es) (Solicitud del Plan de Saneamiento y manejo de Vertimientos)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Diagnóstico del sistema de alcantarillado: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Referido a la identificación de las necesidades de obras y acciones con su orden de realización que permitan definir los programas, proyectos y actividades con sus respectivas metas físicas. El diagnóstico incluirá una descripción de la infraestructura existente en cuanto a cobertura del servicio de alcantarillado (redes locales), colectores principales, número de vertimientos puntuales, corrientes, tramos o cuerpos de agua receptores en área urbana y rural, interceptores o emisarios finales construidos, ubicación existente o prevista de sistemas de tratamiento de aguas residuales. El diagnóstico deberá acompañarse de un esquema, o mapa en el que se represente."
                    },
                    {
                        "type":"documento",
                        "titulo":"Identificación de la totalidad de los vertimientos puntuales de aguas residuales: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Realizados en las áreas urbanas y rural por las personas prestadoras del servicio público domiciliario de alcantarillado y sus actividades complementarias y de las respectivas corrientes, tramos o cuerpos de agua receptores"
                    },
                    {
                        "type":"documento",
                        "titulo":"Caracterización de las descargas de aguas residuales y caracterización de las corrientes, tramos o cuerpos de agua receptores, antes y después de cada vertimiento identificado: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Documentación del estado de la corriente, tramo o cuerpo de agua receptor en términos de calidad, a partir de la información disponible y de la caracterización que de cada corriente, tramo o cuerpo de agua receptor realice la persona prestadora del servicio público de alcantarillado y de sus actividades complementarias, al menos en los parámetros básicos que se señalan en el artículo 6° de la Resolución 1433 de 2004."
                    },
                    {
                        "type":"documento",
                        "titulo":"Proyecciones de la carga contaminante generada, recolectada, transportada y tratada, por vertimiento y por corriente, tramo o cuerpo de agua receptor: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: a corto plazo (contado desde la presentación del Plan de saneamiento y manejo de vertimientos - PSMV hasta el 2° año), mediano plazo (contado desde el 2° hasta el 5° año) y largo plazo (contado desde el 5° hasta el 10° año). Se proyectará al menos la carga contaminante de las sustancias o parámetros objeto de cobro de tasa retributiva."
                    },
                    {
                        "type":"documento",
                        "titulo":"Objetivos de reducción del número de vertimientos puntuales: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: para el corto plazo (contado desde la presentación del Plan de saneamiento y manejo de vertimientos - PSMV hasta el 2° año), mediano plazo (contado desde el 2° hasta el 5° año) y largo plazo (contado desde el 5° hasta el 10° año), y cumplimiento de sus metas de calidad. que se propondrán como metas individuales de reducción de carga contaminante"
                    },
                    {
                        "type":"documento",
                        "titulo":"Descripción detallada de los programas, proyectos y actividades: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Con sus respectivos cronogramas e inversiones en las fases de corto, mediano y largo plazo, para los alcantarillados sanitario y pluvial y cronograma de cumplimiento de la norma de vertimientos. Cuando se cuente con sistemas de tratamiento de aguas residuales, se deberá indicar y programar las acciones principales para cubrir incrementos de cargas contaminantes causados por crecimientos de la población, garantizar la eficiencia del sistema de tratamiento y la calidad definida para el efluente del sistema de tratamiento"
                    },
                    {
                        "type":"documento",
                        "titulo":"Formulación de indicadores de seguimiento: 1 Original(es) (Formulación de indicadores de seguimiento)",
                        "anotaciones":"Anotaciones Adicionales: que reflejen el avance físico de las obras programadas y el nivel de logro de los objetivos y metas de calidad propuestos, en función de los parámetros establecidos de acuerdo con la normatividad ambiental vigente"
                    },
                    {
                        "type":"documento",
                        "titulo":"Acta de posesión del representante legal de la entidad territorial: 1 Fotocopia(s)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Cédula de ciudadanía : 1 Fotocopia(s) (Cédula de ciudadanía)",
                        "anotaciones":"Anotaciones Adicionales: Del representante legal"
                    }
                ],
                "casos":[
                    {
                        "titulo":"En los casos en que no se cuente con sistema o sistemas de tratamiento de aguas residuales",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que indique las fechas previstas de construcción e iniciación de operación del sistema de tratamiento:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR.",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Allegar la documentación adicional en caso de requerirse"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Conumicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Presentación personal o autorización para notificarse"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"No debe presentar ningún soporte ya que la institución verificará que usted la cumpla"
                    }
                ]
            }
        ],
        "organizacion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud por escrito: 1 Original(es) (Solicitud del Plan de Saneamiento y manejo de Vertimientos)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Diagnóstico del sistema de alcantarillado: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Referido a la identificación de las necesidades de obras y acciones con su orden de realización que permitan definir los programas, proyectos y actividades con sus respectivas metas físicas. El diagnóstico incluirá una descripción de la infraestructura existente en cuanto a cobertura del servicio de alcantarillado (redes locales), colectores principales, número de vertimientos puntuales, corrientes, tramos o cuerpos de agua receptores en área urbana y rural, interceptores o emisarios finales construidos, ubicación existente o prevista de sistemas de tratamiento de aguas residuales. El diagnóstico deberá acompañarse de un esquema, o mapa en el que se represente."
                    },
                    {
                        "type":"documento",
                        "titulo":"Identificación de la totalidad de los vertimientos puntuales de aguas residuales: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Realizados en las áreas urbanas y rural por las personas prestadoras del servicio público domiciliario de alcantarillado y sus actividades complementarias y de las respectivas corrientes, tramos o cuerpos de agua receptores"
                    },
                    {
                        "type":"documento",
                        "titulo":"Caracterización de las descargas de aguas residuales y caracterización de las corrientes, tramos o cuerpos de agua receptores, antes y después de cada vertimiento identificado: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Documentación del estado de la corriente, tramo o cuerpo de agua receptor en términos de calidad, a partir de la información disponible y de la caracterización que de cada corriente, tramo o cuerpo de agua receptor realice la persona prestadora del servicio público de alcantarillado y de sus actividades complementarias, al menos en los parámetros básicos que se señalan en el artículo 6° de la Resolución 1433 de 2004."
                    },
                    {
                        "type":"documento",
                        "titulo":"Proyecciones de la carga contaminante generada, recolectada, transportada y tratada, por vertimiento y por corriente, tramo o cuerpo de agua receptor: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: a corto plazo (contado desde la presentación del Plan de saneamiento y manejo de vertimientos - PSMV hasta el 2° año), mediano plazo (contado desde el 2° hasta el 5° año) y largo plazo (contado desde el 5° hasta el 10° año). Se proyectará al menos la carga contaminante de las sustancias o parámetros objeto de cobro de tasa retributiva."
                    },
                    {
                        "type":"documento",
                        "titulo":"Objetivos de reducción del número de vertimientos puntuales: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: para el corto plazo (contado desde la presentación del Plan de saneamiento y manejo de vertimientos - PSMV hasta el 2° año), mediano plazo (contado desde el 2° hasta el 5° año) y largo plazo (contado desde el 5° hasta el 10° año), y cumplimiento de sus metas de calidad. que se propondrán como metas individuales de reducción de carga contaminante"
                    },
                    {
                        "type":"documento",
                        "titulo":"Descripción detallada de los programas, proyectos y actividades: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Con sus respectivos cronogramas e inversiones en las fases de corto, mediano y largo plazo, para los alcantarillados sanitario y pluvial y cronograma de cumplimiento de la norma de vertimientos. Cuando se cuente con sistemas de tratamiento de aguas residuales, se deberá indicar y programar las acciones principales para cubrir incrementos de cargas contaminantes causados por crecimientos de la población, garantizar la eficiencia del sistema de tratamiento y la calidad definida para el efluente del sistema de tratamiento"
                    },
                    {
                        "type":"documento",
                        "titulo":"Formulación de indicadores de seguimiento: 1 Original(es) (Formulación de indicadores de seguimiento)",
                        "anotaciones":"Anotaciones Adicionales: que reflejen el avance físico de las obras programadas y el nivel de logro de los objetivos y metas de calidad propuestos, en función de los parámetros establecidos de acuerdo con la normatividad ambiental vigente"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica"
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"En los casos en que no se cuente con sistema o sistemas de tratamiento de aguas residuales",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que indique las fechas previstas de construcción e iniciación de operación del sistema de tratamiento:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR.",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificará la información aportada por el solicitante"
                    }
                ]
            }
        ]
    },
    "T19800":{
        "titulo":"Licencia ambiental",
        "descripcion":"Autorización para la ejecución de los proyectos, obras o actividades que puedan producir deterioro grave a los recursos naturales renovables, o al medio ambiente, o introducir modificaciones considerables o notorias al paisaje. Los proyectos, obras o actividades son las descritas en los Artículos 8 y 9 del Decreto 2041 de 2014.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=19800",
        "resultado":"Licencia ambiental, que se obtiene en 100 Día(s) - hábil(es)",
        "ciudadano":[
            {
                "titulo":"Solicitar pronunciamiento acerca de la exigibilidad del diagnóstico ambiental de alternativas, para proyectos, obras o actividades relacionadas en el artículo 18 del Decreto 2140 de 2014",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud por escrito: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: El oficio debe contener como mínimo la siguiente información respecto al proyecto, obra o actividad a desarrollar: objetivo, alcance, descripción y localización mediante coordenadas."
                    },
                    {
                        "type":"documento",
                        "titulo":"Planos del proyecto, obra o actividad a desarrollar: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Adjuntos a la solicitud."
                    }
                ]
            },
            {
                "titulo":"Radicar estudio de alternativas con base en los términos de referencia, de acuerdo con las condiciones específicas del proyecto, obra o actividad que pretende desarrollar, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Estudio de Alternativas: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Indicando: 1. Objetivo, alcance y descripción del proyecto, obra o actividad. 2. La descripción general de las alternativas de localización del proyecto, obra o actividad caracterizando ambientalmente el área de interés e identificando las áreas de manejo especial, así como también las características del entorno social y económico para cada alternativa presentada. 3. La información sobre la compatibilidad del proyecto con los usos del suelo establecidos en el Plan de Ordenamiento Territorial o su equivalente. Lo anterior, sin perjuicio de lo dispuesto en el Decreto 2201 de 2003, o la norma que lo modifique o sustituya. 4. La identificación y análisis comparativo de los potenciales riesgos y efectos sobre el medio ambiente; así como el uso y/o aprovechamiento de los recursos naturales requeridos para las diferentes alternativas estudiadas. 5. Identificación de las comunidades y de los mecanismos utilizados para informarles sobre el proyecto, obra o actividad. 6. Un análisis costo-beneficio ambiental de las alternativas. 7. Selección y justificación de la mejor alternativa. Los estudios ambientales se elaborarán con base en los términos de referencia que sean expedidos por el Ministerio de Ambiente y Desarrollo Sostenible. El solicitante deberá adaptarlos a las particularidades del proyecto, obra o actividad (http://www.anla.gov.co/contenido/contenido.aspx?catID=144&conID=7915)."
                    },
                    {
                        "type":"condicion",
                        "titulo":"La Corporación evalúa la documentación allegada por el usuario donde se determina si el proyecto requiere un diagnóstico o una licencia ambiental para lo cual expide los términos de referencia según el caso."
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite, en los casos en que no se requiera pronunciamiento sobre la exigibilidad del Diagnóstico Ambiental de Alternativas -DAA o una vez surtido el procedimiento anterior",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único de Solicitud o Modificación de Licencia Ambiental",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=516&A=37488"
                    },
                    {
                        "type":"documento",
                        "titulo":"Estudio de impacto ambiental: 1 Copia(s) (Magnético del Estudio de Impacto Ambiental con sus anexos), 1 Original(es) (Estudio de impacto ambiental)",
                        "anotaciones":"Anotaciones Adicionales: Los estudios ambientales se elaborarán con base en los términos de referencia que sean expedidos por el Ministerio de Ambiente y Desarrollo Sostenible. El solicitante deberá adaptarlos a las particularidades del proyecto, obra o actividad (http://www.anla.gov.co/contenido/contenido.aspx?catID=144&conID=7915)."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano que soporten el Estudio de Impacto Ambiental: 1 Original(es) (En físico), 1 Copia(s) (En magnético)",
                        "anotaciones":"Anotaciones Adicionales: De conformidad con lo dispuesto en la Resolución 1415 de 2012, que modifica y actualiza el Modelo de Almacenamiento Geográfico (Geodatabase) o la que la sustituya, modifique o derogue."
                    },
                    {
                        "type":"documento",
                        "titulo":"Costo estimado de inversión y operación del proyecto: 1 Original(es) (Descripción explicativa), 1 Copia(s) (En medio magnético de la Descripción )",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificado donde se manifiesta la presencia o no de comunidades indígenas y/o negras: 1 Copia(s) (En magnético del Certificado), 1 Original(es) (Certificado )",
                        "anotaciones":"Anotaciones Adicionales: Certificado expedido por el Ministerio del Interior."
                    },
                    {
                        "type":"documento",
                        "titulo":"Cédula de ciudadanía : 1 Copia(s) (En magnético), 1 Fotocopia(s)",
                        "anotaciones":""
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actúe por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Para tal caso es necesario allegar Poder debidamente otorgado)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de consorcio o unión temporal",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento privado que acredite la constitución:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para programas de arqueología preventiva",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Radicación del programa de arqueología preventiva:1 Copia(s) (Programa de arqueología preventiva), 1 Copia(s) (En magnético)",
                                "anotaciones":"Anotaciones Adicionales: Ante el Instituto Colombiano de Arqueología e Historia (ICANH)."
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos de explotación minera de carbón",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio sobre las condiciones del modo de transporte desde el sitio de explotación del carbón hasta el puerto de embarque del mismo:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos de hidrocarburos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Contrato de hidrocarburos respectivo:1 Original(es) (Contrato de hidrocarburos respectivo)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos hidroeléctricos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Registro hidroeléctrico :1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos mineros",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Título minero y/o el contrato de concesión minera:1 Copia(s) (En magnético ), 1 Original(es) (Título Minero)",
                                "anotaciones":"Anotaciones Adicionales: Debidamente otorgado e inscrito en el Registro Minero Nacional."
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación de la licencia ambiental",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR.",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"La Corporación revisa que el documento cumpla con los requisitos exigidos del Articulo 24 del Decreto 2820, adicional a ello presentar el estudio de impacto ambiental de conformidad a los términos de referencia expedidos"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Registrarse en la Ventanilla Integral de trámites en Línea – VITAL",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Seguir las instrucciones: http://vital.anla.gov.co/SILPA_UT_PRE/Datospersonales.aspx?reg=registro"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Notificarse del auto de inicio",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"La Corporación envía comunicación al usuario y a las alcaldías del inicio del tramite del licenciamiento ambiental"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se debe notificar del Auto de Inicio en forma personal"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita técnica, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Donde se verificarán los requisitos aportados por el solicitante y se evaluará el estudio ambiental."
                    }
                ]
            },
            {
                "titulo":"Asistir a la reunión convocada por la autoridad ambiental cuando se considere pertinente con el fin de atender requerimientos, por una única vez, de información adicional",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Asistir por lo menos el solicitante, o representante legal en caso de ser persona jurídica, o su apoderado debidamente constituido."
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            }
        ],
        "extranjero":[
            {
                "titulo":"Solicitar pronunciamiento acerca de la exigibilidad del diagnóstico ambiental de alternativas, para proyectos, obras o actividades relacionadas en el artículo 18 del Decreto 2140 de 2014",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud por escrito: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: El oficio debe contener como mínimo la siguiente información respecto al proyecto, obra o actividad a desarrollar: objetivo, alcance, descripción y localización mediante coordenadas."
                    },
                    {
                        "type":"documento",
                        "titulo":"Planos del proyecto, obra o actividad a desarrollar: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Adjuntos a la solicitud."
                    }
                ]
            },
            {
                "titulo":"Radicar estudio de alternativas con base en los términos de referencia, de acuerdo con las condiciones específicas del proyecto, obra o actividad que pretende desarrollar, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Estudio de Alternativas: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Indicando: 1. Objetivo, alcance y descripción del proyecto, obra o actividad. 2. La descripción general de las alternativas de localización del proyecto, obra o actividad caracterizando ambientalmente el área de interés e identificando las áreas de manejo especial, así como también las características del entorno social y económico para cada alternativa presentada. 3. La información sobre la compatibilidad del proyecto con los usos del suelo establecidos en el Plan de Ordenamiento Territorial o su equivalente. Lo anterior, sin perjuicio de lo dispuesto en el Decreto 2201 de 2003, o la norma que lo modifique o sustituya. 4. La identificación y análisis comparativo de los potenciales riesgos y efectos sobre el medio ambiente; así como el uso y/o aprovechamiento de los recursos naturales requeridos para las diferentes alternativas estudiadas. 5. Identificación de las comunidades y de los mecanismos utilizados para informarles sobre el proyecto, obra o actividad. 6. Un análisis costo-beneficio ambiental de las alternativas. 7. Selección y justificación de la mejor alternativa. Los estudios ambientales se elaborarán con base en los términos de referencia que sean expedidos por el Ministerio de Ambiente y Desarrollo Sostenible. El solicitante deberá adaptarlos a las particularidades del proyecto, obra o actividad (http://www.anla.gov.co/contenido/contenido.aspx?catID=144&conID=7915)."
                    }
                ]
            },
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite, en los casos en que no se requiera pronunciamiento sobre la exigibilidad del Diagnóstico Ambiental de Alternativas -DAA o una vez surtido el procedimiento anterior",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único de Solicitud o Modificación de Licencia Ambiental",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=516&A=37488"
                    },
                    {
                        "type":"documento",
                        "titulo":"Estudio de impacto ambiental: 1 Copia(s) (Magnético del Estudio de Impacto Ambiental con sus anexos), 1 Original(es) (Estudio de impacto ambiental)",
                        "anotaciones":"Anotaciones Adicionales: Los estudios ambientales se elaborarán con base en los términos de referencia que sean expedidos por el Ministerio de Ambiente y Desarrollo Sostenible. El solicitante deberá adaptarlos a las particularidades del proyecto, obra o actividad (http://www.anla.gov.co/contenido/contenido.aspx?catID=144&conID=7915)."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano que soporten el Estudio de Impacto Ambiental: 1 Original(es) (En físico), 1 Copia(s) (En magnético)",
                        "anotaciones":"Anotaciones Adicionales: De conformidad con lo dispuesto en la Resolución 1415 de 2012, que modifica y actualiza el Modelo de Almacenamiento Geográfico (Geodatabase) o la que la sustituya, modifique o derogue."
                    },
                    {
                        "type":"documento",
                        "titulo":"Costo estimado de inversión y operación del proyecto: 1 Original(es) (Descripción explicativa), 1 Copia(s) (En medio magnético de la Descripción )",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificado donde se manifiesta la presencia o no de comunidades indígenas y/o negras: 1 Copia(s) (En magnético del Certificado), 1 Original(es) (Certificado )",
                        "anotaciones":"Anotaciones Adicionales: Certificado expedido por el Ministerio del Interior."
                    },
                    {
                        "type":"documento",
                        "titulo":"Cédula de extranjería: 1 Copia(s) (En magnético), 1 Fotocopia(s)",
                        "anotaciones":""
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actúe por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Para tal caso es necesario allegar Poder debidamente otorgado)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de consorcio o unión temporal",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento privado que acredite la constitución:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para programas de arqueología preventiva",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Radicación del programa de arqueología preventiva:1 Copia(s) (Programa de arqueología preventiva), 1 Copia(s) (En magnético)",
                                "anotaciones":"Anotaciones Adicionales: Ante el Instituto Colombiano de Arqueología e Historia (ICANH)."
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos de explotación minera de carbón",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio sobre las condiciones del modo de transporte desde el sitio de explotación del carbón hasta el puerto de embarque del mismo:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos de hidrocarburos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Contrato de hidrocarburos respectivo:1 Original(es) (Contrato de hidrocarburos respectivo)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos hidroeléctricos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Registro hidroeléctrico :1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos mineros",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Título minero y/o el contrato de concesión minera:1 Copia(s) (En magnético ), 1 Original(es) (Título Minero)",
                                "anotaciones":"Anotaciones Adicionales: Debidamente otorgado e inscrito en el Registro Minero Nacional."
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Registrarse en la Ventanilla Integral de trámites en Línea – VITAL",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Seguir las instrucciones: http://vital.anla.gov.co/SILPA_UT_PRE/Datospersonales.aspx?reg=registro"
                    }
                ]
            },
            {
                "titulo":"Recibir la visita técnica, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Donde se verificarán los requisitos aportados por el solicitante y se evaluará el estudio ambiental."
                    }
                ]
            },
            {
                "titulo":"Asistir a la reunión convocada por la autoridad ambiental cuando se considere pertinente con el fin de atender requerimientos, por una única vez, de información adicional",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Asistir por lo menos el solicitante, o representante legal en caso de ser persona jurídica, o su apoderado debidamente constituido."
                    }
                ]
            }
        ],
        "institucion":[
            {
                "titulo":"Solicitar pronunciamiento acerca de la exigibilidad del diagnóstico ambiental de alternativas, para proyectos, obras o actividades relacionadas en el artículo 18 del Decreto 2140 de 2014",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud por escrito: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: El oficio debe contener como mínimo la siguiente información respecto al proyecto, obra o actividad a desarrollar: objetivo, alcance, descripción y localización mediante coordenadas."
                    },
                    {
                        "type":"documento",
                        "titulo":"Planos del proyecto, obra o actividad a desarrollar: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Adjuntos a la solicitud."
                    }
                ]
            },
            {
                "titulo":"Radicar estudio de alternativas con base en los términos de referencia, de acuerdo con las condiciones específicas del proyecto, obra o actividad que pretende desarrollar, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Estudio de Alternativas: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Indicando: 1. Objetivo, alcance y descripción del proyecto, obra o actividad. 2. La descripción general de las alternativas de localización del proyecto, obra o actividad caracterizando ambientalmente el área de interés e identificando las áreas de manejo especial, así como también las características del entorno social y económico para cada alternativa presentada. 3. La información sobre la compatibilidad del proyecto con los usos del suelo establecidos en el Plan de Ordenamiento Territorial o su equivalente. Lo anterior, sin perjuicio de lo dispuesto en el Decreto 2201 de 2003, o la norma que lo modifique o sustituya. 4. La identificación y análisis comparativo de los potenciales riesgos y efectos sobre el medio ambiente; así como el uso y/o aprovechamiento de los recursos naturales requeridos para las diferentes alternativas estudiadas. 5. Identificación de las comunidades y de los mecanismos utilizados para informarles sobre el proyecto, obra o actividad. 6. Un análisis costo-beneficio ambiental de las alternativas. 7. Selección y justificación de la mejor alternativa. Los estudios ambientales se elaborarán con base en los términos de referencia que sean expedidos por el Ministerio de Ambiente y Desarrollo Sostenible. El solicitante deberá adaptarlos a las particularidades del proyecto, obra o actividad (http://www.anla.gov.co/contenido/contenido.aspx?catID=144&conID=7915)."
                    },
                    {
                        "type":"condicion",
                        "titulo":"La Corporación evalúa la documentación allegada por el usuario donde se determina si el proyecto requiere un diagnóstico o una licencia ambiental para lo cual expide los términos de referencia según el caso."
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite, en los casos en que no se requiera pronunciamiento sobre la exigibilidad del Diagnóstico Ambiental de Alternativas -DAA o una vez surtido el procedimiento anterior",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único de Solicitud o Modificación de Licencia Ambiental",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=516&A=37488"
                    },
                    {
                        "type":"documento",
                        "titulo":"Estudio de impacto ambiental: 1 Copia(s) (Magnético del Estudio de Impacto Ambiental con sus anexos), 1 Original(es) (Estudio de impacto ambiental)",
                        "anotaciones":"Anotaciones Adicionales: Los estudios ambientales se elaborarán con base en los términos de referencia que sean expedidos por el Ministerio de Ambiente y Desarrollo Sostenible. El solicitante deberá adaptarlos a las particularidades del proyecto, obra o actividad (http://www.anla.gov.co/contenido/contenido.aspx?catID=144&conID=7915)."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano que soporten el Estudio de Impacto Ambiental: 1 Original(es) (En físico), 1 Copia(s) (En magnético)",
                        "anotaciones":"Anotaciones Adicionales: De conformidad con lo dispuesto en la Resolución 1415 de 2012, que modifica y actualiza el Modelo de Almacenamiento Geográfico (Geodatabase) o la que la sustituya, modifique o derogue."
                    },
                    {
                        "type":"documento",
                        "titulo":"Costo estimado de inversión y operación del proyecto: 1 Original(es) (Descripción explicativa), 1 Copia(s) (En medio magnético de la Descripción )",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificado donde se manifiesta la presencia o no de comunidades indígenas y/o negras: 1 Copia(s) (En magnético del Certificado), 1 Original(es) (Certificado )",
                        "anotaciones":"Anotaciones Adicionales: Certificado expedido por el Ministerio del Interior."
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actúe por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Para tal caso es necesario allegar Poder debidamente otorgado)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de consorcio o unión temporal",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento privado que acredite la constitución:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para programas de arqueología preventiva",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Radicación del programa de arqueología preventiva:1 Copia(s) (Programa de arqueología preventiva), 1 Copia(s) (En magnético)",
                                "anotaciones":"Anotaciones Adicionales: Ante el Instituto Colombiano de Arqueología e Historia (ICANH)."
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos de explotación minera de carbón",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio sobre las condiciones del modo de transporte desde el sitio de explotación del carbón hasta el puerto de embarque del mismo:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos de hidrocarburos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Contrato de hidrocarburos respectivo:1 Original(es) (Contrato de hidrocarburos respectivo)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos hidroeléctricos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Registro hidroeléctrico :1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos mineros",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Título minero y/o el contrato de concesión minera:1 Copia(s) (En magnético ), 1 Original(es) (Título Minero)",
                                "anotaciones":"Anotaciones Adicionales: Debidamente otorgado e inscrito en el Registro Minero Nacional."
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación de la licencia ambiental",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR.",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"La Corporación revisa que el documento cumpla con los requisitos exigidos del Articulo 24 del Decreto 2820, adicional a ello presentar el estudio de impacto ambiental de conformidad a los términos de referencia expedidos"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Registrarse en la Ventanilla Integral de trámites en Línea – VITAL",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Seguir las instrucciones: http://vital.anla.gov.co/SILPA_UT_PRE/Datospersonales.aspx?reg=registro"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Notificarse del auto de inicio",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"La Corporación envía comunicación al usuario y a las alcaldías del inicio del tramite del licenciamiento ambiental"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se debe notificar del Auto de Inicio en forma personal"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"recibir la visita técnica, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Donde se verificarán los requisitos aportados por el solicitante y se evaluará el estudio ambiental."
                    }
                ]
            },
            {
                "titulo":"Asistir a la reunión convocada por la autoridad ambiental cuando se considere pertinente con el fin de atender requerimientos, por una única vez, de información adicional",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Asistir por lo menos el solicitante, o representante legal en caso de ser persona jurídica, o su apoderado debidamente constituido."
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            }
        ],
        "organizacion":[
            {
                "titulo":"Solicitar pronunciamiento acerca de la exigibilidad del diagnóstico ambiental de alternativas, para proyectos, obras o actividades relacionadas en el artículo 18 del Decreto 2140 de 2014",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud por escrito: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: El oficio debe contener como mínimo la siguiente información respecto al proyecto, obra o actividad a desarrollar: objetivo, alcance, descripción y localización mediante coordenadas."
                    },
                    {
                        "type":"documento",
                        "titulo":"Planos del proyecto, obra o actividad a desarrollar: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Adjuntos a la solicitud."
                    }
                ]
            },
            {
                "titulo":"Radicar estudio de alternativas con base en los términos de referencia, de acuerdo con las condiciones específicas del proyecto, obra o actividad que pretende desarrollar, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Estudio de Alternativas: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Indicando: 1. Objetivo, alcance y descripción del proyecto, obra o actividad. 2. La descripción general de las alternativas de localización del proyecto, obra o actividad caracterizando ambientalmente el área de interés e identificando las áreas de manejo especial, así como también las características del entorno social y económico para cada alternativa presentada. 3. La información sobre la compatibilidad del proyecto con los usos del suelo establecidos en el Plan de Ordenamiento Territorial o su equivalente. Lo anterior, sin perjuicio de lo dispuesto en el Decreto 2201 de 2003, o la norma que lo modifique o sustituya. 4. La identificación y análisis comparativo de los potenciales riesgos y efectos sobre el medio ambiente; así como el uso y/o aprovechamiento de los recursos naturales requeridos para las diferentes alternativas estudiadas. 5. Identificación de las comunidades y de los mecanismos utilizados para informarles sobre el proyecto, obra o actividad. 6. Un análisis costo-beneficio ambiental de las alternativas. 7. Selección y justificación de la mejor alternativa. Los estudios ambientales se elaborarán con base en los términos de referencia que sean expedidos por el Ministerio de Ambiente y Desarrollo Sostenible. El solicitante deberá adaptarlos a las particularidades del proyecto, obra o actividad (http://www.anla.gov.co/contenido/contenido.aspx?catID=144&conID=7915)."
                    },
                    {
                        "type":"condicion",
                        "titulo":"La Corporación evalúa la documentación allegada por el usuario donde se determina si el proyecto requiere un diagnóstico o una licencia ambiental para lo cual expide los términos de referencia según el caso."
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite, en los casos en que no se requiera pronunciamiento sobre la exigibilidad del Diagnóstico Ambiental de Alternativas -DAA o una vez surtido el procedimiento anterior",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único de Solicitud o Modificación de Licencia Ambiental",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=516&A=37488"
                    },
                    {
                        "type":"documento",
                        "titulo":"Estudio de impacto ambiental: 1 Copia(s) (Magnético del Estudio de Impacto Ambiental con sus anexos), 1 Original(es) (Estudio de impacto ambiental)",
                        "anotaciones":"Anotaciones Adicionales: Los estudios ambientales se elaborarán con base en los términos de referencia que sean expedidos por el Ministerio de Ambiente y Desarrollo Sostenible. El solicitante deberá adaptarlos a las particularidades del proyecto, obra o actividad (http://www.anla.gov.co/contenido/contenido.aspx?catID=144&conID=7915)."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano que soporten el Estudio de Impacto Ambiental: 1 Original(es) (En físico), 1 Copia(s) (En magnético)",
                        "anotaciones":"Anotaciones Adicionales: De conformidad con lo dispuesto en la Resolución 1415 de 2012, que modifica y actualiza el Modelo de Almacenamiento Geográfico (Geodatabase) o la que la sustituya, modifique o derogue."
                    },
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica"
                    },
                    {
                        "type":"documento",
                        "titulo":"Costo estimado de inversión y operación del proyecto: 1 Original(es) (Descripción explicativa), 1 Copia(s) (En medio magnético de la Descripción )",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificado donde se manifiesta la presencia o no de comunidades indígenas y/o negras: 1 Copia(s) (En magnético del Certificado), 1 Original(es) (Certificado )",
                        "anotaciones":"Anotaciones Adicionales: Certificado expedido por el Ministerio del Interior."
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actúe por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Para tal caso es necesario allegar Poder debidamente otorgado)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de consorcio o unión temporal",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento privado que acredite la constitución:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para programas de arqueología preventiva",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Radicación del programa de arqueología preventiva:1 Copia(s) (Programa de arqueología preventiva), 1 Copia(s) (En magnético)",
                                "anotaciones":"Anotaciones Adicionales: Ante el Instituto Colombiano de Arqueología e Historia (ICANH)."
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos de explotación minera de carbón",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio sobre las condiciones del modo de transporte desde el sitio de explotación del carbón hasta el puerto de embarque del mismo:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos de hidrocarburos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Contrato de hidrocarburos respectivo:1 Original(es) (Contrato de hidrocarburos respectivo)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos hidroeléctricos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Registro hidroeléctrico :1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para proyectos mineros",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Título minero y/o el contrato de concesión minera:1 Copia(s) (En magnético ), 1 Original(es) (Título Minero)",
                                "anotaciones":"Anotaciones Adicionales: Debidamente otorgado e inscrito en el Registro Minero Nacional."
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Realizar el pago de la evaluación de la licencia ambiental",
                "subpasos":[
                    {
                        "type":"pago",
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR.",
                        "tipoMoneda":"Pesos ($)",
                        "tipoValor":"Avalúo y/o liquidación",
                        "cantidad":"NA",
                        "valor":"NA"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"La Corporación revisa que el documento cumpla con los requisitos exigidos del Articulo 24 del Decreto 2820, adicional a ello presentar el estudio de impacto ambiental de conformidad a los términos de referencia expedidos"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Registrarse en la Ventanilla Integral de trámites en Línea – VITAL",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Seguir las instrucciones: http://vital.anla.gov.co/SILPA_UT_PRE/Datospersonales.aspx?reg=registro"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Notificarse del auto de inicio",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"La Corporación envía comunicación al usuario y a las alcaldías del inicio del tramite del licenciamiento ambiental"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Presentar información adicional, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se debe notificar del Auto de Inicio en forma personal"
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"recibir la visita técnica, en caso de requerirse",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Donde se verificarán los requisitos aportados por el solicitante y se evaluará el estudio ambiental."
                    }
                ]
            },
            {
                "titulo":"Asistir a la reunión convocada por la autoridad ambiental cuando se considere pertinente con el fin de atender requerimientos, por una única vez, de información adicional",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Asistir por lo menos el solicitante, o representante legal en caso de ser persona jurídica, o su apoderado debidamente constituido."
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            }
        ]
    },
    "T17700":{
        "titulo":"Inscripción de toda persona natural o jurídica que desarrolle cualquier tipo de actividad que genere residuos o desechos peligrosos con excepción de los generadores de residuos o desechos peligrosos que generen una cantidad inferior a 10.0 kg/mes",
        "descripcion":"Obtener el derecho para aprovechar bosques naturales o productos de la flora silvestre no maderable, ubicados en terrenos de dominio público, ya sean únicos, persistentes o domésticos.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=17700",
        "resultado":"Inscripción en el registro de generadores de residuos o desechos peligrosos, que se obtiene de forma inmediata",
        "ciudadano":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud de Inscripción en el Registro de Generadores de Residuos o Desechos Peligrosos: 1 Original(es) (Anexo 1)",
                        "anotaciones":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?A=23983"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Anotaciones Adicionales: De acuerdo con el formato de carta establecido en el Anexo No. 1 de la Resolución 1362 de 2007"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            }
        ],
        "extranjero":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud de Inscripción en el Registro de Generadores de Residuos o Desechos Peligrosos: 1 Original(es) (Anexo 1)",
                        "anotaciones":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?A=23983"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Anotaciones Adicionales: De acuerdo con el formato de carta establecido en el Anexo No. 1 de la Resolución 1362 de 2007"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            }
        ],
        "institucion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud de Inscripción en el Registro de Generadores de Residuos o Desechos Peligrosos: 1 Original(es) (Anexo 1)",
                        "anotaciones":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?A=23983"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Anotaciones Adicionales: De acuerdo con el formato de carta establecido en el Anexo No. 1 de la Resolución 1362 de 2007"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            }
        ],
        "organizacion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud de Inscripción en el Registro de Generadores de Residuos o Desechos Peligrosos: 1 Original(es) (Anexo 1)",
                        "anotaciones":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?A=23983"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Anotaciones Adicionales: De acuerdo con el formato de carta establecido en el Anexo No. 1 de la Resolución 1362 de 2007"
                    }
                ]
            },
            {
                "titulo":"Radicar la documentación",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            }
        ]
    },
}

export function getTramite(id : string){
  return Tramites[id]
}

export function getTramiteCardList() : any[]{
  const results : any[] = []
  Object.keys(Tramites).forEach((tramiteId: string)=>{
    results.push({
      id: tramiteId,
      text: Tramites[tramiteId].titulo.charAt(0).toUpperCase() + Tramites[tramiteId].titulo.slice(1)
    })
  })
  return results
}