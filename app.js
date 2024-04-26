const fs=require('fs');
const datosBici=require('./datosBici');
const dhBici={
    bicicletas : datosBici,

    buscarBici: function(id) {
        const biciBuscada = this.bicicletas.find((bici) => {
          return bici.id === id; 
        });
        if (biciBuscada) {
            return biciBuscada; 
          } else {
            return null; 
          }
      },
    venderBici: function(id) {
            const biciVende = this.bicicletas.map((bici)=>{
                if(bici.id===id){
                    bici.vendida = "si"
                }
                return bici
            })
    
            fs.writeFileSync("./bicicletas.json",JSON.stringify(biciVende), "utf-8")
            
            return "si"
        },
    biciSinVender : function(){
        const resultado = this.bicicletas.filter((bici)=>{
            return bici.vendida === "no"
        })
        return resultado
    },
    recaudado :function(){
        const montos = this.bicicletas.map((bici)=>{
            if(bici.vendida){
                return bici.precio
            }
            return 0
        });
        const total = montos.reduce((num,acum)=>num + acum)
        return total
    },
    
}
console.log(dhBici.buscarBici(122));
console.log(dhBici.venderBici(1));
console.log(dhBici.biciSinVender());
console.log(dhBici.recaudado());

module.exports=dhBici