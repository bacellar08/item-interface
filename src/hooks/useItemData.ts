import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ItemData } from "../interface/ItemData";

const API_URL = 'http://localhost:8080/item'

const fetchData = async (): AxiosPromise<ItemData[]> => {
  const res = await axios.get(API_URL)
  return res;

}

export function useItemData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['item-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }

}