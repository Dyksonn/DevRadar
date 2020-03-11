import { createAppContainer, createSwitchNavigator } from "react-navigation";

//Auth
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

const AuthNavigator = createSwitchNavigator({
  Login,
  Cadastro
});

const AppRoutes = createAppContainer(AuthNavigator);

export default AppRoutes;
