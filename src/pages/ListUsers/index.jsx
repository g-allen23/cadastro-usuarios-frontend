import MasterButton from "../../components/Button/index.jsx";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  ContainerUsers,
  CardUsers,
  TrashIcon,
  AvatarUser,
  ImgList,
} from "./styles.js";
import Trash from "../../assets/trash.svg";
import ImgHeader from "../../assets/lista-usuarios.png";

function ListUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }
    getUsers();
  }, []);

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);

    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }

  return (
    <Container>
      <ImgList src={ImgHeader} alt="Imagem lista" />
      <Title>
        <span>Lista de</span> Usuários
      </Title>
      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://avatarapi.runflare.run/public?usearname=${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon
              src={Trash}
              alt="Icone lixo"
              onClick={() => deleteUsers(user.id)}
            />
          </CardUsers>
        ))}
      </ContainerUsers>

      <MasterButton
        type="button"
        onClick={() => navigate("/")}
        mobileSmall
        
      >
        Voltar
      </MasterButton>
    </Container>
  );
}

export default ListUsers;
