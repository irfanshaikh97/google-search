import React, {createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
   const [results,setResults] = useState([]);
   const [isLoading,setIsLoading] = useState(false);
   const [searchTerm,setSearchTerm] = useState('Elon Musk');

//    /videos,/images,news(type means type of url we are going to search)
   const getResults = async(type) => {
       setIsLoading(true);

       const response = await fetch(`${baseUrl}${type}`, {
           method:'GET' ,
           headers: {
            'x-user-agent': 'desktop',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': '82b449187bmsh79ffea0ca88b3bdp15b216jsn6bef853b668e'
           }
       });

       const data = await response.json();

       console.log({type,data})

       if(type.includes('/news')){
           setResults(data.entries);
       }else if(type.includes('/images')){
               setResults(data.image_results);
       } else{
           setResults(data.results);
       }
       

       setIsLoading(false);
   }

     return (
         <ResultContext.Provider value ={{ getResults, results, searchTerm, setSearchTerm, isLoading}}>
             {children}
         </ResultContext.Provider>
     )

}


export const useResultContext = () => useContext(ResultContext);
