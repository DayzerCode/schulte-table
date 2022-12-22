import "@testing-library/react";
import { fireEvent, render, screen } from "@testing-library/react";
import { GameModeEnum } from "../../../entities/enum/gameModeEnum";
import Cell from "./Cell";

describe('Cell component', () => {

  test('check default cell class', () => {
    render(<Cell value={1} position={0} mode={GameModeEnum.EASY} size={1} />);
    const cellBtn = screen.getByTestId('cell-btn');
    expect(cellBtn).toHaveClass('cell');
    expect(cellBtn).not.toHaveClass('passedCell');
    expect(cellBtn).not.toHaveClass('completedCell');
  });

  test('check completed cell class', () => {
    render(<Cell value={1} position={0} mode={GameModeEnum.EASY} size={1} isWin={true} />);
    const cellBtn = screen.getByTestId('cell-btn');
    expect(cellBtn).toHaveClass('completedCell');
  });

  test('onClickCell success', () => {
    const onClickSuccess = () => {
      return true;
    }
    render(<Cell value={1} position={0} mode={GameModeEnum.EASY} size={1} onClick={onClickSuccess} />);
    const cellBtn = screen.getByTestId('cell-btn');
    fireEvent.click(cellBtn);
    expect(cellBtn).toHaveClass('passedCell');
  });

  test('onClickCell failure', () => {
    const onClickSuccess = () => {
      return false;
    }
    render(<Cell value={1} position={0} mode={GameModeEnum.EASY} size={1} onClick={onClickSuccess} />);
    const cellBtn = screen.getByTestId('cell-btn');
    fireEvent.click(cellBtn);
    expect(cellBtn).not.toHaveClass('passedCell');
  });
});