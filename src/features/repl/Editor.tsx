import { useEffect, useState } from "react";
export const Editor = ({
  onChange,
  onBlur,
}: {
  onChange: any;
  onBlur: any;
}) => {
  const [activeEditor, setActiveEditor] = useState("text");
  const [diagramInput, setDiagramInput] = useState("");
  const [useCFour, setUseCFour] = useState(false);
  const [useMonochrome, setUseMonochrome] = useState(false);

  useEffect(() => {
    const withImports = [
      "@startuml",
      "skinparam defaultFontName system-ui",
      "skinparam defaultFontSize 12",
      useCFour
        ? "!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml\n"
        : "",
      useMonochrome ? "skinparam monochrome true" : "",
      diagramInput,
      "@enduml",
    ].join("\n");
    onChange(withImports, diagramInput);
  }, [diagramInput, useCFour, useMonochrome]);
  return (
    <>
      <div className="h-full flex flex-col">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 bg-gray-50 grow-0">
          <li className="">
            <button
              aria-current="page"
              className={
                activeEditor === "text"
                  ? "inline-block p-4 text-blue-600 bg-gray-200 active"
                  : "inline-block p-4 hover:text-gray-600 hover:bg-gray-100"
              }
              onClick={() => setActiveEditor("text")}
            >
              Text Editor
            </button>
          </li>
          {/* <li className="">
            <button
              onClick={() => setActiveEditor("visual")}
              className={
                activeEditor === "visual"
                  ? "inline-block p-4 text-blue-600 bg-gray-200 active"
                  : "inline-block p-4 hover:text-gray-600 hover:bg-gray-100"
              }
            >
              Visual Editor
            </button>
          </li> */}
          <li className="">
            <button
              onClick={() => setActiveEditor("settings")}
              className={
                activeEditor === "settings"
                  ? "inline-block p-4 text-blue-600 bg-gray-200 active"
                  : "inline-block p-4 hover:text-gray-600 hover:bg-gray-100"
              }
            >
              Settings
            </button>
          </li>
          <li className="">
            <button
              onClick={() => setActiveEditor("documentation")}
              className={
                activeEditor === "documentation"
                  ? "inline-block p-4 text-blue-600 bg-gray-200 active"
                  : "inline-block p-4 hover:text-gray-600 hover:bg-gray-100"
              }
            >
              Documentation
            </button>
          </li>
        </ul>
        <>
          {activeEditor === "text" && (
            <textarea
              rows={4}
              className="font-mono grow block p-2.5 w-full text-sm font-medium tracking-wide text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              value={diagramInput}
              onChange={(e) => setDiagramInput(e.target.value)}
              onBlur={onBlur}
            />
          )}
          {activeEditor === "visual" && <div>Visual</div>}
          {activeEditor === "settings" && (
            <div className="grow w-full m-4">
              <h1 className="text-2xl font-bold border-b-2 border-gray-200">
                {" "}
                Settings{" "}
              </h1>
              <div className="m-4">
                <h2 className="text-lg font-semibold border-b-2 border-gray-200">
                  Libraries
                </h2>

                <div className="flex items-center mb-4 mt-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className={
                      useCFour
                        ? "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 focus:ring-2"
                        : "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 focus:ring-2"
                    }
                    onChange={() => setUseCFour((prev) => !prev)}
                    checked={useCFour}
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-700"
                  >
                    C4{" "}
                    <a
                      className="text-blue-600"
                      href="https://github.com/plantuml-stdlib/C4-PlantUML"
                    >
                      [docs]
                    </a>
                  </label>
                </div>
              </div>
              <div className="m-4">
                <h2 className="text-lg font-semibold border-b-2 border-gray-200">
                  Styles
                </h2>
                <div className="flex items-center mb-4 mt-4">
                  <input
                    id="monochrome-checkbox"
                    type="checkbox"
                    value=""
                    className={
                      useMonochrome
                        ? "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 focus:ring-2"
                        : "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 focus:ring-2"
                    }
                    onChange={() => setUseMonochrome((prev) => !prev)}
                    checked={useMonochrome}
                  />
                  <label
                    htmlFor="monochrome-checkbox"
                    className="ms-2 text-sm font-medium text-gray-700"
                  >
                    Monochrome{" "}
                    <a
                      className="text-blue-600"
                      href="https://plantuml.com/en/skinparam"
                    >
                      [docs]
                    </a>
                  </label>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    </>
  );
};
