export const fetchProjectName=(id:string,data:any)=>{
const val = data.filter((item:any)=>item.id === parseInt(id))
if(val[0]?.name){
    return val[0].name
}
}

export const fetchCategoryValue=(id:string,data:any)=>{
    
    const val = data.filter((item:any)=>item.id === parseInt(id))
    if(val[0]?.user_id){
        return val[0].user_id
    }
    }

export const formatDate =(date?:Date)=> {
    var d =date ?  new Date(date) : new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}