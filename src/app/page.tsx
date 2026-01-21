export default function Home() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick()}>Click me</button>
  );
}
