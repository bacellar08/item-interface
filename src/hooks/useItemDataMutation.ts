import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ItemData } from "../interface/ItemData";

const API_URL = 'http://localhost:8080/item'

const postData = async (data: ItemData): AxiosPromise<any> => {
  const res = await axios.post(API_URL, data)
  return res;

}

export function useItemDataMutation() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['item-data'])
        }
    })

    return mutate

}