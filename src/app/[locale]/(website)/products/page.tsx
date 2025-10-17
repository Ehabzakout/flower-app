import ProductItem from "@/components/common/card-item";

import { getAllProductsByFilter } from "@/lib/api/products.api";
import { getTranslations } from "next-intl/server";

export default async function page({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  let filter = "";
  for (let param in searchParams) {
    filter += `${param}=${searchParams[param]}&`;
  }
  const payload: PaginatedResponse<{ products: Product[] }> = await getAllProductsByFilter(filter);
  const products = payload.products || [];

  const t = await getTranslations();
  console.log(filter);
  return (
    <section className="h-[1500px] mt-10 mb-28 overflow-y-scroll scrollBar-hidden ">
      {products.length > 0 ? (
        <div>
          {/* Grid of products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
            {products &&
              products.map((product) => <ProductItem product={product} key={product._id} />)}
          </div>
        </div>
      ) : (
        <div className="text-center py-6 rtl:text-right min-h-44 flex items-center justify-center text-maroon-500 font-bold text-3xl">
          {t("no-products")}
        </div>
      )}
    </section>
  );
}
