//Blog.test.js
import { render } from "@testing-library/react";
import Blog from "./Blog";

test('h1 renders properly', () => {
    const container = render(<Blog subtitle="Blog" />)
    expect(renderHTML).toMatchSnapshot();
})
