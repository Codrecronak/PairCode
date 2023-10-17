import { copilot } from "@uiw/codemirror-themes-all";
import { darcula } from "@uiw/codemirror-themes-all";
import { dracula } from "@uiw/codemirror-themes-all";
import { githubDark } from "@uiw/codemirror-themes-all";
import { material } from "@uiw/codemirror-themes-all";
import { materialDark } from "@uiw/codemirror-themes-all";
import { monokai } from "@uiw/codemirror-themes-all";
import { monokaiDimmed } from "@uiw/codemirror-themes-all";
import { nord } from "@uiw/codemirror-themes-all";
import { sublime } from "@uiw/codemirror-themes-all";
import { vscodeDark } from "@uiw/codemirror-themes-all";
import { whiteDark } from "@uiw/codemirror-themes-all";
import { xcodeDark } from "@uiw/codemirror-themes-all";
import { Extension } from "@uiw/react-codemirror";

interface EditorTheme {
  [key: string]: Extension;
}

export const editorThemes: EditorTheme = {
  Copilot: copilot,
  Darcula: darcula,
  Dracula: dracula,
  "GitHub Dark": githubDark,
  Material: material,
  "Material Dark": materialDark,
  Monokai: monokai,
  "Monokai Dimmed": monokaiDimmed,
  Nord: nord,
  Sublime: sublime,
  "VS Code Dark": vscodeDark,
  "White Dark": whiteDark,
  "Xcode Dark": xcodeDark,
};
