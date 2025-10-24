export const formattedDate = (timestamp:number)=> {

   return  new Date(+timestamp).toLocaleDateString("es-ES", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  
});
}