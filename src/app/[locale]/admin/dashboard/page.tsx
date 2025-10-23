import { getAllStatistics } from "@/lib/api/all-statistics";
import FirstRow from "./_components/1st-row";
import ProductStatistic from "./_components/ProductsStatistics";

export default async function page() {
  const response = await getAllStatistics();

  if (!("statistics" in response)) throw new Error("Can't fetch statistics");
  const { statistics } = response;

  return (
    <div className="h-screen space-y-10">
      <FirstRow statistics={statistics} />
      <ProductStatistic />
    </div>
  );
}
