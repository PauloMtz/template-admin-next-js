import Layout from "../components/template/Layout";
import useAppData from "../data/hooks/useAppData";

export default function Notificacoes() {
  const contexto = useAppData()

  return (
    <Layout titulo="Notificações" subtitulo="Página de Notificações">
      <h3>{contexto.nome}</h3>
    </Layout>
  )
}