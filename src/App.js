import FlipCard from './components/FlipCard';
import SocialLink from './components/SocialLink';
import useTimer from './useTimer';
import './App.scss';

function App() {
  const timer = useTimer({d:14,h:0,m:0,s:0});
  
  return (
    <main className="App">
      <h1 className="App__title">We're launching soon</h1>
      <div className="App__timer">
        <FlipCard number={timer.d} text="Days" />
        <FlipCard number={timer.h} text="Hours" />
        <FlipCard number={timer.m} text="Minutes" />
        <FlipCard number={timer.s} text="Seconds" />
      </div>
      <div className="App__social">
        <SocialLink to="https://facebook.com" type="facebook" />
        <SocialLink to="https://pinterest.com" type="pinterest" />
        <SocialLink to="https://instagram.com" type="instagram" />
      </div>
    </main>
  );
}

export default App;
