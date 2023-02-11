import React from "react";
import "../scc/csshv.css";




function Hojavida ({nFoto,nombresyapellidos,telefono,direccion,pais,email,nacionalidad,fechanacimiento,referencia,
                 lugarnacimiento,habilidades,perfil,formacion,cursos,experiencia1,experiencia2,experiencia3,experiencia4}) {
    return ( 
                




                <div className="container">
                <div className="row fila-informacion-personal">
                <div className=" foto col-sm-12 col-m-4 col-lg-4 col-xl-4">

               

                 <div><img src={require(`../imagenes/${nFoto}.jpg`)}/></div>


                 
                </div>
                <div className="col-sm-12 col-m-8 col-lg-8 col-xl-8 informacion-personal">
                <b>Informacion personal</b>
                <p>{nombresyapellidos}</p>
                 <p>{direccion}</p>
                 <p>{pais}</p>
                <p>{email}</p>
                 <p>{nacionalidad}</p>
                 <p>{fechanacimiento}</p>
                <p>{lugarnacimiento}</p>
                <p>{telefono}</p>
                  </div>
                </div>

               

<div className="row habilidades">

<div className="col-sm-12 col-m-8 col-lg-8 col-xl-8 habilidades">
<small>Habilidades</small>
<p>{habilidades}</p>

</div>


</div>







                <div className="row fila-perfil-laboral">
                 <div className="col-sm-12 col-m-12 col-lg-6 col-xl-6 ">
                <b> Perfil laboral</b>
                <p>{perfil}</p>
              
                           

                 
                </div>
                <div className="col-sm-12 col-m-12 col-lg-6 col-xl-6 perfil-laboral">
                <b>Formacion.</b>
                <p>{formacion}</p>
                <br></br>
                <b>Cursos</b>
                <p>{cursos}</p>
                <br></br>
                <b>Referencias</b> 
                <p>{referencia}</p>           

                
                </div>
                </div>


                <div className="row fila-experiencia-laboral">
                 <div className="col-sm-12 col-m-6 col-lg-6 col-xl-6 ">
                <b>Experiencia Laboral</b>
                <p>{experiencia1}</p>
                <p>{experiencia2}</p>
                <p>{experiencia3}</p>
                <p>{experiencia4}</p>
                
              
                           

                 
                </div>
               
                
                </div>
                

















</div>


               




     );
}

export default Hojavida;