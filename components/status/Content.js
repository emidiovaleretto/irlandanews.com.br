import useSWR from "swr";
import fetchAPI from "../../lib/FetchAPI";
import CheckIcon from "../../components/icons/CheckIcon";
import MaintanenceIcon from "../../components/icons/MaintanenceIcon";
import IncidentIcon from "../../components/icons/IncidentIcon";
import OutageIcon from "../../components/icons/OutageIcon";

export default function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let databaseStatusInformation = "Carregando...";

  if (!isLoading && data) {
    databaseStatusInformation = (
      <div className="relative mt-6 overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-200">
          <thead className="text-xs text-gray-700 bg-gray-100 border-b border-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Current Status by Service
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center">
                    <CheckIcon />
                    <span className="ml-2">No Issues</span>
                  </div>
                  <div className="flex items-center">
                    <MaintanenceIcon />
                    <span className="ml-2">Maintanence</span>
                  </div>
                  <div className="flex items-center">
                    <IncidentIcon />
                    <span className="ml-2">Incident</span>
                  </div>
                  <div className="flex items-center">
                    <OutageIcon />
                    <span className="ml-2">Outage</span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-200">
              <td className="px-6 py-4 font-semibold">Database Version</td>
              <td className="flex justify-end items-center px-6 py-4">
                <span className="w-12 rounded-md text-center text-sm bg-green-200 px-3 py-2 text-green-950">
                  {data.dependencies.database.database_version}
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-200">
              <td className="px-6 py-4 font-semibold">Max Connections</td>
              <td className="flex justify-end items-center px-6 py-4">
                <span className="w-12 rounded-md text-center text-sm bg-green-200 px-3 py-2 text-green-950">
                  {data.dependencies.database.opened_connections}
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-200">
              <td className="px-6 py-4 font-semibold">Opened Connections</td>
              <td className="flex justify-end items-center px-6 py-4">
                <span className="w-12 rounded-md text-center text-sm bg-green-200 px-3 py-2 text-green-950">
                  {data.dependencies.database.max_connections}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <>
      <div>{databaseStatusInformation}</div>
    </>
  );
}
