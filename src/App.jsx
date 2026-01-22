import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Liste from './Liste';
import Arama from './Arama';
import React from 'react';

 function App  (){
  const[aramaMetni,setAramaMetni]=React.useState('');
  function handleSearch(event){
console.log("Arama yapılıyor:",event.target.value)
  }
   const yaziListesi= [
        { id :1,baslik:"React",yazar:"Sude",yorum_sayisi:5,puan:5},
        {id :2,baslik:"JavaScript",yazar:"Ayşe",yorum_sayisi:2,puan:4},
        {id :3,baslik:"HTML",yazar:"Ceren",yorum_sayisi:5,puan:1}
      ];
      const arananYazilar=yaziListesi.filter(function(yazi){
return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) || yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase());
      });
  const karsilama={
    "selamlama":"Merhaba",
    "baslik":"React" 
  }

function karsila(selamlama,baslik){
return selamlama+" "+baslik;
}
  return (
    <>
      <div>
        <h1 style={{color: 'pink'}}>{karsila("Merhaba","Sudee")}</h1> 

   <Arama onSearch={handleSearch} aramaMetni={aramaMetni}/>
        <hr />
    <Liste yazilar={arananYazilar}/>
    
        </div>
    </>
  )
}

export default App
