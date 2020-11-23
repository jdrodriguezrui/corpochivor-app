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
        "titulo":"Inscripción en el registro de generadores de residuos o desechos peligrosos",
        "descripcion":"Inscripción de toda persona natural o jurídica que desarrolle cualquier tipo de actividad que genere residuos o desechos peligrosos con excepción de los generadores de residuos o desechos peligrosos que generen una cantidad inferior a 10.0 kg/mes",
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
    "T19814":{
        "titulo":"Concesión de aguas superficiales – Corporaciones",
        "descripcion":"Obtener el derecho de usar o aprovechar las aguas de uso público para: abastecimiento doméstico en los casos que requiera derivación, riego y silvicultura, abrevaderos cuando se requiera derivación, industrial, generación térmica o nuclear de electricidad, explotación minera y tratamiento de minerales, explotación petrolera; inyección para generación geotérmica, generación hidroeléctrica, generación cinética directa, transporte de minerales y sustancias tóxicas, acuicultura y pesca, recreación y deportes, usos medicinales, y otros usos minerales.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=19814",
        "resultado":"Concesión de aguas superficiales., que se obtiene en 60 Día(s) - hábil(es)",
        "ciudadano":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Concesión de Aguas Superficiales",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=518&A=15992"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento con información sobre los sistemas para la captación, derivación, conducción, restitución de sobrantes, distribución y drenaje: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: y sobre las inversiones, cuantía de las mismas y término en el cual se van a realizar."
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 1",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2826&A=102314"
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
                        "titulo":"Para acueducto de uso domestico",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Censo de usuarios de la fuente superficial de la cual se pretende obtener la concesión de aguas:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Se debe presentar listado de usuarios beneficiados del permiso del aprovechamiento del recurso hidrico, en caso de Acueductos, Juntas de Acción Veredales, Distritos de Riego"
                            },
                            {
                                "type":"condicion",
                                "titulo":"Contar con autorización sanitaria favorable."
                            }
                        ]
                    },
                    {
                        "titulo":"Para prestacion de servicios publicos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que indique los detalles de las obras:1 Fotocopia(s)",
                                "anotaciones":"Anotaciones Adicionales: Adicionalmente se deberá indicar la extensión y el número de predios o de habitantes que se proyecta beneficiar, el plazo dentro del cual se dará al servicio y la reglamentación del mismo."
                            }
                        ]
                    },
                    {
                        "titulo":"Para refrigeracion de maquinas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Memoria descriptiva de las operaciones de lavado:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Comprendida la periodicidad, el lugar y el sitio donde se produzca el vertimiento de las aguas servidas."
                            },
                            {
                                "type":"documento",
                                "titulo":"Dato exacto de la cantidad de agua que se necesita para refrigerar las máquinas:1 Copia(s)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para uso energetico",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio de factibilidad del proyecto completo:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Donde se especifique la potencia y la generación anual estimada."
                            }
                        ]
                    },
                    {
                        "titulo":"Para uso industrial",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio de factibilidad del proyecto industrial:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para uso minero y petrolero",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio de factibilidad del proyecto industrial:1 Original(es)",
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
                        "descripcion":"La Tarifa de Evaluación y/o Seguimiento de conformidad con lo dispuesto en el artículo 96 de la Ley 633 de 2000, se encuentra establecida mediante la Resolución externa 577 de 2013 expedida por la Corporación Autónoma Regional de Chivor-CORPOCHIVOR. Para la autoliquidación de los servicios de evaluación ambiental, se debe presentar diligenciado el formato “RE-AA-06 Formato Autoliquidación Categoría 1 o RE-AA-07 Formato Autoliquidación Categoría 2” según costo del proyecto. Realizar el pago a nombre de CORPOCHIVOR, Convenio 21472",
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
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificarán las condiciones de la fuente hídrica, del predio beneficiario y demás información suministrada por el solicitante, de acuerdo a la normatividad ambiental vigente."
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
                        "titulo":"Formulario Único Nacional de Solicitud de Concesión de Aguas Superficiales",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=518&A=15992"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento con información sobre los sistemas para la captación, derivación, conducción, restitución de sobrantes, distribución y drenaje: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: y sobre las inversiones, cuantía de las mismas y término en el cual se van a realizar."
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
                        "titulo":"Para acueducto de uso domestico",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Censo de usuarios de la fuente superficial de la cual se pretende obtener la concesión de aguas:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Se debe presentar listado de usuarios beneficiados del permiso del aprovechamiento del recurso hidrico, en caso de Acueductos, Juntas de Acción Veredales, Distritos de Riego"
                            },
                            {
                                "type":"condicion",
                                "titulo":"Contar con autorización sanitaria favorable."
                            }
                        ]
                    },
                    {
                        "titulo":"Para prestacion de servicios publicos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que indique los detalles de las obras:1 Fotocopia(s)",
                                "anotaciones":"Anotaciones Adicionales: Adicionalmente se deberá indicar la extensión y el número de predios o de habitantes que se proyecta beneficiar, el plazo dentro del cual se dará al servicio y la reglamentación del mismo."
                            }
                        ]
                    },
                    {
                        "titulo":"Para refrigeracion de maquinas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Memoria descriptiva de las operaciones de lavado:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Comprendida la periodicidad, el lugar y el sitio donde se produzca el vertimiento de las aguas servidas."
                            },
                            {
                                "type":"documento",
                                "titulo":"Dato exacto de la cantidad de agua que se necesita para refrigerar las máquinas:1 Copia(s)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para uso energetico",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio de factibilidad del proyecto completo:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Donde se especifique la potencia y la generación anual estimada."
                            }
                        ]
                    },
                    {
                        "titulo":"Para uso industrial",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio de factibilidad del proyecto industrial:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para uso minero y petrolero",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio de factibilidad del proyecto industrial:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
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
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificarán las condiciones de la fuente hídrica, del predio beneficiario y demás información suministrada por el solicitante, de acuerdo a la normatividad ambiental vigente."
                    }
                ]
            }
        ],
        "Instituciones":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Concesión de Aguas Superficiales",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=518&A=15992"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento con información sobre los sistemas para la captación, derivación, conducción, restitución de sobrantes, distribución y drenaje: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: y sobre las inversiones, cuantía de las mismas y término en el cual se van a realizar."
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
                        "titulo":"Para acueducto de uso domestico",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Censo de usuarios de la fuente superficial de la cual se pretende obtener la concesión de aguas:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Se debe presentar listado de usuarios beneficiados del permiso del aprovechamiento del recurso hidrico, en caso de Acueductos, Juntas de Acción Veredales, Distritos de Riego"
                            },
                            {
                                "type":"condicion",
                                "titulo":"Contar con autorización sanitaria favorable."
                            }
                        ]
                    },
                    {
                        "titulo":"Para prestacion de servicios publicos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que indique los detalles de las obras:1 Fotocopia(s)",
                                "anotaciones":"Anotaciones Adicionales: Adicionalmente se deberá indicar la extensión y el número de predios o de habitantes que se proyecta beneficiar, el plazo dentro del cual se dará al servicio y la reglamentación del mismo."
                            }
                        ]
                    },
                    {
                        "titulo":"Para refrigeracion de maquinas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Memoria descriptiva de las operaciones de lavado:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Comprendida la periodicidad, el lugar y el sitio donde se produzca el vertimiento de las aguas servidas."
                            },
                            {
                                "type":"documento",
                                "titulo":"Dato exacto de la cantidad de agua que se necesita para refrigerar las máquinas:1 Copia(s)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para uso energetico",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio de factibilidad del proyecto completo:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Donde se especifique la potencia y la generación anual estimada."
                            }
                        ]
                    },
                    {
                        "titulo":"Para uso industrial",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio de factibilidad del proyecto industrial:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para uso minero y petrolero",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio de factibilidad del proyecto industrial:1 Original(es)",
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
                        "descripcion":"La Tarifa de Evaluación y/o Seguimiento de conformidad con lo dispuesto en el artículo 96 de la Ley 633 de 2000, se encuentra establecida mediante la Resolución externa 577 de 2013 expedida por la Corporación Autónoma Regional de Chivor-CORPOCHIVOR. Para la autoliquidación de los servicios de evaluación ambiental, se debe presentar diligenciado el formato “RE-AA-06 Formato Autoliquidación Categoría 1 o RE-AA-07 Formato Autoliquidación Categoría 2” según costo del proyecto. Realizar el pago a nombre de CORPOCHIVOR, Convenio 21472",
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
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificarán las condiciones de la fuente hídrica, del predio beneficiario y demás información suministrada por el solicitante, de acuerdo a la normatividad ambiental vigente."
                    }
                ]
            }
        ],
        "organizacionees":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Concesión de Aguas Superficiales",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=518&A=15992"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la Cámara de Comercio como persona jurídica."
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento con información sobre los sistemas para la captación, derivación, conducción, restitución de sobrantes, distribución y drenaje: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: y sobre las inversiones, cuantía de las mismas y término en el cual se van a realizar."
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
                        "titulo":"Para acueducto de uso domestico",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Censo de usuarios de la fuente superficial de la cual se pretende obtener la concesión de aguas:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Se debe presentar listado de usuarios beneficiados del permiso del aprovechamiento del recurso hidrico, en caso de Acueductos, Juntas de Acción Veredales, Distritos de Riego"
                            },
                            {
                                "type":"condicion",
                                "titulo":"Contar con autorización sanitaria favorable."
                            }
                        ]
                    },
                    {
                        "titulo":"Para prestacion de servicios publicos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que indique los detalles de las obras:1 Fotocopia(s)",
                                "anotaciones":"Anotaciones Adicionales: Adicionalmente se deberá indicar la extensión y el número de predios o de habitantes que se proyecta beneficiar, el plazo dentro del cual se dará al servicio y la reglamentación del mismo."
                            }
                        ]
                    },
                    {
                        "titulo":"Para refrigeracion de maquinas",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Memoria descriptiva de las operaciones de lavado:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Comprendida la periodicidad, el lugar y el sitio donde se produzca el vertimiento de las aguas servidas."
                            },
                            {
                                "type":"documento",
                                "titulo":"Dato exacto de la cantidad de agua que se necesita para refrigerar las máquinas:1 Copia(s)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para uso energetico",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio de factibilidad del proyecto completo:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Donde se especifique la potencia y la generación anual estimada."
                            }
                        ]
                    },
                    {
                        "titulo":"Para uso industrial",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio de factibilidad del proyecto industrial:1 Original(es)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"Para uso minero y petrolero",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Estudio de factibilidad del proyecto industrial:1 Original(es)",
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
                        "descripcion":"La Tarifa de Evaluación y/o Seguimiento de conformidad con lo dispuesto en el artículo 96 de la Ley 633 de 2000, se encuentra establecida mediante la Resolución externa 577 de 2013 expedida por la Corporación Autónoma Regional de Chivor-CORPOCHIVOR. Para la autoliquidación de los servicios de evaluación ambiental, se debe presentar diligenciado el formato “RE-AA-06 Formato Autoliquidación Categoría 1 o RE-AA-07 Formato Autoliquidación Categoría 2” según costo del proyecto. Realizar el pago a nombre de CORPOCHIVOR, Convenio 21472",
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
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificarán las condiciones de la fuente hídrica, del predio beneficiario y demás información suministrada por el solicitante, de acuerdo a la normatividad ambiental vigente."
                    }
                ]
            }
        ]
    },
    "T20617":{
        "titulo":"Permiso ambiental para zoológicos",
        "descripcion":"Obtener el permiso de zoológicos donde se mantienen individuos de fauna silvestre en confinamiento o semiconfinamiento para exhibición y con propósitos educativos y en el cual se adelantan investigaciones biológicas sobre las especies en cautividad, actividades que se adelantan sin propósitos comerciales, aunque se cobren tarifas al público por el ingreso",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=20617",
        "resultado":"Permiso ambiental para zoológicos, que se obtiene en 60 Día(s) - hábil(es)",
        "ciudadano":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Formulario Único Nacional de Solicitud de Permiso de Emisiones Atmosféricas Fuentes Fijas",
                        "anotaciones":"Solicitud por escrito : 1 Original(es)"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Proyecto de investigaciones biológicas que se pretenden llevar a cabo con los individuos del zoológico: 1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Plan de manejo del zoológico: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Que incluirá el plan de cría con el fin de reabastecer el propio zoológico u otros, o para suministrar individuos a la entidad administradora con fines de repoblación. Tambien debe comprender por lo menos: 1. Reseña detallada de las actividades que se van a adelantar durante el primer año. 2. Planos y diseños de las obras de infraestructura y ambientación y sus instalaciones, incluyendo jaulas, cercados y similares, abastecimientos, distribución, vertimiento y drenaje de aguas, instalaciones para conservación y preparación de alimentos, instalaciones para tratamiento médico, aclimatación, control, archivos y demás obras e instalaciones necesarias para su funcionamiento. 3. Fuentes de obtención de alimentos para los animales. 4. Planeación especial y proyecciones a mediano y largo plazo. 5. Personal técnico-administrativo, asesor y de servicio. Entre el personal técnico o asesor debe contar con un biólogo, zoólogo veterinario u otro profesional en ciencias biológicas, quien responderá también por el desarrollo del programa de investigación propuesta. 6. Sistema de registro y control y hojas de vida de los animales ingresados o producidos en el zoológico. 7. Sistemas profilácticos y adaptación y todas aquellas prácticas destinadas a minimizar la mortalidad y asegurar la higiene. 8. Sistemas de seguridad, alarmas y medidas de emergencia. 9. Sistema de marcaje."
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 1",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2826&A=102314"
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
                        "presencial":"true"
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
            }
        ],
        "extranjero":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud por escrito : 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Indicando: 1. Nombre, identificación y domicilio del solicitante, si se trata de persona jurídica el nombre, domicilio e identificación de su representante legal; 2. Ubicación del zoológico indicando la jurisdicción municipal a la cual pertenece; 3. Número de individuos con los cuales se proyecta iniciar actividades, indicando la especie, subespecie a que pertenecen; 4. Características del área en la cual se pretende establecer el zoológico, tales como clima, aguas, cobertura vegetal, topografía, suelos; y 5. Fuentes de aprovisionamiento de los individuos"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Proyecto de investigaciones biológicas que se pretenden llevar a cabo con los individuos del zoológico: 1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Plan de manejo del zoológico: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Que incluirá el plan de cría con el fin de reabastecer el propio zoológico u otros, o para suministrar individuos a la entidad administradora con fines de repoblación. Tambien debe comprender por lo menos: 1. Reseña detallada de las actividades que se van a adelantar durante el primer año. 2. Planos y diseños de las obras de infraestructura y ambientación y sus instalaciones, incluyendo jaulas, cercados y similares, abastecimientos, distribución, vertimiento y drenaje de aguas, instalaciones para conservación y preparación de alimentos, instalaciones para tratamiento médico, aclimatación, control, archivos y demás obras e instalaciones necesarias para su funcionamiento. 3. Fuentes de obtención de alimentos para los animales. 4. Planeación especial y proyecciones a mediano y largo plazo. 5. Personal técnico-administrativo, asesor y de servicio. Entre el personal técnico o asesor debe contar con un biólogo, zoólogo veterinario u otro profesional en ciencias biológicas, quien responderá también por el desarrollo del programa de investigación propuesta. 6. Sistema de registro y control y hojas de vida de los animales ingresados o producidos en el zoológico. 7. Sistemas profilácticos y adaptación y todas aquellas prácticas destinadas a minimizar la mortalidad y asegurar la higiene. 8. Sistemas de seguridad, alarmas y medidas de emergencia. 9. Sistema de marcaje."
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
                        "titulo":"Solicitud por escrito : 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Indicando: 1. Nombre, identificación y domicilio del solicitante, si se trata de persona jurídica el nombre, domicilio e identificación de su representante legal; 2. Ubicación del zoológico indicando la jurisdicción municipal a la cual pertenece; 3. Número de individuos con los cuales se proyecta iniciar actividades, indicando la especie, subespecie a que pertenecen; 4. Características del área en la cual se pretende establecer el zoológico, tales como clima, aguas, cobertura vegetal, topografía, suelos; y 5. Fuentes de aprovisionamiento de los individuos"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Proyecto de investigaciones biológicas que se pretenden llevar a cabo con los individuos del zoológico: 1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Plan de manejo del zoológico: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Que incluirá el plan de cría con el fin de reabastecer el propio zoológico u otros, o para suministrar individuos a la entidad administradora con fines de repoblación. Tambien debe comprender por lo menos: 1. Reseña detallada de las actividades que se van a adelantar durante el primer año. 2. Planos y diseños de las obras de infraestructura y ambientación y sus instalaciones, incluyendo jaulas, cercados y similares, abastecimientos, distribución, vertimiento y drenaje de aguas, instalaciones para conservación y preparación de alimentos, instalaciones para tratamiento médico, aclimatación, control, archivos y demás obras e instalaciones necesarias para su funcionamiento. 3. Fuentes de obtención de alimentos para los animales. 4. Planeación especial y proyecciones a mediano y largo plazo. 5. Personal técnico-administrativo, asesor y de servicio. Entre el personal técnico o asesor debe contar con un biólogo, zoólogo veterinario u otro profesional en ciencias biológicas, quien responderá también por el desarrollo del programa de investigación propuesta. 6. Sistema de registro y control y hojas de vida de los animales ingresados o producidos en el zoológico. 7. Sistemas profilácticos y adaptación y todas aquellas prácticas destinadas a minimizar la mortalidad y asegurar la higiene. 8. Sistemas de seguridad, alarmas y medidas de emergencia. 9. Sistema de marcaje."
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 1",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
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
                        "presencial":"true"
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
            }
        ],
        "organizacion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud por escrito : 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Indicando: 1. Nombre, identificación y domicilio del solicitante, si se trata de persona jurídica el nombre, domicilio e identificación de su representante legal; 2. Ubicación del zoológico indicando la jurisdicción municipal a la cual pertenece; 3. Número de individuos con los cuales se proyecta iniciar actividades, indicando la especie, subespecie a que pertenecen; 4. Características del área en la cual se pretende establecer el zoológico, tales como clima, aguas, cobertura vegetal, topografía, suelos; y 5. Fuentes de aprovisionamiento de los individuos"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio"
                    },
                    {
                        "type":"documento",
                        "titulo":"Proyecto de investigaciones biológicas que se pretenden llevar a cabo con los individuos del zoológico: 1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Plan de manejo del zoológico: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Que incluirá el plan de cría con el fin de reabastecer el propio zoológico u otros, o para suministrar individuos a la entidad administradora con fines de repoblación. Tambien debe comprender por lo menos: 1. Reseña detallada de las actividades que se van a adelantar durante el primer año. 2. Planos y diseños de las obras de infraestructura y ambientación y sus instalaciones, incluyendo jaulas, cercados y similares, abastecimientos, distribución, vertimiento y drenaje de aguas, instalaciones para conservación y preparación de alimentos, instalaciones para tratamiento médico, aclimatación, control, archivos y demás obras e instalaciones necesarias para su funcionamiento. 3. Fuentes de obtención de alimentos para los animales. 4. Planeación especial y proyecciones a mediano y largo plazo. 5. Personal técnico-administrativo, asesor y de servicio. Entre el personal técnico o asesor debe contar con un biólogo, zoólogo veterinario u otro profesional en ciencias biológicas, quien responderá también por el desarrollo del programa de investigación propuesta. 6. Sistema de registro y control y hojas de vida de los animales ingresados o producidos en el zoológico. 7. Sistemas profilácticos y adaptación y todas aquellas prácticas destinadas a minimizar la mortalidad y asegurar la higiene. 8. Sistemas de seguridad, alarmas y medidas de emergencia. 9. Sistema de marcaje."
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
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
                        "presencial":"true"
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
            }
        ]
    },
    "T19821":{
        "titulo":"Permiso o autorización para aprovechamiento forestal de árboles aislados",
        "descripcion":"Obtener el derecho para talar, trasplantar o aprovechar árboles aislados de bosques naturales o plantados, localizados en terrenos de dominio público o en predios de propiedad privada, que se encuentren caídos o muertos por causas naturales; o que por razones de orden sanitario, de ubicación y/o por daños mecánicos estén causando perjuicio a estabilidad de los suelos, a canales de aguas, andenes, calles, obras de infraestructura o edificaciones.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=19821",
        "resultado":"Permiso o autorización para el aprovechamiento forestal., que se obtiene en 60 Día(s) - hábil(es)",
        "ciudadano":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Aprovechamiento Forestal Bosques Naturales o Plantados no Registrados",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=524&A=15980"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Se debe presentar el original del poder"
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario del predio:1 Original(es) (Declaración extrajuicio)",
                                "anotaciones":"Anotaciones Adicionales: Se debe presentar una o más declaraciones extrajuicio dependiendo el caso"
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
                        "titulo":"Verificar las condiciones ambientales del predio y la veracidad de la información suministrada por el solicitante"
                    }
                ]
            }
        ],
        "extranjero":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Se debe presentar el original del poder"
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario del predio:1 Original(es) (Declaración extrajuicio)",
                                "anotaciones":"Anotaciones Adicionales: Se debe presentar una o más declaraciones extrajuicio dependiendo el caso"
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Verificar las condiciones ambientales del predio y la veracidad de la información suministrada por el solicitante"
                    }
                ]
            }
        ],
        "institucion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Aprovechamiento Forestal Bosques Naturales o Plantados no Registrados",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=524&A=15980"
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
                                "anotaciones":"Anotaciones Adicionales: Se debe presentar el original del poder"
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario del predio:1 Original(es) (Declaración extrajuicio)",
                                "anotaciones":"Anotaciones Adicionales: Se debe presentar una o más declaraciones extrajuicio dependiendo el caso"
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
                        "titulo":"Verificar las condiciones ambientales del predio y la veracidad de la información suministrada por el solicitante"
                    }
                ]
            }
        ],
        "organizacion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Aprovechamiento Forestal Bosques Naturales o Plantados no Registrados",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=524&A=15980"
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
                                "anotaciones":"Anotaciones Adicionales: Se debe presentar el original del poder"
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario del predio:1 Original(es) (Declaración extrajuicio)",
                                "anotaciones":"Anotaciones Adicionales: Se debe presentar una o más declaraciones extrajuicio dependiendo el caso"
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser junta de accion comunal u otro organismo sin animo de lucro y/o utilidad comun",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que acredite la existencia y el reconocimiento de la personería jurídica:1 Fotocopia(s) (Acta de posesión como Alcalde), 1 Copia(s) (Cédula de ciudadanía del Alcalde Municipal)",
                                "anotaciones":"Anotaciones Adicionales: Aplica para árboles ubicados en espacio público y la tramita directamente el alcalde municipal"
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
                        "titulo":"Verificar las condiciones ambientales del predio y la veracidad de la información suministrada por el solicitante"
                    }
                ]
            }
        ]
    },
    "T20604":{
        "titulo":"Permiso de caza",
        "descripcion":"Permiso para capturar animales silvestres ya sea dándoles muerte, mutilándolos o atrapándolos vivos y recolectando sus productos, de acuerdo a la clasificación del tipo de caza (caza deportiva, caza de control y caza de fomento para coto de caza)",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=20604",
        "resultado":"Permiso de caza, que se obtiene en 60 Día(s) - hábil(es)",
        "ciudadano":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud escrita: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Indicando nombre, domicilio e identificación del solicitante. Adicionalmente indicar para caza deportiva: especie o especies sobre las cuales pretende practicar la caza, armas instrumentos o equipos que pretende utilizar; Para caza de control: sistemas, armas, equipos e implementos a emplear en las faenas de caza, especies objeto de control, justificación del control, área en la cual se realizara el control, indicando la jurisdicción a la cual pertenece y los cultivos que se pretenden proteger, nombre e identificación de las personas que ejecutarán las faenas de caza, periodo durante el cual se realizarán las faenas de caza y el destino final de los productos; Para caza de fomento de coto de caza: especies y números de individuo o especímenes que compondrán la población parental, lugares de captura de los individuos o especímenes que se autorice obtener, sistemas de selección y sistemas de caza que serán empleados y los sistemas de transporte para los individuos o especímenes en el coto de caza"
                    },
                    {
                        "type":"documento",
                        "titulo":"Cédula de ciudadanía : 1 Copia(s)",
                        "anotaciones":"Anotaciones Adicionales: De las personas que van a cazar"
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 1",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2826&A=102314"
                    }
                ],
                "casos":[
                    {
                        "titulo":"En caso de ser caza de control",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Plan que se debe adelantar por los propietarios o poseedores del predio:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Indicando: 1. Nombre, identificación y domicilio del solicitante. 2. Sistemas, armas, equipos e implementos a emplear en las faenas de caza. 3. Especies, objeto del control. 4. Justificación del control. 5. Área en la cual se realizará el control, indicando la jurisdicción a la cual pertenece y los cultivos que se pretende proteger. 6. Nombre e identificación de las personas que ejecutarán las faenas de caza. 7. Período durante el cual se realizarán las faenas de caza. 8. Destino final de los productos"
                            },
                            {
                                "type":"condicion",
                                "titulo":"Ser propietario o poseedor del predio"
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser caza de fomento de los coto de caza",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Resolución que autoriza el coto de caza:1 Copia(s)",
                                "anotaciones":""
                            },
                            {
                                "type":"documento",
                                "titulo":"Constancia de la visita técnica:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Practicada por técnicos de la entidad administradora del recurso en cuya jurisdicción se encuentre el área de coto de caza a los cuales se destinarán los individuos o especímenes que se autorice, en relación con las instalaciones, equipos y demás condiciones de funcionamiento"
                            },
                            {
                                "type":"condicion",
                                "titulo":"Haber sido autorizado para la experimentación o para el funcionamiento del coto de caza y también sus instalaciones"
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser caza deportiva",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Fotografias:1 Original(es)",
                                "anotaciones":""
                            },
                            {
                                "type":"documento",
                                "titulo":"Salvoconducto del arma o armas:1 Copia(s)",
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
                        "titulo":"Solicitud escrita: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Indicando nombre, domicilio e identificación del solicitante. Adicionalmente indicar para caza deportiva: especie o especies sobre las cuales pretende practicar la caza, armas instrumentos o equipos que pretende utilizar; Para caza de control: sistemas, armas, equipos e implementos a emplear en las faenas de caza, especies objeto de control, justificación del control, área en la cual se realizara el control, indicando la jurisdicción a la cual pertenece y los cultivos que se pretenden proteger, nombre e identificación de las personas que ejecutarán las faenas de caza, periodo durante el cual se realizarán las faenas de caza y el destino final de los productos; Para caza de fomento de coto de caza: especies y números de individuo o especímenes que compondrán la población parental, lugares de captura de los individuos o especímenes que se autorice obtener, sistemas de selección y sistemas de caza que serán empleados y los sistemas de transporte para los individuos o especímenes en el coto de caza"
                    },
                    {
                        "type":"documento",
                        "titulo":"Cédula de extranjería: 1 Copia(s)",
                        "anotaciones":"Anotaciones Adicionales: De las personas que van a cazar"
                    }
                ],
                "casos":[
                    {
                        "titulo":"En caso de ser caza de control",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Plan que se debe adelantar por los propietarios o poseedores del predio:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Indicando: 1. Nombre, identificación y domicilio del solicitante. 2. Sistemas, armas, equipos e implementos a emplear en las faenas de caza. 3. Especies, objeto del control. 4. Justificación del control. 5. Área en la cual se realizará el control, indicando la jurisdicción a la cual pertenece y los cultivos que se pretende proteger. 6. Nombre e identificación de las personas que ejecutarán las faenas de caza. 7. Período durante el cual se realizarán las faenas de caza. 8. Destino final de los productos"
                            },
                            {
                                "type":"condicion",
                                "titulo":"Ser propietario o poseedor del predio"
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser caza de fomento de los coto de caza",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Resolución que autoriza el coto de caza:1 Copia(s)",
                                "anotaciones":""
                            },
                            {
                                "type":"documento",
                                "titulo":"Constancia de la visita técnica:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Practicada por técnicos de la entidad administradora del recurso en cuya jurisdicción se encuentre el área de coto de caza a los cuales se destinarán los individuos o especímenes que se autorice, en relación con las instalaciones, equipos y demás condiciones de funcionamiento"
                            },
                            {
                                "type":"condicion",
                                "titulo":"Haber sido autorizado para la experimentación o para el funcionamiento del coto de caza y también sus instalaciones"
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser caza deportiva",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Fotografias:1 Original(es)",
                                "anotaciones":""
                            },
                            {
                                "type":"documento",
                                "titulo":"Salvoconducto del arma o armas:1 Copia(s)",
                                "anotaciones":""
                            }
                        ]
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
                        "titulo":"Solicitud escrita: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Indicando nombre, domicilio e identificación del solicitante. Adicionalmente indicar para caza deportiva: especie o especies sobre las cuales pretende practicar la caza, armas instrumentos o equipos que pretende utilizar; Para caza de control: sistemas, armas, equipos e implementos a emplear en las faenas de caza, especies objeto de control, justificación del control, área en la cual se realizara el control, indicando la jurisdicción a la cual pertenece y los cultivos que se pretenden proteger, nombre e identificación de las personas que ejecutarán las faenas de caza, periodo durante el cual se realizarán las faenas de caza y el destino final de los productos; Para caza de fomento de coto de caza: especies y números de individuo o especímenes que compondrán la población parental, lugares de captura de los individuos o especímenes que se autorice obtener, sistemas de selección y sistemas de caza que serán empleados y los sistemas de transporte para los individuos o especímenes en el coto de caza"
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"En caso de ser caza de control",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Plan que se debe adelantar por los propietarios o poseedores del predio:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Indicando: 1. Nombre, identificación y domicilio del solicitante. 2. Sistemas, armas, equipos e implementos a emplear en las faenas de caza. 3. Especies, objeto del control. 4. Justificación del control. 5. Área en la cual se realizará el control, indicando la jurisdicción a la cual pertenece y los cultivos que se pretende proteger. 6. Nombre e identificación de las personas que ejecutarán las faenas de caza. 7. Período durante el cual se realizarán las faenas de caza. 8. Destino final de los productos"
                            },
                            {
                                "type":"condicion",
                                "titulo":"Ser propietario o poseedor del predio"
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser caza de fomento de los coto de caza",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Resolución que autoriza el coto de caza:1 Copia(s)",
                                "anotaciones":""
                            },
                            {
                                "type":"documento",
                                "titulo":"Constancia de la visita técnica:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Practicada por técnicos de la entidad administradora del recurso en cuya jurisdicción se encuentre el área de coto de caza a los cuales se destinarán los individuos o especímenes que se autorice, en relación con las instalaciones, equipos y demás condiciones de funcionamiento"
                            },
                            {
                                "type":"condicion",
                                "titulo":"Haber sido autorizado para la experimentación o para el funcionamiento del coto de caza y también sus instalaciones"
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser caza deportiva",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Fotografias:1 Original(es)",
                                "anotaciones":""
                            },
                            {
                                "type":"documento",
                                "titulo":"Salvoconducto del arma o armas:1 Copia(s)",
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
                        "titulo":"Solicitud escrita: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Indicando nombre, domicilio e identificación del solicitante. Adicionalmente indicar para caza deportiva: especie o especies sobre las cuales pretende practicar la caza, armas instrumentos o equipos que pretende utilizar; Para caza de control: sistemas, armas, equipos e implementos a emplear en las faenas de caza, especies objeto de control, justificación del control, área en la cual se realizara el control, indicando la jurisdicción a la cual pertenece y los cultivos que se pretenden proteger, nombre e identificación de las personas que ejecutarán las faenas de caza, periodo durante el cual se realizarán las faenas de caza y el destino final de los productos; Para caza de fomento de coto de caza: especies y números de individuo o especímenes que compondrán la población parental, lugares de captura de los individuos o especímenes que se autorice obtener, sistemas de selección y sistemas de caza que serán empleados y los sistemas de transporte para los individuos o especímenes en el coto de caza"
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"En caso de ser caza de control",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Plan que se debe adelantar por los propietarios o poseedores del predio:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Indicando: 1. Nombre, identificación y domicilio del solicitante. 2. Sistemas, armas, equipos e implementos a emplear en las faenas de caza. 3. Especies, objeto del control. 4. Justificación del control. 5. Área en la cual se realizará el control, indicando la jurisdicción a la cual pertenece y los cultivos que se pretende proteger. 6. Nombre e identificación de las personas que ejecutarán las faenas de caza. 7. Período durante el cual se realizarán las faenas de caza. 8. Destino final de los productos"
                            },
                            {
                                "type":"condicion",
                                "titulo":"Ser propietario o poseedor del predio"
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser caza de fomento de los coto de caza",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Resolución que autoriza el coto de caza:1 Copia(s)",
                                "anotaciones":""
                            },
                            {
                                "type":"documento",
                                "titulo":"Constancia de la visita técnica:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Practicada por técnicos de la entidad administradora del recurso en cuya jurisdicción se encuentre el área de coto de caza a los cuales se destinarán los individuos o especímenes que se autorice, en relación con las instalaciones, equipos y demás condiciones de funcionamiento"
                            },
                            {
                                "type":"condicion",
                                "titulo":"Haber sido autorizado para la experimentación o para el funcionamiento del coto de caza y también sus instalaciones"
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser caza deportiva",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Fotografias:1 Original(es)",
                                "anotaciones":""
                            },
                            {
                                "type":"documento",
                                "titulo":"Salvoconducto del arma o armas:1 Copia(s)",
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
                        "type":"canal",
                        "presencial":"true"
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
    "T19815":{
        "titulo":"Permiso de vertimientos",
        "descripcion":"Permiso para descargar vertimientos en las fuentes superficiales de aguas, en los sistemas de alcantarillado público o en el suelo asociado a un terreno rocoso permeable dispuesto bajo la superficie.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=19815",
        "resultado":"Permiso de vertimientos., que se obtiene en 60 Día(s) - hábil(es)",
        "ciudadano":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Permiso de Vertimientos",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=519&A=15993"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento técnico: 1 Original(es) (Documento técnico)",
                        "anotaciones":"Anotaciones Adicionales: Que contenga: la ubicación, descripción de la operación del sistema, memorias técnicas y diseños de ingeniería conceptual y básica; planos de detalle del sistema de tratamiento que se adoptará y condiciones de eficiencia de este.Los estudios deben ser elaborados por firmas especializadas o por profesionales calificados."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano donde se identifique origen, cantidad y localización georeferenciada de las descargas al cuerpo de agua o al suelo: 1 Original(es) (Plano)",
                        "anotaciones":"Anotaciones Adicionales: El cual deberá presentarse en formato análogo tamaño 100 cm x 70 cm."
                    },
                    {
                        "type":"documento",
                        "titulo":"Caracterización del vertimiento: 1 Original(es) (Caracterización del vertimiento)",
                        "anotaciones":"Anotaciones Adicionales: O estado final previsto para el vertimiento proyectado. - Debe ser realizada por un laboratorio acreditado por el IDEAM"
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificado de uso de suelo: 1 Original(es) (Concepto uso del suelo)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Evaluación ambiental del vertimiento: 1 Original(es) (Evaluación ambiental del vertimiento)",
                        "anotaciones":"Anotaciones Adicionales: Debe contener lo establecido en el Artículo 43 del Decreto 3930 de 2010. Deben ser elaborados por firmas especializadas o por profesionales calificados."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plan de Gestión del Riesgo para el Manejo del Vertimiento: 1 Original(es) (Plan de Gestión del Riesgo para el manejo del vertimiento)",
                        "anotaciones":""
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado cuando se actúe por medio de apoderado)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Prueba idónea de la posesión o tenencia del predio:1 Original(es) (Prueba adecuada que lo acredite como tal y autorización del propietario o poseedor)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio.",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Original(es) (Prueba adecuada que lo acredite como tal)",
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
                        "titulo":"En caso de requerirse el usuario debe allegar la documentación faltante para su trámite."
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Comunicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Presentación personal o Autorización para notificarse"
                    },
                    {
                        "type":"documento",
                        "titulo":"Autorización para notificarse: 1 Original(es) (Autorización para notificarse en caso de no hacer presentación personal)",
                        "anotaciones":""
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificará la información aportada por el solicitante y el cumplimiento de lo establecido en el Artículo 46 del Decreto 3930 de 2010."
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
                        "titulo":"Formulario Único Nacional de Solicitud de Permiso de Vertimientos",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=519&A=15993"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento técnico: 1 Original(es) (Documento técnico)",
                        "anotaciones":"Anotaciones Adicionales: Que contenga: la ubicación, descripción de la operación del sistema, memorias técnicas y diseños de ingeniería conceptual y básica; planos de detalle del sistema de tratamiento que se adoptará y condiciones de eficiencia de este.Los estudios deben ser elaborados por firmas especializadas o por profesionales calificados."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano donde se identifique origen, cantidad y localización georeferenciada de las descargas al cuerpo de agua o al suelo: 1 Original(es) (Plano)",
                        "anotaciones":"Anotaciones Adicionales: El cual deberá presentarse en formato análogo tamaño 100 cm x 70 cm."
                    },
                    {
                        "type":"documento",
                        "titulo":"Caracterización del vertimiento: 1 Original(es) (Caracterización del vertimiento)",
                        "anotaciones":"Anotaciones Adicionales: O estado final previsto para el vertimiento proyectado. - Debe ser realizada por un laboratorio acreditado por el IDEAM"
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificado de uso de suelo: 1 Original(es) (Concepto uso del suelo)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Evaluación ambiental del vertimiento: 1 Original(es) (Evaluación ambiental del vertimiento)",
                        "anotaciones":"Anotaciones Adicionales: Debe contener lo establecido en el Artículo 43 del Decreto 3930 de 2010. Deben ser elaborados por firmas especializadas o por profesionales calificados."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plan de Gestión del Riesgo para el Manejo del Vertimiento: 1 Original(es) (Plan de Gestión del Riesgo para el manejo del vertimiento)",
                        "anotaciones":""
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado cuando se actúe por medio de apoderado)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Prueba idónea de la posesión o tenencia del predio:1 Original(es) (Prueba adecuada que lo acredite como tal y autorización del propietario o poseedor)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio.",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Original(es) (Prueba adecuada que lo acredite como tal)",
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
                        "titulo":"En caso de requerirse el usuario debe allegar la documentación faltante para su trámite."
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Comunicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Presentación personal o Autorización para notificarse"
                    },
                    {
                        "type":"documento",
                        "titulo":"Autorización para notificarse: 1 Original(es) (Autorización para notificarse en caso de no hacer presentación personal)",
                        "anotaciones":""
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificará la información aportada por el solicitante y el cumplimiento de lo establecido en el Artículo 46 del Decreto 3930 de 2010."
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
                        "titulo":"Formulario Único Nacional de Solicitud de Permiso de Vertimientos",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=519&A=15993"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento técnico: 1 Original(es) (Documento técnico)",
                        "anotaciones":"Anotaciones Adicionales: Que contenga: la ubicación, descripción de la operación del sistema, memorias técnicas y diseños de ingeniería conceptual y básica; planos de detalle del sistema de tratamiento que se adoptará y condiciones de eficiencia de este.Los estudios deben ser elaborados por firmas especializadas o por profesionales calificados."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano donde se identifique origen, cantidad y localización georeferenciada de las descargas al cuerpo de agua o al suelo: 1 Original(es) (Plano)",
                        "anotaciones":"Anotaciones Adicionales: El cual deberá presentarse en formato análogo tamaño 100 cm x 70 cm."
                    },
                    {
                        "type":"documento",
                        "titulo":"Caracterización del vertimiento: 1 Original(es) (Caracterización del vertimiento)",
                        "anotaciones":"Anotaciones Adicionales: O estado final previsto para el vertimiento proyectado. - Debe ser realizada por un laboratorio acreditado por el IDEAM"
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificado de uso de suelo: 1 Original(es) (Concepto uso del suelo)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Evaluación ambiental del vertimiento: 1 Original(es) (Evaluación ambiental del vertimiento)",
                        "anotaciones":"Anotaciones Adicionales: Debe contener lo establecido en el Artículo 43 del Decreto 3930 de 2010. Deben ser elaborados por firmas especializadas o por profesionales calificados."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plan de Gestión del Riesgo para el Manejo del Vertimiento: 1 Original(es) (Plan de Gestión del Riesgo para el manejo del vertimiento)",
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
                        "titulo":"Cuando se actúe por medio de apoderado.",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado cuando se actúe por medio de apoderado)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio.",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Prueba idónea de la posesión o tenencia del predio:1 Original(es) (Prueba adecuada que lo acredite como tal y autorización del propietario o poseedor)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio.",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Original(es) (Prueba adecuada que lo acredite como tal)",
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
                        "titulo":"En caso de requerirse el usuario debe allegar la documentación faltante para su trámite."
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Comunicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Presentación personal o Autorización para notificarse"
                    },
                    {
                        "type":"documento",
                        "titulo":"Autorización para notificarse: 1 Original(es) (Autorización para notificarse en caso de no hacer presentación personal)",
                        "anotaciones":""
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificará la información aportada por el solicitante y el cumplimiento de lo establecido en el Artículo 46 del Decreto 3930 de 2010."
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
                        "titulo":"Formulario Único Nacional de Solicitud de Permiso de Vertimientos",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=519&A=15993"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica."
                    },
                    {
                        "type":"condicion",
                        "titulo":"Ser propietario del predio."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento técnico: 1 Original(es) (Documento técnico)",
                        "anotaciones":"Anotaciones Adicionales: Que contenga: la ubicación, descripción de la operación del sistema, memorias técnicas y diseños de ingeniería conceptual y básica; planos de detalle del sistema de tratamiento que se adoptará y condiciones de eficiencia de este.Los estudios deben ser elaborados por firmas especializadas o por profesionales calificados."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano donde se identifique origen, cantidad y localización georeferenciada de las descargas al cuerpo de agua o al suelo: 1 Original(es) (Plano)",
                        "anotaciones":"Anotaciones Adicionales: El cual deberá presentarse en formato análogo tamaño 100 cm x 70 cm."
                    },
                    {
                        "type":"documento",
                        "titulo":"Caracterización del vertimiento: 1 Original(es) (Caracterización del vertimiento)",
                        "anotaciones":"Anotaciones Adicionales: O estado final previsto para el vertimiento proyectado. - Debe ser realizada por un laboratorio acreditado por el IDEAM"
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificado de uso de suelo: 1 Original(es) (Concepto uso del suelo)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Evaluación ambiental del vertimiento: 1 Original(es) (Evaluación ambiental del vertimiento)",
                        "anotaciones":"Anotaciones Adicionales: Debe contener lo establecido en el Artículo 43 del Decreto 3930 de 2010. Deben ser elaborados por firmas especializadas o por profesionales calificados."
                    },
                    {
                        "type":"documento",
                        "titulo":"Plan de Gestión del Riesgo para el Manejo del Vertimiento: 1 Original(es) (Plan de Gestión del Riesgo para el manejo del vertimiento)",
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
                        "titulo":"Cuando se actúe por medio de apoderado.",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado cuando se actúe por medio de apoderado)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de no ser el propietario del predio.",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Prueba idónea de la posesión o tenencia del predio:1 Original(es) (Prueba adecuada que lo acredite como tal y autorización del propietario o poseedor)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio.",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Original(es) (Prueba adecuada que lo acredite como tal)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser junta de acción comunal u otro organismo sin ánimo de lucro y/o utilidad común.",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que acredite la existencia y el reconocimiento de la personería jurídica:1 Original(es) (Documentos que acrediten la personería jurídica del solicitante Sociedades: Certificado de existenc)",
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
                        "titulo":"En caso de requerirse el usuario debe allegar la documentación faltante para su trámite."
                    },
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Comunicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Presentación personal o Autorización para notificarse"
                    },
                    {
                        "type":"documento",
                        "titulo":"Autorización para notificarse: 1 Original(es) (Autorización para notificarse en caso de no hacer presentación personal)",
                        "anotaciones":""
                    }
                ]
            },
            {
                "titulo":"Recibir la visita",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Se verificará la información aportada por el solicitante y el cumplimiento de lo establecido en el Artículo 46 del Decreto 3930 de 2010."
                    }
                ]
            }
        ]
    },
    "T17795":{
        "titulo":"Análisis de muestra de agua",
        "descripcion":"Obtener el análisis físico, químico o microbiológico del agua con el objetivo de comprobar su calidad",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=17795",
        "resultado":"Informe resultado de análisis del agua, que se obtiene en 2 Mes(es)",
        "ciudadano":[
            {
                "titulo":"Reunir documentos",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"“La fuente hídrica debe encontrarse dentro del área de la jurisdicción y aplica para ciudadanos mayores de edad y organizaciones sin ánimo de lucro”"
                    },
                    {
                        "type":"formulario",
                        "titulo":"Formulario Solicitud Servicios de Análisis de Laboratorio",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=3000&A=75111"
                    }
                ]
            },
            {
                "titulo":"Recibir capacitación sobre la toma de muestra",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Allegar la muestra para el análisis pertinente.",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Reclamar resultados del análisis",
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
                "titulo":"Reunir documentos",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"“La fuente hídrica debe encontrarse dentro del área de la jurisdicción y aplica para ciudadanos mayores de edad y organizaciones sin ánimo de lucro”"
                    },
                    {
                        "type":"formulario",
                        "titulo":"Formulario Solicitud Servicios de Análisis de Laboratorio",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=3000&A=75111"
                    }
                ]
            },
            {
                "titulo":"Recibir capacitación sobre la toma de muestra",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Allegar la muestra para el análisis pertinente.",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Reclamar resultados del análisis",
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
                "titulo":"Reunir documentos",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"“La fuente hídrica debe encontrarse dentro del área de la jurisdicción y aplica para ciudadanos mayores de edad y organizaciones sin ánimo de lucro”"
                    }
                ]
            },
            {
                "titulo":"Recibir capacitación sobre la toma de muestra",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Allegar la muestra para el análisis pertinente.",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Reclamar resultados del análisis",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            }
        ]
    },
    "T29892":{
        "titulo":"Certificación para importar o exportar productos forestales en segundo grado de transformación y los productos de la flora silvestre no obtenidos mediante aprovechamiento del medio natural",
        "descripcion":"Obtener la certificación para importar o exportar productos forestales en segundo grado de transformación, flor cortada, follaje y demás productos de la flora silvestre no obtenidos mediante aprovechamiento del medio natural.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=29892",
        "resultado":"Certificación para importar o exportar productos de la flora silvestre no obtenidos mediante aprovechamiento del medio natural, que se obtiene en 60 Día(s) - hábil(es)",
        "organizacion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para el trámite",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Solicitud: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Esta solicitud puede ser verbal, escrita o a través de medios electrónicos de acuerdo con los canales de atención de la autoridad ambiental"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Encontrarse registrado en el libro de operaciones"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Tener el informe anual de actividades con la información señalada en el numeral 3.2 del artículo 3 de la Resolución 454 de 2011"
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
    "T29991":{
        "titulo":"Permiso ambiental para jardines botánicos",
        "descripcion":"Permiso ambiental de los jardines botánicos que coleccionan plantas vivas científicamente organizadas, y las demás contempladas en el Artículo 2 de la Ley 299 de 1996.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=29991",
        "resultado":"Permiso ambiental para jardines botánicos., que se obtiene en 80 Día(s) - hábil(es)",
        "ciudadano":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para el trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica."
                    },
                    {
                        "type":"documento",
                        "titulo":"Estatutos de la sociedad: 1 Copia(s)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Concepto previo del Instituto de Investigación de recursos Biológicos Alexander Von Humboldt: 1 Original(es)",
                        "anotaciones":""
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando de actúe mediante apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado)",
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
                "titulo":"Radicar los documentos",
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
                "titulo":"Comunicarse y/o notificarse del auto de inicio del trámite",
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
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para el trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica."
                    },
                    {
                        "type":"documento",
                        "titulo":"Estatutos de la sociedad: 1 Copia(s)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Concepto previo del Instituto de Investigación de recursos Biológicos Alexander Von Humboldt: 1 Original(es)",
                        "anotaciones":""
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando de actúe mediante apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado)",
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
                "titulo":"Radicar los documentos",
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
                "titulo":"Comunicarse y/o notificarse del auto de inicio del trámite",
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
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para el trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica."
                    },
                    {
                        "type":"documento",
                        "titulo":"Estatutos de la sociedad: 1 Copia(s)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Concepto previo del Instituto de Investigación de recursos Biológicos Alexander Von Humboldt: 1 Original(es)",
                        "anotaciones":""
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando de actúe mediante apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado)",
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
                "titulo":"Radicar los documentos",
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
                "titulo":"Comunicarse y/o notificarse del auto de inicio del trámite",
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
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para el trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica."
                    },
                    {
                        "type":"documento",
                        "titulo":"Estatutos de la sociedad: 1 Copia(s)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Concepto previo del Instituto de Investigación de recursos Biológicos Alexander Von Humboldt: 1 Original(es)",
                        "anotaciones":""
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando de actúe mediante apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado)",
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
                "titulo":"Radicar los documentos",
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
                "titulo":"Comunicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            }
        ]
    },
    "T20603":{
        "titulo":"Permiso de recolección de especímenes de especies silvestres de la diversidad biológica con fines de investigación científica no comercial - Corporaciones",
        "descripcion":"Obtener la autorización para recolectar especímenes de especies silvestres de la diversidad biológica con fines de investigación científica no comercial.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=20603",
        "resultado":"Permiso individual de recolección o marco de recolección., que se obtiene en 60 Día(s) - hábil(es)",
        "ciudadano":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[ ],
            "casos":[
                {
                    "titulo":"Para permiso individual de recolección",
                    "subpasos":[
                        {
                            "type":"formulario",
                            "titulo":"FORMATO DE SOLICITUD PERMISO INDIVIDUAL DE RECOLECCIÓN",
                            "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=1829&A=24354"
                        },
                        {
                            "type":"documento",
                            "titulo":"Cédula de ciudadanía :1 Fotocopia(s)",
                            "anotaciones":"Anotaciones Adicionales: del responsable del proyecto."
                        },
                        {
                            "type":"documento",
                            "titulo":"Currículum vitae del responsable del proyecto y de su grupo de trabajo:1 Original(es)",
                            "anotaciones":""
                        },
                        {
                            "type":"documento",
                            "titulo":"Acto administrativo de levantamiento de vedas:1 Copia(s)",
                            "anotaciones":"Anotaciones Adicionales: de ser el caso."
                        },
                        {
                            "type":"documento",
                            "titulo":"Información sobre si la recolección involucra especies amenazadas o endémicas:1 Original(es)",
                            "anotaciones":""
                        },
                        {
                            "type":"documento",
                            "titulo":"Certificación sobre la presencia o no de grupos étnicos en el territorio en el cual se realizará la recolección:1 Original(es)",
                            "anotaciones":"Anotaciones Adicionales: expedida por el Ministerio del Interior."
                        },
                        {
                            "type":"documento",
                            "titulo":"Acta de protocolización de la consulta previa cuando sea necesaria:1 Original(es)",
                            "anotaciones":"Anotaciones Adicionales: expedida por el Ministerio del Interior."
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
        }
    ],
    "extranjero":[
        {
            "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
            "subpasos": [ 
        ],
        "casos":[
            {
                "titulo":"Para permiso individual de recolección",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"FORMATO DE SOLICITUD PERMISO INDIVIDUAL DE RECOLECCIÓN",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=1829&A=24354"
                    },
                    {
                        "type":"documento",
                        "titulo":"Cédula de extranjería:1 Fotocopia(s)",
                        "anotaciones":"Anotaciones Adicionales: del responsable del proyecto."
                    },
                    {
                        "type":"documento",
                        "titulo":"Currículum vitae del responsable del proyecto y de su grupo de trabajo:1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Acto administrativo de levantamiento de vedas:1 Copia(s)",
                        "anotaciones":"Anotaciones Adicionales: de ser el caso."
                    },
                    {
                        "type":"documento",
                        "titulo":"Información sobre si la recolección involucra especies amenazadas o endémicas:1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificación sobre la presencia o no de grupos étnicos en el territorio en el cual se realizará la recolección:1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: expedida por el Ministerio del Interior."
                    },
                    {
                        "type":"documento",
                        "titulo":"Acta de protocolización de la consulta previa cuando sea necesaria:1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: expedida por el Ministerio del Interior."
                    },
                    {
                        "type":"documento",
                        "titulo":"Carta de la institución Nacional de Investigación manifestando que acepta su participación en el respectivo proyecto de investigación:1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Acuerdo de cooperación suscrito entre la institución de educación superior o instituto de investigación extranjero y la institución Nacional de investigación respectiva:1 Copia(s)",
                        "anotaciones":"Anotaciones Adicionales: documento traducido al castellano y debidamente legalizado o apostillado según el caso."
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
    }
    ],
    "institucion":[
        {
            "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
            "subpasos":[        ],
        "casos":[
            {
                "titulo":"Para permiso individual de recolección",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Acto administrativo de levantamiento de vedas:1 Copia(s)",
                        "anotaciones":"Anotaciones Adicionales: de ser el caso."
                    },
                    {
                        "type":"documento",
                        "titulo":"Información sobre si la recolección involucra especies amenazadas o endémicas:1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Certificación sobre la presencia o no de grupos étnicos en el territorio en el cual se realizará la recolección:1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: expedida por el Ministerio del Interior."
                    },
                    {
                        "type":"documento",
                        "titulo":"Acta de protocolización de la consulta previa cuando sea necesaria:1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: expedida por el Ministerio del Interior."
                    }
                ]
            },
            {
                "titulo":"Para permiso marco de recolección si es institución de investigación nacional",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"FORMATO DE SOLICITUD PERMISO MARCO DE RECOLECCIÓN",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=1830&A=24357"
                    },
                    {
                        "type":"documento",
                        "titulo":"Indicación de los programas de investigación:1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Los programas de investigación científica deben contener las diferentes líneas temáticas o campos de investigación asociados a las actividades de recolección, y que cuenten con grupos de investigación categorizados ante Colciencias. Las instituciones de educación superior deberán estar aprobadas por el Ministerio de Educación Nacional así como sus programas académicos relacionados con las actividades de recolección. Adicionalmente, deberán contar con una dependencia responsable de la administración de los programas de investigación científica y con un sistema de información interno de registro y seguimiento de proyectos de investigación."
                    },
                    {
                        "type":"documento",
                        "titulo":"Relación de los investigadores vinculados a cada programa dentro de la institución:1 Original(es)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Breve descripción de los programas a realizar:1 Original(es)",
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
    }
    ],
    "organizacion":[
        {
            "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
            "subpasos":[
                {
                    "type":"condicion",
                    "titulo":"Condición: No debe presentar ningún soporte ya que la institución verificará que usted la cumpla estar inscrito en la cámara de comercio como persona jurídica"
                }
            ],
            "casos":[
                {
                    "titulo":"Para permiso individual de recolección",
                    "subpasos":[
                        {
                            "type":"documento",
                            "titulo":"Acto administrativo de levantamiento de vedas:1 Copia(s)",
                            "anotaciones":"Anotaciones Adicionales: de ser el caso."
                        },
                        {
                            "type":"documento",
                            "titulo":"Información sobre si la recolección involucra especies amenazadas o endémicas:1 Original(es)",
                            "anotaciones":""
                        },
                        {
                            "type":"documento",
                            "titulo":"Certificación sobre la presencia o no de grupos étnicos en el territorio en el cual se realizará la recolección:1 Original(es)",
                            "anotaciones":"Anotaciones Adicionales: expedida por el Ministerio del Interior."
                        },
                        {
                            "type":"documento",
                            "titulo":"Acta de protocolización de la consulta previa cuando sea necesaria:1 Original(es)",
                            "anotaciones":"Anotaciones Adicionales: expedida por el Ministerio del Interior."
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
        }
    ]
    },
    "T17649":{
        "titulo":"Registro del libro de operaciones forestales",
        "descripcion":"Registrar el libro de operaciones de las empresas de transformación primaria de productos forestales, las de transformación secundaria de productos forestales o de productos terminados, las de comercialización forestal y las de comercialización y transformación secundaria de productos forestales",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=17649",
        "resultado":"Registro del libro de operaciones, que se obtiene en 1 Día(s) - hábil(es)",
        "organizacion":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"documento",
                        "titulo":"Libro de operaciones: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Con las casillas exigidas según la norma http://www.corpochivor.gov.co/wp-content/uploads/2015/11/ANEXO-21-SOLICITUD-REGISTRO-DE-LIBRO-DE-OPERACIONES.xlsx"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Condición: No debe presentar ningún soporte ya que la institución verificará que usted la cumpla estar inscrito en la cámara de comercio como persona jurídica"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando se actúe por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es)",
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
            }
        ]
    },
    "T19794":{
        "titulo":"Permiso de ocupación de cauces, playas y lechos",
        "descripcion":"Autorización permanente o transitoria para la construcción de obras que ocupen el cauce de una corriente o depósito de agua.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=19794",
        "resultado":"Permiso de ocupación de cauces u obras hidráulicas., que se obtiene en 60 Día(s) - hábil(es)",
        "ciudadano":[
            {
                "titulo":"Reunir los documentos y cumplir las condiciones necesarias para realizar el trámite",
                "subpasos":[
                    {
                        "type":"formulario",
                        "titulo":"Formulario Único Nacional de Solicitud de Ocupación de Cauces, Playas y Lechos",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=523&A=15979"
                    },
                    {
                        "type":"condicion",
                        "titulo":"No debe presentar ningún soporte ya que la institución verificará que usted la cumpla ser propietario del predio"
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano de localización de la fuente hídrica en el área de influencia: 1 Original(es) (lano de localización de la fuente hídrica en el área de influencia)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Planos y memorias de cálculo estructural e hidráulico de las obras necesarias para la captación, control, conducción, almacenamiento o aprovechamiento del cauce: 1 Original(es) (Planos y memorias de cálculo estructural e hidráulico de las obras)",
                        "anotaciones":""
                    },
                    {
                        "type":"condicion",
                        "titulo":"No debe presentar ningún soporte ya que la institución verificará que usted la cumpla las características físicas del predio deben corresponder con la información contenida en la cédula catastral y con la matrícula inmobiliaria"
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio",
                        "subpasos":[
                            
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
                "titulo":"Comunicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Condición: No debe presentar ningún soporte ya que la institución verificará que usted la cumpla presentación personal o Autorización para notificarse"
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
                        "titulo":"No debe presentar ningún soporte ya que la institución verificará que usted la cumpla.Se verificará que la obra o construcción este ocupando el cauce que se solicitó"
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
                        "titulo":"Formulario Único Nacional de Solicitud de Ocupación de Cauces, Playas y Lechos",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=523&A=15979"
                    },
                    {
                        "type":"condicion",
                        "titulo":"Condición: No debe presentar ningún soporte ya que la institución verificará que usted la cumpla ser propietario del predio"
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano de localización de la fuente hídrica en el área de influencia: 1 Original(es) (lano de localización de la fuente hídrica en el área de influencia)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Planos y memorias de cálculo estructural e hidráulico de las obras necesarias para la captación, control, conducción, almacenamiento o aprovechamiento del cauce: 1 Original(es) (Planos y memorias de cálculo estructural e hidráulico de las obras)",
                        "anotaciones":""
                    },
                    {
                        "type":"condicion",
                        "titulo":"No debe presentar ningún soporte ya que la institución verificará que usted la cumpla las características físicas del predio deben corresponder con la información contenida en la cédula catastral y con la matrícula inmobiliaria"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio",
                        "subpasos":[
                            
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
                "titulo":"Comunicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Condición: No debe presentar ningún soporte ya que la institución verificará que usted la cumpla presentación personal o Autorización para notificarse"
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
                        "titulo":"No debe presentar ningún soporte ya que la institución verificará que usted la cumpla.Se verificará que la obra o construcción este ocupando el cauce que se solicitó"
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
                        "titulo":"Formulario Único Nacional de Solicitud de Ocupación de Cauces, Playas y Lechos",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=523&A=15979"
                    },
                    {
                        "type":"condicion",
                        "titulo":"No debe presentar ningún soporte ya que la institución verificará que usted la cumpla ser propietario del predio"
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano de localización de la fuente hídrica en el área de influencia: 1 Original(es) (lano de localización de la fuente hídrica en el área de influencia)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Planos y memorias de cálculo estructural e hidráulico de las obras necesarias para la captación, control, conducción, almacenamiento o aprovechamiento del cauce: 1 Original(es) (Planos y memorias de cálculo estructural e hidráulico de las obras)",
                        "anotaciones":""
                    },
                    {
                        "type":"condicion",
                        "titulo":"No debe presentar ningún soporte ya que la institución verificará que usted la cumpla las características físicas del predio deben corresponder con la información contenida en la cédula catastral y con la matrícula inmobiliaria"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Copia(s) (Planos y memorias de cálculo estructural e hidráulico de las obras)",
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
                        "descripcion":"Para proyectos con un valor superior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido en el artículo 96 de la ley 633 de 2000. Para proyectos con un valor inferior a 2.115 SMMLV, la tarifa de evaluación se liquida según lo establecido la Res. 1280 de 2010 y la Res. 711 de 2019 emitida por la Corporación Autónoma Regional de Chivor – CORPOCHIVOR ",
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
                "titulo":"Comunicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Condición: No debe presentar ningún soporte ya que la institución verificará que usted la cumpla presentación personal o Autorización para notificarse"
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
                        "titulo":"No debe presentar ningún soporte ya que la institución verificará que usted la cumpla.Se verificará que la obra o construcción este ocupando el cauce que se solicitó"
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
                        "titulo":"Formulario Único Nacional de Solicitud de Ocupación de Cauces, Playas y Lechos",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=523&A=15979"
                    },
                    {
                        "type":"condicion",
                        "titulo":"No debe presentar ningún soporte ya que la institución verificará que usted la cumpla estar inscrito en la cámara de comercio como persona jurídica"
                    },
                    {
                        "type":"condicion",
                        "titulo":"No debe presentar ningún soporte ya que la institución verificará que usted la cumpla ser propietario del predio"
                    },
                    {
                        "type":"documento",
                        "titulo":"Plano de localización de la fuente hídrica en el área de influencia: 1 Original(es) (lano de localización de la fuente hídrica en el área de influencia)",
                        "anotaciones":""
                    },
                    {
                        "type":"documento",
                        "titulo":"Planos y memorias de cálculo estructural e hidráulico de las obras necesarias para la captación, control, conducción, almacenamiento o aprovechamiento del cauce: 1 Original(es) (Planos y memorias de cálculo estructural e hidráulico de las obras)",
                        "anotaciones":""
                    },
                    {
                        "type":"condicion",
                        "titulo":"No debe presentar ningún soporte ya que la institución verificará que usted la cumpla las características físicas del predio deben corresponder con la información contenida en la cédula catastral y con la matrícula inmobiliaria"
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO_AUTOLIQUIDACION_CATEGORIA 2",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=2827&A=102312"
                    }
                ],
                "casos":[
                    {
                        "titulo":"Cuando actue por medio de apoderado",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Poder:1 Original(es) (Poder debidamente otorgado)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser el tenedor del predio",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Autorización del propietario o poseedor del predio:1 Copia(s) (Planos y memorias de cálculo estructural e hidráulico de las obras)",
                                "anotaciones":""
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de ser junta de accción comunal u otro organismo sin ánimo de lucro y/o utilidad común",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que acredite la existencia y el reconocimiento de la personería jurídica:1 Fotocopia(s) (Documento que acredite la existencia y el reconocimiento de la personería jurídica)",
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
                "titulo":"Comunicarse y/o notificarse del auto de inicio del trámite",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Condición: No debe presentar ningún soporte ya que la institución verificará que usted la cumpla presentación personal o Autorización para notificarse"
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
                        "titulo":"No debe presentar ningún soporte ya que la institución verificará que usted la cumpla.Se verificará que la obra o construcción este ocupando el cauce que se solicitó"
                    }
                ]
            }
        ]
    },
    "T29887":{
        "titulo":"Acreditación o Certificación de las inversiones realizadas en control, conservación y mejoramiento del medio ambiente para obtener descuento en el impuesto sobre la renta",
        "descripcion":"Acreditar para el descuento del impuesto de renta, que las inversiones corresponden al control, conservación y mejoramiento del medio ambiente; y que no se realizan por mandato de una autoridad ambiental para mitigar el impacto producido por la obra o actividad objeto de una licencia ambiental.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=29887",
        "resultado":"Acreditación o certificación de las inversiones realizadas en control, conservación y mejoramiento del medio ambiente para obtener descuento en el impuesto sobre la renta. , que se obtiene en 30 Día(s) - hábil(es)",
        "organizacion":[
            {
                "titulo":"Reunir documentos y cumplir condiciones",
                "subpasos":[
                    {
                        "type":"condicion",
                        "titulo":"Estar inscrito en la cámara de comercio como persona jurídica."
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO ÚNICO RESOLUCIÓN 509 DE 2018",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=5091&A=76302"
                    },
                    {
                        "type":"documento",
                        "titulo":"Carta de solicitud: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Señalar bajo la gravedad del juramento que la inversión no se realiza por mandato de una autoridad ambiental para mitigar el impacto producido por la obra o actividad objeto de una licencia ambiental, y que la misma no involucra inversiones respecto de las cuales, de acuerdo con el Artículo 1.2.1.18.51 del Decreto 1625 de 2016, no otorgan derecho al descuento."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento técnico: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Descripción detallada de la inversión en control del medio ambiente, o conservación y mejoramiento del medio ambiente, para lo cual se debe indicar lo siguiente: - Objeto y finalidad de la inversión en control del medio ambiente, o conservación y mejoramiento del medio ambiente. - Describir en que consiste la inversión en control del medio ambiente o, conservación y mejoramiento del medio ambiente de acuerdo con las definiciones previstas en el Artículo 1.2.1.18.53 del Decreto 1625 de 2016. - Rubro de la inversión en control del medio ambiente o conservación y mejoramiento del medio ambiente de acuerdo con lo previsto en el Artículo 1.2.1.18.53 del Decreto 1625 de 2016. - Ubicación geográfica de la inversión indicando la dirección y coordenadas de acuerdo con el sistema MAGNA SIRGAS, en el caso que se requiera. - Estado de ejecución de la inversión. En el caso en que la inversión ya se haya realizado, se deberá indicar la fecha y año de ejecución, los componentes, actividades y/u obras de la inversión, valor de la misma, y se deberán presentar los documentos que evidencien la finalización de la obra. Cuando se trate de un proyecto de inversión que se realizará por etapas, se deberán describir dichas fases o etapas, el tiempo de ejecución, las inversiones que contempla cada una de ellas y el valor de las inversiones."
                    },
                    {
                        "type":"documento",
                        "titulo":"Documento Técnico: 1 Original(es)",
                        "anotaciones":"Anotaciones Adicionales: Indicar las normas o disposiciones ambientales a las cuales se pretende dar cumplimiento, en caso que aplique."
                    },
                    {
                        "type":"formulario",
                        "titulo":"FORMATO 5 RESOLUCIÓN 509 DE 2018",
                        "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=5090&A=76300"
                    }
                ],
                "casos":[
                    {
                        "titulo":"En caso de inversión en conservación y mejoramiento del medio ambiente, para determinar los beneficios ambientales directos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento técnico:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Identificar si la inversión en mejoramiento del medio ambiente, de acuerdo con la definición del literal b) del artículo 1.2.1.18.51 del Decreto 1625 de 2016, corresponde a la ejecución de proyectos encaminados a la preservación, restauración, regeneración, repoblación de recursos naturales y del medio ambiente que correspondan a: - El desarrollo de planes y políticas ambientales nacionales previstas en el Plan Nacional de Desarrollo o formuladas por el Ministerio de Ambiente y Desarrollo Sostenible. - Se enmarquen en la implementación de planes ambientales y sea que estén aprobados por el Ministerio de Ambiente y Desarrollo Sostenible o por las autoridades ambientales regionales, la meta ambiental que se quiere alcanzar, junto con las actividades a realizar donde sea necesaria la inversión acreditable para el beneficio tributario, de tal manera que la autoridad ambiental pueda hacer control y seguimiento en el cumplimiento de lo planteado."
                            }
                        ]
                    },
                    {
                        "titulo":"En caso de inversión en control del medio ambiente para efectos de medir y verificar los beneficios ambientales directos",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento que acredite la obtención, verificación, procesamiento, vigilancia y seguimiento o monitoreo del estado de la calidad, comportamiento y uso de los recursos naturales renovables:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: y del medio ambiente, variables o parámetros ambientales, vertimientos, residuos y/o emisiones"
                            },
                            {
                                "type":"documento",
                                "titulo":"Documento técnico:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Señalar, cuantificar y/o cualificar los beneficios ambientales directos que tiene la inversión en control del medio ambiente o conservación y mejoramiento del medio ambiente, soportándolos técnicamente y de acuerdo con los parámetros y definiciones previstas en el Decreto 1625 de 2016."
                            },
                            {
                                "type":"formulario",
                                "titulo":"FORMATO 1 RESOLUCIÓN 509 DE 2018",
                                "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=5086&A=76289"
                            },
                            {
                                "type":"formulario",
                                "titulo":"FORMATO 2 RESOLUCIÓN 509 DE 2018",
                                "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=5087&A=76291"
                            },
                            {
                                "type":"formulario",
                                "titulo":"FORMATO 3 RESOLUCIÓN 509 DE 2018",
                                "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=5088&A=76294"
                            },
                            {
                                "type":"formulario",
                                "titulo":"FORMULARIO 4 RESOLUCIÓN 509 DE 2018",
                                "url":"http://tramites1.suit.gov.co/registro-web/suit_descargar_archivo?F=5089&A=76296"
                            }
                        ]
                    },
                    {
                        "titulo":"En el caso de que la inversión se trate de bienes, equipos o maquinaria destinados a proyectos, programas o actividades de reducción en el consumo de energía y/o eficiencia energética.",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento Técnico:1 Copia(s)",
                                "anotaciones":"Anotaciones Adicionales: Cuando corresponda a la implementación de metas ambientales concertadas con el Ministerio de Ambiente y Desarrollo Sostenible, para el desarrollo de las estrategias, planes y programa de ahorro y eficiencia energética establecidos por el Ministerio de Minas y Energía, según el (Literal e) del artículo 1.2.1.18.54 del Decreto 1625 de 2016). Concepto emitido por la Unidad de Planeación Minero Energético (UPME) a nombre del titular de la inversión en el que conste la acción y/o medida en la que se enmarca la solicitud y en cuánto contribuye el proyecto a las metas establecidas en la Resolución 585 de 2017 o la norma que la modifique, sustituye o derogue."
                            }
                        ]
                    },
                    {
                        "titulo":"En el caso de que la solicitud corresponda a medidas de eficiencia energética en energía eléctrica en iluminación y mejora de sistemas de alumbrado público",
                        "subpasos":[
                            {
                                "type":"condicion",
                                "titulo":"Si el productor (importador o fabricante) se encuentra dentro del ámbito de aplicación de la Resolución 1511 de 2010 o aquellas normas que la modifiquen, sustituyan o complemente: y haga parte de la solicitud, contar con el acto administrativo que aprueba el respectivo Sistema de Recolección, la cual verificará el respectivo registro."
                            }
                        ]
                    },
                    {
                        "titulo":"En el caso de que la solicitud se enmarque en las acciones de mejoramiento en edificaciones",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Comunicación:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: - Comunicación expedida por el ente certificador nacional o internacional en la cual conste que se adelanta un proceso de certificación nacional o internacional en construcción sostenible en su fase de diseño. - Cuando la solicitud se enmarque en las acciones de diseño e implementación de Sistemas de Gestión de la Energía -SGEn, se deberá anexar el certificado en sistemas de gestión de la energía emitido por un ente certificador acreditado en ISO 50001 o NTC/ISO 50001."
                            }
                        ]
                    },
                    {
                        "titulo":"En el caso de que la solicitud se enmarque en las acciones y medidas para el sector transporte",
                        "subpasos":[
                            {
                                "type":"documento",
                                "titulo":"Documento técnico:1 Original(es)",
                                "anotaciones":"Anotaciones Adicionales: Se deberá suministrar la siguiente información: - Ahorro de combustible frente a la operación con vehículos convencionales de similares características, con la muestra de cálculo que soporte los datos presentados. - Adicionalmente, para los sistemas de transporte masivo, se deberá señalar a qué sistema o componente del sistema de transporte masivo se vincularán los equipos objeto de la solicitud. - Cuando la solicitud corresponda a medidas de eficiencia energética en energía eléctrica en aire acondicionado y refrigeración, se deberá anexar certificación por parte del fabricante que especifique que el equipo o sistema no contenga o requiera para su producción u operación las sustancias listadas en los Anexos del Protocolo de Montreal, y que no posean un potencial de calentamiento global mayor a 100 GWP, según lo listado en el informe de evaluación del IPCC (Intergovernmental Panel on Climate Change). - Cuando la solicitud corresponda a implementación de distritos térmicos, se deberá anexar certificación por parte del fabricante que especifique que el equipo o sistema no contenga o requiera para su producción u operación las sustancias listadas en los Anexos del Protocolo de Montreal."
                            }
                        ]
                    }
                ]
            },
            {
                "titulo":"Radicar los documentos",
                "subpasos":[
                    {
                        "type":"canal",
                        "presencial":"true"
                    }
                ]
            },
            {
                "titulo":"Notificarse y/o comunicarse del auto de inicio del trámite",
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
            }
        ]
    },
    "T26524":{
        "titulo":"Georeferenciación - SIAT WEB",
        "descripcion":"Obtener acceso a través de la herramienta i3Geo adaptada por la Corporación para entes territoriales, instituciones educativas, docentes e investigadores y comunidad en general, que utilizan la información geográfica para el conocimiento y planificación del territorio.",
        "url":"http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=26524",
        "resultado":"Obtener ubicación geografica de la jurisdicción, que se obtiene de forma inmediata",
        "ciudadano":[
            {
                "titulo":"Se ingresa a la URL:  http://www.corpochivor.gov.co/es/georeferenciacion. La plataforma SIAT WEB 3.0 está dispuesta en las direcciones electrónicas: Local (municipios de la Jurisdicción de Corpochivor)   http://siatweb.corpochivor.gov.co/cc  y Regional (municipios de la Boyacá)  http://siatweb.corpochivor.gov.co/regional; luego en el bloque derecho se selecciona los temas a realizar la consulta",
                "subpasos":[
                    {
                        "type":"canal",
                        "web":"true"
                    }
                ]
            }
        ],
        "extranjero":[
            {
                "titulo":"Se ingresa a la URL:  http://www.corpochivor.gov.co/es/georeferenciacion. La plataforma SIAT WEB 3.0 está dispuesta en las direcciones electrónicas: Local (municipios de la Jurisdicción de Corpochivor)   http://siatweb.corpochivor.gov.co/cc  y Regional (municipios de la Boyacá)  http://siatweb.corpochivor.gov.co/regional; luego en el bloque derecho se selecciona los temas a realizar la consulta",
                "subpasos":[
                    {
                        "type":"canal",
                        "web":"true"
                    }
                ]
            }
        ],
        "institucion":[
            {
                "titulo":"Se ingresa a la URL:  http://www.corpochivor.gov.co/es/georeferenciacion. La plataforma SIAT WEB 3.0 está dispuesta en las direcciones electrónicas: Local (municipios de la Jurisdicción de Corpochivor)   http://siatweb.corpochivor.gov.co/cc  y Regional (municipios de la Boyacá)  http://siatweb.corpochivor.gov.co/regional; luego en el bloque derecho se selecciona los temas a realizar la consulta",
                "subpasos":[
                    {
                        "type":"canal",
                        "web":"true"
                    }
                ]
            }
        ],
        "organizaciones":[
            {
                "titulo":"Se ingresa a la URL:  http://www.corpochivor.gov.co/es/georeferenciacion. La plataforma SIAT WEB 3.0 está dispuesta en las direcciones electrónicas: Local (municipios de la Jurisdicción de Corpochivor)   http://siatweb.corpochivor.gov.co/cc  y Regional (municipios de la Boyacá)  http://siatweb.corpochivor.gov.co/regional; luego en el bloque derecho se selecciona los temas a realizar la consulta",
                "subpasos":[
                    {
                        "type":"canal",
                        "web":"true"
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