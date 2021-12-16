const HelloHooks = () => {
  let flag = false;
  const style = { color: flag ? "red" : "blue" };

  return (
    <div>
      <button onClick={() => (flag = !flag)}>Click</button>
      <p style={style}>Hello Hooks</p>
    </div>
  );
};

export default HelloHooks