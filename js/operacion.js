class persona{
    constructor(nombre,edad,dni,sexo,peso,altura,nac){
        this.nombre=nombre
        this.edad=edad
        this.dni=dni
        this.sexo=sexo
        this.peso=peso
        this.altura=altura
        this.nac=nac
    }

    mostrarGeneracion(){ 
        
        let anio=new Date(this.nac).getFullYear();


        if(anio>=1930 && anio<=1948){
            let articulo=document.getElementById('generacion')

            let titulo=document.createElement('h3')
            titulo.textContent=this.nombre+' pertenece a la Generacion Silent'
            
            let p1=document.createElement('p')
            p1.textContent='Poblacion de esta generacion: 6.300.000'

            let p2=document.createElement('p')
            p2.textContent='Circunstancia historica: conflicto belico'

            let p3=document.createElement('p')
            p3.textContent='Rasgo caracteristico: Austeridad'

            articulo.appendChild(titulo)
            articulo.appendChild(p1)
            articulo.appendChild(p2)
            articulo.appendChild(p3)
        }
        if(anio>=1949 && anio<=1968){
            let articulo=document.getElementById('generacion')

            let titulo=document.createElement('h3')
            titulo.textContent=this.nombre+' pertenece a la Generacion Baby'
            
            let p1=document.createElement('p')
            p1.textContent='Poblacion de esta generacion: 12.200.000'

            let p2=document.createElement('p')
            p2.textContent='Circunstancia historica: paz y explosion demografica'

            let p3=document.createElement('p')
            p3.textContent='Rasgo caracteristico: Ambicion'

            articulo.appendChild(titulo)
            articulo.appendChild(p1)
            articulo.appendChild(p2)
            articulo.appendChild(p3)
        }
        if(anio>=1969 && anio<=1980){
            let articulo=document.getElementById('generacion')

            let titulo=document.createElement('h3')
            titulo.textContent=this.nombre+' pertenece a la Generacion X'
            
            let p1=document.createElement('p')
            p1.textContent='Poblacion de esta generacion: 9.300.000'

            let p2=document.createElement('p')
            p2.textContent='Circunstancia historica: crisis del 73 y transicion española'

            let p3=document.createElement('p')
            p3.textContent='Rasgo caracteristico: Obsesion por el exito'

            articulo.appendChild(titulo)
            articulo.appendChild(p1)
            articulo.appendChild(p2)
            articulo.appendChild(p3)
        }
        if(anio>=1981 && anio<=1993){
            let articulo=document.getElementById('generacion')

            let titulo=document.createElement('h3')
            titulo.textContent=this.nombre+' pertenece a la Generacion Y'
            
            let p1=document.createElement('p')
            p1.textContent='Poblacion de esta generacion: 7.200.000'

            let p2=document.createElement('p')
            p2.textContent='Circunstancia historica: Inicio de la digitalizacion'

            let p3=document.createElement('p')
            p3.textContent='Rasgo caracteristico: frustracion'

            articulo.appendChild(titulo)
            articulo.appendChild(p1)
            articulo.appendChild(p2)
            articulo.appendChild(p3)
        }
        if(anio>=1994 && anio<=2010){
            let articulo=document.getElementById('generacion')

            let titulo=document.createElement('h3')
            titulo.textContent=this.nombre+' pertenece a la Generacion Z'
            
            let p1=document.createElement('p')
            p1.textContent='Poblacion de esta generacion: 7.800.000'

            let p2=document.createElement('p')
            p2.textContent='Circunstancia historica: expansion masiva de internet'

            let p3=document.createElement('p')
            p3.textContent='Rasgo caracteristico: Irreverencia'

            articulo.appendChild(titulo)
            articulo.appendChild(p1)
            articulo.appendChild(p2)
            articulo.appendChild(p3)
        }
        

    }

    esMayorDeEdad(){
        let diaActual = new Date();
        let date=new Date(this.nac)

        if(date.getFullYear() < diaActual.getFullYear()){
            let edad=diaActual.getFullYear()-date.getFullYear();
            if(edad<18){
                let articulo=document.getElementById('esMayorDeEdad')

                let titulo=document.createElement('h3')
                titulo.textContent=this.nombre+' no es mayor de 18 años'
                
                articulo.appendChild(titulo)
            }
            if(edad>18){
                let articulo=document.getElementById('esMayorDeEdad')

                let titulo=document.createElement('h3')
                titulo.textContent=this.nombre+' es mayor de 18 años'
                
                articulo.appendChild(titulo)
            }
            if(edad===18){
                if(date.getMonth()+1<diaActual.getMonth()+1){
                    let articulo=document.getElementById('esMayorDeEdad')

                    let titulo=document.createElement('h3')
                    titulo.textContent=this.nombre+' es mayor de 18 años'
                    
                    articulo.appendChild(titulo)
                }
                if(date.getMonth()+1>diaActual.getMonth()+1){
                    let articulo=document.getElementById('esMayorDeEdad')

                    let titulo=document.createElement('h3')
                    titulo.textContent=this.nombre+' no es mayor de 18 años'
                    
                    articulo.appendChild(titulo)
                }
                if(date.getMonth()+1===diaActual.getMonth()+1){
                    if(date.getDate()+1<=diaActual.getDate()+1){
                        let articulo=document.getElementById('esMayorDeEdad')

                        let titulo=document.createElement('h3')
                        titulo.textContent=this.nombre+' es mayor de 18 años'
                        
                        articulo.appendChild(titulo)
                    }else{
                        let articulo=document.getElementById('esMayorDeEdad')

                        let titulo=document.createElement('h3')
                        titulo.textContent=this.nombre+' no es mayor de 18 años'
                        
                        articulo.appendChild(titulo)
                    }
                }
            }
        }
    }

    mostrarDatos(){
        let articulo=document.getElementById('mostrarDatos')

        let titulo=document.createElement('h3')
        titulo.textContent='Datos de la persona'

        let content=document.createElement('p')
        content.textContent='Nombre y apellido:'+this.nombre
        
        let content2=document.createElement('p')
        content2.textContent='Edad:'+this.edad
        
        let content3=document.createElement('p')
        content3.textContent='DNI:'+this.dni

        let content4=document.createElement('p')
        content4.textContent='Sexo:'+this.sexo

        let content5=document.createElement('p')
        content5.textContent='Peso:'+this.peso

        let content6=document.createElement('p')
        content6.textContent='Altura:'+this.altura

        let content7=document.createElement('p')
        content7.textContent='Fecha de nacimiento:'+this.dni
        

        articulo.appendChild(titulo)
        articulo.appendChild(content)
        articulo.appendChild(content2)
        articulo.appendChild(content3)
        articulo.appendChild(content4)
        articulo.appendChild(content5)
        articulo.appendChild(content6)
        articulo.appendChild(content7)
    }
}

let pers=new persona();

cargarDatos=()=>{
    let nombre=document.getElementById('nom').value
    let edad=document.getElementById('eda').value
    let dni=document.getElementById('dni').value
    let sexo=document.getElementById('sex').value
    let peso=document.getElementById('pes').value
    let altura=document.getElementById('alt').value
    let nac=document.getElementById('nac').value

    pers=new persona(nombre,edad,dni,sexo,peso,altura,nac);
}

limpiar=()=>{
    let nombre=document.getElementById('nom')
    let edad=document.getElementById('eda')
    let dni=document.getElementById('dni')
    let sexo=document.getElementById('sex')
    let peso=document.getElementById('pes')
    let altura=document.getElementById('alt')
    let nac=document.getElementById('nac')

    nombre.value=""
    edad.value=""
    dni.value=""
    sexo.value=""
    peso.value=""
    altura.value=""
    nac.value=""
}

