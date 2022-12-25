import "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { renderWithRedux } from "../../testUtils/renderWithRedux";
import PreparationForGame from "./PreparationForGame";
import { boardSizeVariantsForLetters, boardSizeVariantsForNumbers } from "./variants/boardSizeVariants";

describe('PreparationForGame page', () => {
  test('correct changing active state on buttons', () => {
    const component = renderWithRedux(<MemoryRouter><PreparationForGame /></MemoryRouter>);
    const symbolsBtns = component.getAllByTestId(`keyGroup_symbolType`, { exact: false });

    expect(symbolsBtns[0]).toHaveClass('active');
    expect(symbolsBtns[1]).not.toHaveClass('active');
    fireEvent.click(symbolsBtns[1]);
    expect(symbolsBtns[0]).not.toHaveClass('active');
    expect(symbolsBtns[1]).toHaveClass('active');
  });

  test('reset size board, if chose switch symbols on board', () => {
    const component = renderWithRedux(<MemoryRouter><PreparationForGame /></MemoryRouter>);
    const symbolsBtns = component.getAllByTestId(`keyGroup_symbolType`, { exact: false });
    let sizeBtns = component.getAllByTestId(`keyGroup_size`, { exact: false });

    fireEvent.click(sizeBtns[2]);
    expect(sizeBtns.length).toBe(boardSizeVariantsForNumbers.length);

    fireEvent.click(symbolsBtns[1]);
    sizeBtns = component.getAllByTestId(`keyGroup_size`, { exact: false });

    expect(sizeBtns.length).toBe(boardSizeVariantsForLetters.length);
    expect(sizeBtns[0]).toHaveClass('active');
  });
});