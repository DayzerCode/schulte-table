import "@testing-library/react";
import { render } from "@testing-library/react";
import { GameParameter } from "../../../entities/types/gameParameter";
import GroupButtons from "./GroupButtons";

describe('GroupButtons component', () => {
  test('correct render', () => {
    const nameGroup = 'Test group';
    const defaultActivedElement = 'testBtn1';
    const testVariants: GameParameter[] = [
      {
        name: 'testBtn1',
        value: 'testBtn1',
      },
      {
        name: 'testBtn2',
        value: 'testBtn2',
      },
    ];
    const component = render(<GroupButtons
      nameGroup={nameGroup}
      keyGroup="testGroup"
      currentValue={defaultActivedElement}
      updateParameter={() => { return undefined }}
      variants={testVariants}
    />);

    expect(component.getByText(nameGroup)).toBeInTheDocument();
    expect(component.getAllByTestId('btn', { exact: false }).length).toBe(2);
    testVariants.forEach(({ name }) => {
      const button = expect(component.getByText(name));
      button.toBeInTheDocument();
      if (name === defaultActivedElement) {
        button.toHaveClass('active');
      }
    });
  });
});