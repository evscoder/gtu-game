import './styles/app.scss';
import GameMap from "./components/container/game-map/GameMap";
import useMockAdapter from "./api/useMockAdapter";

function App() {
    useMockAdapter();

    return (
        <GameMap />
    );
}

export default App;
