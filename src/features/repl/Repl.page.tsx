import { FunctionComponent, useEffect, useState } from "react";
import plantumlEncoder from "plantuml-encoder";
// import ReactDOMServer from "react-dom/server";

import { Editor } from "./Editor";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shadcn-components/ui/dropdown-menu";

export const ReplPage: FunctionComponent = () => {
  const [diagramInput, setDiagramInput] = useState("");
  const [svg, setSvg] = useState<string | null>(null);
  const [layers, setLayers] = useState<any[]>([]);
  const [disabledLayers, setDisabledLayers] = useState<any[]>([]);

  useEffect(() => {
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

  return (
    <>
      <div className="flex h-full">
        <div className="w-1/2">
          <Editor
            onChange={(v: any) => {
              console.log(v);
              setDiagramInput(v);
            }}
          />
        </div>
        <div className="w-1/2 overflow-x-auto overflow-y-auto">
          <div className="bg-gray-50 h-14 flex items-center justify-end px-4 gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* <Button variant="outline">Open</Button> */}
                <button
                  className="text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-4 py-2.5 text-center inline-flex items-center"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
          {svg !== null && (
            <div className="w-full" dangerouslySetInnerHTML={{ __html: svg }} />
          )}
        </div>
      </div>
    </>
  );
};
