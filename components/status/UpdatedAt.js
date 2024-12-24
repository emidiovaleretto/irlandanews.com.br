import useSWR from "swr";
import fetchAPI from "../../lib/FetchAPI";

export default function UpdatedAt() {
  const { data, isLoading } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAt = "Loading...";
  if (!isLoading && data) {
    updatedAt = new Date(data.updated_at).toLocaleString("en-IE");
  }
  return (
    <p className="text-sm mt-4 text-center text-gray-600">
      Last updated at {updatedAt}
    </p>
  );
}
