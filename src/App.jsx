import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Fácil" targetTime={1} />
        <TimerChallenge title="Não Tão Fácil" targetTime={5} />
        <TimerChallenge title="Ficando Difícil" targetTime={10} />
        <TimerChallenge title="Só para Profissionais" targetTime={15} />
      </div>
    </>
  );
}

export default App;
