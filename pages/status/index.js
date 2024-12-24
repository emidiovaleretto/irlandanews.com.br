import Title from "../../components/status/Title";
import UpdatedAt from "../../components/status/UpdatedAt";
import CheckIcon from "../../components/icons/CheckIcon";
import DatabaseStatus from "../../components/status/Content";

export default function StatusPage() {
  return (
    <div className="grid place-content-center h-screen bg-gray-100">
      <CheckIcon className="w-32 h-32" />
      <Title />
      <UpdatedAt />
      <DatabaseStatus />
    </div>
  );
}
