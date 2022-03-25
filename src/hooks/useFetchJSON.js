import React, { useEffect } from 'react';

export function useFetchJSON(url)  {
    const [response, setResponse] = React.useState([]);
    
    useEffect(() => {
        async function fetchData() {
            console.log(`calling useFetchJSON !!! ===> url::${ url}`);
            try {
             const res = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
                const json = await res.json();
                setResponse(json);
        } catch (error) {
            console.log(error);
        }
    }
    fetchData().then(r => console.log("response"));
}, [url]);
  return [response];
}
