import { supabase } from ".";
import { IEvento } from "../../types/databaseTypes";

async function getEventsByCategoryId(categoryId: string) {
  const { data, error } = await supabase
    .from("eventos")
    .select("*")
    .eq("categoria_id", categoryId)
    .returns<IEvento[]>();

  if (error) {
    console.log("ERRO AO BUSCAR EVENTO POR CATEGORIA: ", error);
    throw new Error("Tente novamente mais tarde");
  }

  return data || [];
}

async function getAll() {
  const { data, error } = await supabase.from("eventos").select("*");

  if (error) {
    console.log("ERRO AO BUSCAR EVENTOS: ", error);
    throw new Error("Tente novamente mais tarde");
  }

  return data || [];
}

export const eventosService = {
    getAll,
    getEventsByCategoryId
}
