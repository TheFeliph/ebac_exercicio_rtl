import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://www.nerdloja.com/cdn/shop/products/Hda9e9b6f8ef14d248acc31a4abf21f6cU_1024x1024.jpg?v=1695848297">
        Olha o Sabre de Luz que eu tenho.
      </Post>
    </div>
  );
}

export default App;