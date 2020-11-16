import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Tramite, TramiteState} from './Tramite'
import {getTramite} from '../content/Tramites'

export const TramiteWrapper : React.FC<any> = () =>{
  const { id } = useParams<{ id: string; }>();  
  return(
    <Tramite data={getTramite(id)}/>
  )
}