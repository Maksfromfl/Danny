export default function ProductArt({category,big=false}){return <div className={`art ${category} ${big?'big':''}`}><span className="shine"></span><span className="shape"></span></div>}
