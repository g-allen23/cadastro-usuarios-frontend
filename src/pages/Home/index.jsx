import {
  Title,
  Container,
  SubTitle,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
  Notification,
} from "./styles.js";
import { useRef, useState, useEffect } from "react";
import UserImage from "../../assets/img-principal.svg";
import api from "../../services/api";
import MasterButton from "../../components/Button/index.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  const [notification, setNotification] = useState("");
  const [notificationType, setNotificationType] = useState("error");
  const notificationTimeout = useRef(null);

  function showNotification(message, type = "error") {
    clearTimeout(notificationTimeout.current);

    setNotificationType(type);
    setNotification(message);

    notificationTimeout.current = setTimeout(() => {
      setNotification("");
      notificationTimeout.current = null;
    }, 3000);
  }

  useEffect(() => {
    return () => clearTimeout(notificationTimeout.current);
  }, []);

  async function registerNewUser() {
    const name = inputName.current.value.trim();
    const age = Number(inputAge.current.value);
    const email = inputEmail.current.value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !inputAge.current.value || !email) {
      showNotification("Preencha todos os campos! ❌");
      return;
    }

    if (!Number.isInteger(age) || age <= 0 || age > 120) {
      showNotification("Digite uma idade válida! ❌");
      return;
    }

    if (!emailValido.test(email)) {
      showNotification("Digite um e-mail válido! ❌");
      return;
    }

    try {
      const data = await api.post("/usuarios", {
        email,
        age,
        name,
      });

      console.log(data);

      showNotification("Usuário cadastrado com sucesso! ✅", "success");
      inputName.current.value = "";
      inputAge.current.value = "";
      inputEmail.current.value = "";
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      showNotification("Não foi possível cadastrar o usuário! ❌");
    }
  }

  return (
    <Container>
      {notification && (
        <Notification $type={notificationType} role="status" aria-live="polite">
          {notification}
        </Notification>
      )}

      <img src={UserImage} alt="Imagem cadastro" />

      <Title>
        <span>Cadastro de</span> <br /> Usuários
      </Title>

      <SubTitle>
        Gerencie seus usários de forma simples <br /> e organizada.
      </SubTitle>

      <Form>
        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Digite o nome" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Digite a idade" ref={inputAge} />
          </div>
        </ContainerInputs>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input
            type="email"
            placeholder="seuemail@exemplo.com"
            ref={inputEmail}
          />
        </div>

        <MasterButton type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </MasterButton>

        <MasterButton type="button" onClick={() => navigate("/lista-usuarios")}>
          Listar Usuários
        </MasterButton>
      </Form>
    </Container>
  );
}

export default Home;
