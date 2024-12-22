import CheckIcon from "../../components/icons/CheckIcon";
import MaintanenceIcon from "../../components/icons/MaintanenceIcon";
import IncidentIcon from "../../components/icons/IncidentIcon";
import OutageIcon from "../../components/icons/OutageIcon";

export default function Content() {
  const data = {
    "Database Version": "16.6",
    "Max Connections": 100,
    "Opened Connections": 1,
  };
  return (
    <div class="relative mt-6 overflow-x-auto shadow-md">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-200">
        <thead class="text-xs text-gray-700 bg-gray-100 border-b border-gray-200">
          <tr>
            <th scope="col" class="px-6 py-3">
              Current Status by Service
            </th>
            <th scope="col" class="px-6 py-3">
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center">
                  <CheckIcon />
                  <span class="ml-2">No Issues</span>
                </div>
                <div className="flex items-center">
                  <MaintanenceIcon />
                  <span class="ml-2">Maintanence</span>
                </div>
                <div className="flex items-center">
                  <IncidentIcon />
                  <span class="ml-2">Incident</span>
                </div>
                <div className="flex items-center">
                  <OutageIcon />
                  <span class="ml-2">Outage</span>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b border-gray-200">
            <td class="px-6 py-4 font-semibold">Database Version</td>
            <td class="flex justify-end items-center px-6 py-4">
              <span className="w-12 rounded-md text-center text-sm bg-green-200 px-3 py-2 text-green-950">
                {data["Database Version"]}
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200">
            <td class="px-6 py-4 font-semibold">Max Connections</td>
            <td class="flex justify-end items-center px-6 py-4">
              <span className="w-12 rounded-md text-center text-sm bg-green-200 px-3 py-2 text-green-950">
                {data["Max Connections"]}
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200">
            <td class="px-6 py-4 font-semibold">Opened Connections</td>
            <td class="flex justify-end items-center px-6 py-4">
              <span className="w-12 rounded-md text-center text-sm bg-green-200 px-3 py-2 text-green-950">
                {data["Opened Connections"]}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
