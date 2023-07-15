import "./index.css";
import NavBar from "./ux/NavBar";
import Homepage from "./pages/Homepage";
import Layout from "./ux/Layout.tsx";

function App() {
  return (
    <Layout>
      <Homepage />
    </Layout>
  );
}

export default App;
