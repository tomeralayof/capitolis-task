import React, {useState,useEffect} from 'react';
import trans from './ajaxCall';

const initialState = {
  transactions:[],
  compress: {}
}

const localContext = React.createContext({api:initialState,setApi:() =>{}});
 export const UseApi = () => React.useContext(localContext);

export const ApiContext = (props) => {
  const[api,setApi] = useState(initialState);

    async function DataToSave(){
      const renderApi = {...api};
      const {data} = await trans.getData();
      renderApi.transactions = data;
      setApi(renderApi);
    }

    useEffect(()=>{
      DataToSave();
    // eslint-disable-next-line
    },[]);

    return (
      <localContext.Provider value={{ api, setApi }}>
        {props.children}
      </localContext.Provider>
    );
  }