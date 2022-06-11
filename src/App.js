import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { AuthProvider } from "./components/Providers/AuthProvider";
import AppRouter from "./components/Routers/AppRouter";
import Footer from "./components/Footer/Footer";

library.add(fas);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
