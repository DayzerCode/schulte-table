import "@testing-library/react";
import { GameState } from "../../reduxSlices/gameSlice/gameSlice";
import { addToReduxInitialState } from "../../testUtils/addToReduxInitialState";
import { renderWithRedux } from "../../testUtils/renderWithRedux";
import NextTarget from "./NextTarget";

describe('NextTarget component', () => {
  test('correct next target', () => {
    const component = renderWithRedux(<NextTarget />, addToReduxInitialState<Partial<GameState>>('game', { currentBoard: [5] }));
    expect(component.getByTestId('next-target')).toHaveTextContent('5');
    expect(component.queryByTestId('win-label')).not.toBeInTheDocument();
  });

  test('correct display win label', () => {
    const state = addToReduxInitialState<Partial<GameState>>(
      'game',
      { process: { isWin: true, numberGame: 0, isPause: false, currentIndex: 0 } }
    );
    const component = renderWithRedux(<NextTarget />, state);
    expect(component.getByTestId('win-label')).toBeInTheDocument();
    expect(component.queryByTestId('next-target')).not.toBeInTheDocument();
  });
});