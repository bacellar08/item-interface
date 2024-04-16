import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ItemData } from "../interface/ItemData";

const API_URL = 'http://localhost:8080/item'

const postData = async (data: ItemData): AxiosPromise<any> => {
  const res = await axios.post(API_URL, data)
  return res;

}

const deleteData = async (id: number): Promise<any> => {
    const res = await axios.delete(`${API_URL}/${id}`)
    console.log(res.data)
    return res.data 
}

export function useItemDataMutation() {
    const queryClient = useQueryClient();

    const postMutation = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['item-data'])
        }
    })

    const deleteMutation = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {queryClient.invalidateQueries(['item-data'])}
    })

    return {postMutation, deleteMutation}

}

