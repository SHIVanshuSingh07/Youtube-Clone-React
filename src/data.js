export const API_KEY = 'AIzaSyB8XJivnvW5mN4P-viZLO9FBsJSSQrYxvc'

export const value_converter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}