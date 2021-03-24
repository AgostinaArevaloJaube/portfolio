import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: ${theme.fonts.fontFamily};
	font-weight: 400;
	color: ${theme.fonts.primaryColor}
};
body {
	height: 100vh;
	padding: 0.5rem;
background-color: #EFEAEA;
	background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxMzUpICI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0icmdiYSgyNDIsIDI0MiwgMjQyLDEpIj48L3JlY3Q+IDxjaXJjbGUgZmlsbD0icmdiYSgyMzksIDEyOSwgMTY5LDAuNjgpIiBjeD0iMCIgY3k9IjIwIiByPSIxIj48L2NpcmNsZT48Y2lyY2xlIGZpbGw9InJnYmEoMjM5LCAxMjksIDE2OSwwLjY4KSIgY3g9IjQwIiBjeT0iMjAiIHI9IjEiPjwvY2lyY2xlPjxwYXRoIGZpbGw9InJnYmEoMjM5LCAxNzAsIDEzMywwLjc3KSIgZD0ibSAxOS41IDE5LjUgaDEgdjEgaC0xeiI+PC9wYXRoPjwvcGF0dGVybj4gIDwvZGVmcz4gPHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSI+PC9yZWN0Pjwvc3ZnPg==");
};
html {
	scroll-behavior: smooth;
}
`;
export default GlobalStyle;
