import Layout from "../components/template/Layout";
import useAppData from "../data/hooks/useAppData";

export default function Notificacoes() {
  const {alternarTema} = useAppData()

  return (
    <Layout titulo="Notificações" subtitulo="Página de Notificações">
      <h3>Página de notificações</h3>
      <button onClick={alternarTema}>Alternar modo</button>
    </Layout>
  )
}