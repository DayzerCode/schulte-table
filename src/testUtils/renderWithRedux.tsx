import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../reduxSlices/store";


export const renderWithRedux = (component: ReactNode, intitalState = {}) => {
    const store = createReduxStore(intitalState);
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
} 