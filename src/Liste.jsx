import Yazi from "./Yazi"
function Liste({yazilar}){
   
    return(
        <>
            <ul style={{color: 'pink'}}>
              {

       yazilar.map(function(yazi) {

          return <Yazi key={yazi.id} {...yazi} /> }
        
        )
      }
          </ul>
        </>
    
     
    )
  }
export default Liste 