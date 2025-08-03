import { CalculateScore } from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name='Jude Sam'
        School='Chennai Public School'
        total={384}
        goal={5}
      />
    </div>
  );
}

export default App;
