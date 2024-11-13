import { useQuery } from "@tanstack/react-query"  

export const useGetSample  = () => {
    const fetchFunction = async() => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        ); 
        return response.json();
    }
    
    return useQuery({
        queryKey: ['repoData'],
        queryFn: fetchFunction,
    }); 
};