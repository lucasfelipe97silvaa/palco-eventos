import { supabase } from "."
import { IEvento } from "../../types/databaseTypes"

export async function GetShows(){
    const {data,error} = await supabase.from('eventos').select("*").eq("categoria", 1).returns<IEvento[]>()

    

    return(
        data||[]
    )
}