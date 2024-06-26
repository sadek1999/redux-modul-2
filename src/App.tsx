function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex gap-2 justify-center items-center border border-red-200 p-5 bg-orange-100">
          <button className="btn-primary bg-green-500 text-white p-2 rounded-md">increment</button>
          <h1 className="text-xl mx-2">00</h1>
          <button className="btn-primary bg-red-500 text-white p-2 rounded-md">Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
