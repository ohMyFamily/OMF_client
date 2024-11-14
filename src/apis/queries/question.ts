import { useSuspenseQuery } from "@tanstack/react-query"  

export const useGetSample  = () => {
    const fetchFunction = async() => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        ); 
        return await response.json();
    }
    
    return useSuspenseQuery({
        queryKey: ['repoData'],
        queryFn: fetchFunction, 
        staleTime: 1000 * 10, 
    }); 
};