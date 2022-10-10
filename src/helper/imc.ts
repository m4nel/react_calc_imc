

export type levels = {
    title: string;
    color: string;
    icon: "down" | "up";
    imc: number[];
    yourImc?: number;
}

export const level: levels[] = [
    {  title: "Magreza", color: "#96A3AB", icon: "down", imc: [0, 18.59] },
    {  title: "Normal", color: "#0EAD69", icon: "up", imc: [18.6, 24.99] },
    {  title: "Sobrepeso", color: "#E2B039", icon: "down", imc: [25, 30] },  
    {  title: "Obesidade", color: "#C3423F", icon: "down", imc: [30.1, 99] },
]

export const calculateImc = (Altura: number, Peso: number) => {

    const imc =  Peso / (Altura * Altura) ;


for (let i in level){
    if(imc > level[i].imc[0] && imc < level[i].imc[1] ) {
       let levelCopy: levels = {...level[i] };
        levelCopy.yourImc = parseFloat(imc.toFixed(2))
        
return levelCopy
        }
}

return alert("Digite um valor valido") ,null

}