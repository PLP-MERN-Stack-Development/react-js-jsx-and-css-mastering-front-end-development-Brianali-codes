// src/App.jsx
import Layout from "./components/layout";
import TaskManager from "./components/taskmanager";
import ApiData from "./pages/apiData";

export default function App() {
  return (
    <Layout>
      <TaskManager />
      <div className="my-10">
        <ApiData />
      </div>
    </Layout>
  );
}
