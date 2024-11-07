import Button from './components/common/Button';
import {
  Body1,
  Body2,
  Button1,
  Button2,
  Caption1,
  Title1,
  Title2,
  Title3,
} from './components/common/Typography';
import './App.scss';

function App() {
  return (
    <>
      <div className='Wrapper'>
        <h1>Typography</h1>
        <Title1>The quick brown fox jumps over the lazy dog. </Title1>
        <Title2>The quick brown fox jumps over the lazy dog.</Title2>
        <Title3>The quick brown fox jumps over the lazy dog.</Title3>
        <Button1>
          The quick brown fox jumps over the lazy dog.
          <br />
        </Button1>
        <Button2>
          The quick brown fox jumps over the lazy dog.
          <br />
        </Button2>
        <Button2 underline={true}>
          The quick brown fox jumps over the lazy dog.
          <br />
        </Button2>
        <Body1>The quick brown fox jumps over the lazy dog.</Body1>
        <Body2> The quick brown fox jumps over the lazy dog.</Body2>
        <Caption1> The quick brown fox jumps over the lazy dog.</Caption1>
        <h1>Buton</h1>
        <Button size='b' variant='primary' onClick={() => ''}>
          Primary-button1
        </Button>
        <Button size='b' variant='secondary' onClick={() => ''}>
          Secondary-button1
        </Button>
        <Button size='b' variant='tertiary' onClick={() => ''}>
          tertiary-button1
        </Button>
        <Button size='s' variant='primary' onClick={() => ''}>
          Primary-button2
        </Button>
        <Button size='s' variant='secondary' onClick={() => ''}>
          Secondary-button2
        </Button>
        <Button size='s' variant='tertiary' onClick={() => ''}>
          tertiary-button1
        </Button>
        <Button size='b' variant='tertiary' disabled={true} onClick={() => ''}>
          disabled-button1
        </Button>
      </div>
    </>
  );
}

export default App;
