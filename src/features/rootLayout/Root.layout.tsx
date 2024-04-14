import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export interface RootLayoutProps {}

export const RootLayout: FunctionComponent<RootLayoutProps> = ({}) => {
  return (
    <main className="h-full flex flex-col">
      <div className="flex gap-4 bg-black px-4 py-4 grow-0 justify-between">
        <a href="/" className="flex gap-4">
          <svg
            className="w-12 h-8 my-auto"
            viewBox="0 0 20 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="16" height="12" x="0" y="0" fill="#2563eb" />
            <rect width="16" height="12" x="4" y="4" fill="#93c5fd" />
          </svg>
          <h1 className="text-3xl font-semibold text-blue-600">blueatom</h1>
        </a>
        <div
          className="hidden w-full md:block md:w-auto my-auto"
          id="navbar-default"
        >
          {/* <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="/documentation"
                className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Documentation
              </a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="h-full">
        <Outlet />
        <Analytics />
        <SpeedInsights route="/" />
      </div>
    </main>
  );
};
