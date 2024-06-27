
import { decrement, increment, incrementByValue } from "./redux/features/counterslices";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {

  const {count}=useAppSelector((state)=>state.counter )
  const dispatch=useAppDispatch()
  
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex gap-2 justify-center items-center border border-red-200 p-5 bg-orange-100">
          <button      onClick={() => dispatch(increment())} className="btn-primary bg-green-500 text-white p-2 rounded-md">increment</button>
          <button      onClick={() => dispatch(incrementByValue(5))} className="btn-primary bg-green-500 text-white p-2 rounded-md">increment by value</button>
          <h1 className="text-xl mx-2">{count}</h1>
          <button onClick={()=>dispatch(decrement())} className="btn-primary bg-red-500 text-white p-2 rounded-md">Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
