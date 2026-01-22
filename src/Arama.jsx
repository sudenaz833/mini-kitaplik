import React from "react";
function Arama({onSearch, aramaMetni}){
  
  function handleChange(event){
props.onSearch(event)
  }
return(
    <div>
      <label htmlFor="Arama">Ara: </label>
      <input type="text"   id="Arama" onChange={handleChange} value={aramaMetni}/>
      <p>{aramaMetni} Aranıyor...</p>
      
</div>
)
}

export default Arama
