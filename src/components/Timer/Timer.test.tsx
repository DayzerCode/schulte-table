import "@testing-library/react";
import { act, fireEvent } from "@testing-library/react";
import { GameState } from "../../reduxSlices/gameSlice/gameSlice";
import { addToReduxInitialState } from "../../testUtils/addToReduxInitialState";
import { renderWithRedux } from "../../testUtils/renderWithRedux";
import { formatSeconds } from "../../utils/formatSeconds/formatSeconds";
import Timer, { TIMER_INTERVAL } from "./Timer";

describe('Timer component', () => {
  test('correct update after 1 second', () => {
    const component = renderWithRedux(<Timer />);
    const passedTimeElem = component.getByTestId('passed-time');
    expect(passedTimeElem).toHaveTextContent(formatSeconds(0));
    act(() => { jest.advanceTimersByTime(TIMER_INTERVAL) });
    expect(passedTimeElem).toHaveTextContent(formatSeconds(1));
  });

  test('timer stoped, if pause enabled', () => {
    const component = renderWithRedux(<Timer />);
    const switchPauseBtn = component.getByTestId('switch-pause');
    const passedTimeElem = component.getByTestId('passed-time');
    fireEvent.click(switchPauseBtn);
    expect(passedTimeElem).toHaveTextContent(formatSeconds(0));
    act(() => { jest.advanceTimersByTime(TIMER_INTERVAL) });
    expect(passedTimeElem).toHaveTextContent(formatSeconds(0));
  });

  test('timer stoped, if game won', () => {
    const state = addToReduxInitialState<Partial<GameState>>(
      'game',
      {
        process: {
          isWin: true,
          currentIndex: 0,
          isPause: false,
          numberGame: 0
        }
      }
    );
    const component = renderWithRedux(<Timer />, state);
    const passedTimeElem = component.getByTestId('passed-time');
    expect(passedTimeElem).toHaveTextContent(formatSeconds(0));
    act(() => { jest.advanceTimersByTime(TIMER_INTERVAL) });
    expect(passedTimeElem).toHaveTextContent(formatSeconds(0));
  });

  test('check switch pause button', () => {
    const component = renderWithRedux(<Timer />);
    const switchPauseBtn = component.getByTestId('switch-pause');
    expect(switchPauseBtn).toHaveTextContent('Pause');
    fireEvent.click(switchPauseBtn);
    expect(switchPauseBtn).toHaveTextContent('Continue');
  });
});

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
});