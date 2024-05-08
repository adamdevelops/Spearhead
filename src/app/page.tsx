"use client";
import { ExampleButton, LayoutContainer } from "./components";
import MonthlyChart from "./components/MonthlyChart/MonthlyChart";
import { useAppDispatch, useAppSelector } from "./lib/hooks";
import { setCounterState } from "./lib/store/counterSlice";

export default function Home() {
  const counterState = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <main>
      <LayoutContainer>
        <h1>Spearhead</h1>
        <p>{`You clicked ${counterState.count} times`}</p>
        <div>
          <ExampleButton
            label="+ Add"
            onClick={() => dispatch(setCounterState(counterState.count + 1))}
          />
          <ExampleButton
            label="- Subtract"
            onClick={() => dispatch(setCounterState(counterState.count - 1))}
          />
        </div>
      </LayoutContainer>
      <MonthlyChart />
    </main>
  );
}
