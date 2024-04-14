import { FunctionComponent, useCallback, useEffect, useState } from "react";
import plantumlEncoder from "plantuml-encoder";

import { Editor } from "./Editor";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ReplPage: FunctionComponent = () => {
  const [diagramInput, setDiagramInput] = useState("");
  const [rawInput, setRawInput] = useState("");
  const [svg, setSvg] = useState<string | null>(null);
  const [layers, setLayers] = useState<any[]>([]);
  const [disabledLayers, setDisabledLayers] = useState<any[]>([]);

  // useEffect(() => {
  //   async function getSvg() {
  //     const encoded = plantumlEncoder.encode(process(diagramInput));
  //     await fetch(
  //       `${import.meta.env.VITE_BLUEATOM_API_URL}/plantuml/svg/${encoded}`
  //     )
  //       .then((res) => res.text())
  //       .then((text) => setSvg(processSvg(text)));
  //   }
  //   if (diagramInput !== "") {
  //     getSvg();
  //   } else {
  //     setSvg(null);
  //   }
  // }, [diagramInput, disabledLayers]);

  useEffect(() => {
    process(diagramInput);
  }, [diagramInput]);

  useEffect(() => {
    handleRefresh();
  }, [disabledLayers]);

  const handleRefresh = useCallback(() => {
    async function getSvg() {
      const encoded = plantumlEncoder.encode(process(diagramInput));
      await fetch(
        `${import.meta.env.VITE_BLUEATOM_API_URL}/plantuml/svg/${encoded}`
      )
        .then((res) => res.text())
        .then((text) => setSvg(processSvg(text)));
    }
    if (diagramInput !== "") {
      getSvg();
    } else {
      setSvg(null);
    }
  }, [diagramInput, disabledLayers]);

  function processSvg(text: string) {
    return text;
  }

  function process(text: string) {
    const lines = text.split("\n");
    let tempLayers: any[] = [];
    const stack: string[] = [];
    let disabled = false;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].charAt(0) === "/" && lines[i].charAt(1) === "/") {
        lines[i] = "";
      }
      if (lines[i].includes("@[")) {
        let name = lines[i].replace("@", "").replace("[", "").replace("]", "");
        tempLayers.push(name);
        if (disabledLayers.find((l) => l.name === name)) lines[i] = "@disabled";
        else lines[i] = "";
      }
      if (disabled === true) {
        lines[i].split("").forEach((c) => {
          if (c === "(") stack.push("(");
          if (c === "{") stack.push("{");
          if (c === ")") stack.pop();
          if (c === "}") stack.pop();
        });
        lines[i] = "";
        if (stack.length === 0) disabled = false;
      }
      if (lines[i].includes("@disabled")) {
        disabled = true;
        lines[i] = "";
        // lines[i + 1] = "";
      }
    }
    tempLayers = [...new Set(tempLayers)];
    tempLayers = tempLayers.map((layer) => ({ name: layer, active: true }));
    layers.forEach((l) => {
      if (!l.active && tempLayers.find((tl) => tl.name === l.name) !== null) {
        tempLayers[tempLayers.findIndex((tl) => tl.name === l.name)].active =
          false;
      }
    });
    setLayers(tempLayers);
    return lines.join("\n");
  }

  console.log(diagramInput);

  return (
    <>
      <div className="flex h-full flex-col md:flex-row">
        <div className="w-full h-1/2 md:w-1/2 md:h-full">
          <Editor
            onChange={(v: any, rawInput: any) => {
              setDiagramInput(v);
              setRawInput(rawInput);
            }}
            onBlur={() => {
              handleRefresh();
            }}
          />
        </div>
        <div className="w-full h-1/2 md:w-1/2 md:h-full flex flex-col">
          <div className="bg-gray-50 h-14 flex items-center justify-end px-4 gap-2 shrink-0">
            <button
              disabled={rawInput === ""}
              onClick={handleRefresh}
              className={
                rawInput === ""
                  ? "text-white bg-gray-300 font-medium  text-sm px-4 py-2.5 text-center inline-flex items-center gap-2"
                  : "text-white bg-blue-600 hover:bg-primary-800 hover:ring-4 focus:outline-none hover:ring-primary-300 font-medium  text-sm px-4 py-2.5 text-center inline-flex items-center gap-2"
              }
            >
              Refresh
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* <Button variant="outline">Open</Button> */}
                <button
                  className="text-white bg-blue-600 hover:bg-primary-800 hover:ring-4 active:ring-4 focus:outline-none hover:ring-primary-300 active:ring-primary-300 font-medium  text-sm px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
                >
                  Active Layers
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Layers</DropdownMenuLabel>
                {layers.length > 0 && (
                  <DropdownMenuCheckboxItem
                    checked={layers.every((l) => l.active)}
                    onCheckedChange={(checked) => {
                      let temp = layers;
                      temp = temp.map((l) => ({
                        name: l.name,
                        active: checked,
                      }));
                      setLayers(temp);
                      setDisabledLayers(temp.filter((l) => !l.active));
                    }}
                    disabled={false}
                    className="font-semibold"
                  >
                    Show all
                  </DropdownMenuCheckboxItem>
                )}
                <DropdownMenuSeparator />
                {layers.length > 0 &&
                  layers.map((layer) => (
                    <DropdownMenuCheckboxItem
                      checked={layer.active}
                      onCheckedChange={() => {
                        let temp = layers;
                        temp[
                          temp.findIndex((l) => l.name === layer.name)
                        ].active = !layer.active;
                        setLayers(temp);
                        setDisabledLayers(temp.filter((l) => !l.active));
                      }}
                      disabled={false}
                    >
                      {layer.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                {layers.length === 0 && (
                  <div className="flex flex-col items-center justify-center p-2 text-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>

                    <p className="text-md font-semibold text-gray-700">
                      You don't have any layers
                    </p>
                    <p className="text-sm text-gray-600">
                      Add layers to your document by adding the tag <br />
                      <code className="text-sm text-blue-600">@[my-layer]</code>
                      <br /> above a component
                    </p>
                  </div>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {svg !== null && rawInput !== "" && (
            <div
              className="w-full grow overflow-x-auto overflow-y-auto"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          )}
          {rawInput === "" && (
            <div className="grow overflow-x-auto overflow-y-auto flex flex-col items-center md:justify-center rounded m-4 bg-blue-300 border-blue-600 border-4">
              <div className="mx-w-md xs:max-w-sm md:max-w-xs lg:max-w-sm flex flex-col items-center justify-center py-4 md:py-0">
                <h3 className="text-2xl font-semibold">
                  👋 Welcome to blueatom!
                </h3>
                <p className="mb-4">Here's some tips to help you get started</p>
                <ol>
                  <li>
                    <p className="font-noraml">
                      1. Create a diagram using PlantUML syntax in the Text
                      Editor tab
                    </p>
                    <code className="my-2 w-full text-sm sm:text-base inline-flex flex-col text-left items-start bg-gray-800 text-white rounded p-4 pl-6">
                      <span className="whitespace-pre-line text-sm">{`Me->blueatom: Hi!`}</span>
                      <span className="whitespace-pre-line text-sm">{`blueatom->Me: Hello!`}</span>
                    </code>
                  </li>
                  <li>
                    <p className="font-normal">
                      2. Add layers to your document using blueatom's tag syntax
                    </p>
                    <code className="my-2 w-full text-sm sm:text-base inline-flex flex-col text-left items-start bg-gray-800 text-white rounded p-4 pl-6">
                      <span className="whitespace-pre-line text-sm text-blue-300">{`@[my-first-layer]`}</span>
                      <span className="whitespace-pre-line text-sm">{`Me->blueatom: Hi!`}</span>
                      <span className="whitespace-pre-line text-sm text-blue-300">{`@[my-second-layer]`}</span>
                      <span className="whitespace-pre-line text-sm">{`blueatom->Me: Hello!`}</span>
                    </code>
                  </li>
                  <li className="font-normal">
                    3. Explore additional PlantUML libraries in the Settings tab
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
