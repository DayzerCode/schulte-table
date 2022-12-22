import "@testing-library/react";
import { GameState } from "../../reduxSlices/gameSlice/gameSlice";
import { addToReduxInitialState } from "../../testUtils/addToReduxInitialState";
import { renderWithRedux } from "../../testUtils/renderWithRedux";
import Board from "./Board";

describe('Board component', () => {
  test('correct render cells', () => {
    const component = renderWithRedux(<Board />, addToReduxInitialState<Partial<GameState>>('game', { currentBoard: [1, 2, 3, 4, 5, 6] }));
    expect(component.getAllByTestId('cell-btn').length).toBe(6);
    expect(component.getAllByTestId('break').length).toBe(2);
  });
});