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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
