function StatusText() {
  const status = true;

  return (
    <>
      <p
        style={{
          color: status ? "#00ff9f" : "#f64348",
        }}
      >
        Current status: {status ? '"true"' : '"false"'}
      </p>
      {status ? <p>Text is true!</p> : <p>Text is false!</p>}
    </>
  );
}

export default StatusText;
