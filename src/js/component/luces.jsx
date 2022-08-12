import React, { useEffect, useState } from "react";

const Luces = () => {
	const [shadow, setShadow] = useState(0);
         
    // const [count, setCount] = useState(0);
      
    //     useEffect(() => {
    //         setTimeout(() => {
    //             setShadow("red")
    //         },2000);
        
    //         setTimeout(() => {
    //             setShadow("yellow")
    //         },2000);
        
    //         setTimeout(() => {
    //             setShadow("green")
    //         },2000);
         
    
return (
		<div className="container">
			<div className="poste bg-dark position-absolute top-0 start-50 translate-middle"></div>
            <div className="semaforo bg-dark position-absolute top-50 start-50 translate-middle">
				<div className={`luz rounded-circle position-absolute top-0 start-50 translate-middle-x mt-3 
                    ${ shadow === "red" ? "brillo-rojo bg-danger" : "" }`} 
                    style={{ background: "red", }}
				    onClick={() => setShadow("red")}>
                </div>
				
                <div 
                    className={`luz rounded-circle position-absolute top-50 start-50 translate-middle
                    ${ shadow === "yellow" ? "brillo-amarillo bg-warning" : ""}`}
					style={{background: "yellow",}}
					onClick={() => setShadow("yellow")}>
                </div>
				
                <div 
                    className={`luz rounded-circle position-absolute bottom-0 start-50 translate-middle-x mb-3 
                    ${shadow === "green" ? "brillo-verde bg-success" : ""}`}
                    style={{background: "green",}}
                    onClick={() => setShadow("green")}></div>
			    </div>
		</div>
	);
}

export default Luces;