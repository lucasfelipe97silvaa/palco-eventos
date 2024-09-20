import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Categorias, IEvento } from "../../../types/databaseTypes";
import { Header } from "../../../components/header";
import { ImageBanner } from "../../../components/imageBanner";
import { BoxProduct } from "../../../components/boxProduct";
import { useAuth } from "../../../hooks/useAuth";
import { Section } from "../../../components/Section";
import { eventosService } from "../../../services/supabase/eventoService";
import { notify } from "react-native-notificated";
import { router } from "expo-router";

export default function Home() {
  const { isAuth } = useAuth();
  const [eventos, setEventos] = useState<IEvento[]>([]);

  useEffect(() => {
    if (!isAuth) router.replace("/login");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await eventosService.getAll();

        setEventos(result);
      } catch (err) {
        notify("error", {
          params: {
            title: "Erro",
            description: "Tente novamente mais tarde",
          },
        });
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Header />
      <ScrollView showsHorizontalScrollIndicator={false} className="mb-[120px]">
        <View>
          <ImageBanner />

          <Section
            title="Shows"
            data={eventos.filter(
              (evento) => evento.categoria_id === Categorias.SHOWS
            )}
          />
          <Section
            title="StandUp"
            data={eventos.filter(
              (evento) => evento.categoria_id === Categorias.STANDUP
            )}
          />
          <Section
            title="Teatro"
            data={eventos.filter(
              (evento) => evento.categoria_id === Categorias.TEATRO
            )}
          />
          <Section
            title="Baladas"
            data={eventos.filter(
              (evento) => evento.categoria_id === Categorias.BALADAS
            )}
          />
          <Section
            title="Festivais"
            data={eventos.filter(
              (evento) => evento.categoria_id === Categorias.FESTIVAIS
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
