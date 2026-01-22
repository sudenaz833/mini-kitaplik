function Yazi({baslik,yazar,yorum_sayisi,puan}){
return (
    <li>
        <span>
            {baslik},{" "}
        </span>
         <span>
            {yazar},{" "}
        </span>
         <span>
            {yorum_sayisi},{" "}
        </span>
         <span>
            {puan},
        </span>
    </li>
)
}
export default Yazi